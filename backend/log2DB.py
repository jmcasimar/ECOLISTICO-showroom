#!/usr/bin/env python3
import os
import re
import json
from time import sleep
import credentials as cr
from bson import json_util
from datetime import datetime
import paho.mqtt.client as mqtt
from mqttCallback import mqttController
"""
# PENDIENTE
1- Detectar litros para actualizar el estado de los volumenes de agua
2- Estado On/Off Compresor
3- Estados de las bombas

Estos últimos se pueden obtener parcialmente de las líneas updateSystemState.
"""
# Define path to parse app
os.environ['PARSE_API_ROOT'] = cr.db_uri

from parse_rest.datatypes import Function, Object, GeoPoint
from parse_rest.connection import register
from parse_rest.query import QueryResourceDoesNotExist
from parse_rest.connection import ParseBatcher
from parse_rest.core import ResourceRequestBadRequest, ParseError

# Create Config State to Query
class Config(Object):
    pass

# Create State Class to Query and write in it
class State(Object):
    system = ''
    RealTime = datetime.now()
    Vol_Recirculation = 0
    Vol1 = 0
    Vol2 = 0
    Vol3 = 0
    Vol4 = 0
    Vol5 = 0
    Vol_SMaker = 0
    FAN1 = False
    FAN2 = False
    FAN3 = False
    FAN4 = False
    IN_FAN1 = False
    IN_FAN2 = False
    IN_FAN3 = False
    IN_FAN4 = False
    OUT_FAN1 = False
    OUT_FAN2 = False
    OUT_FAN3 = False
    OUT_FAN4 = False
    L1S1 = False
    L1S2 = False
    L1S3 = False
    L1S4 = False
    L2S1 = False
    L2S2 = False
    L2S3 = False
    L2S4 = False
    L3S1 = False
    L3S2 = False
    L3S3 = False
    L3S4 = False
    L4S1 = False
    L4S2 = False
    L4S3 = False
    L4S4 = False
    PumpIn = 0
    PumpOut = 0
    PumpSMaker = 0
    Fill_H2O = 0 # Not include in showroom
    ESP_Front = {}
    ESP_Center = {}
    ESP_Back = {}
    Grower1 = {}
    Grower2 = {}
    Grower3 = {}
    Grower4 = {}
    EV1A1 = False
    EV1A2 = False
    EV1A3 = False
    EV1A4 = False
    EV1B1 = False
    EV1B2 = False
    EV1B3 = False
    EV1B4 = False
    EV2A1 = False
    EV2A2 = False
    EV2A3 = False
    EV2A4 = False
    EV2B1 = False
    EV2B2 = False
    EV2B3 = False
    EV2B4 = False
    EV3A1 = False
    EV3A2 = False
    EV3A3 = False
    EV3A4 = False
    EV3B1 = False
    EV3B2 = False
    EV3B3 = False
    EV3B4 = False
    EV4A1 = False
    EV4A2 = False
    EV4A3 = False
    EV4A4 = False
    EV4B1 = False
    EV4B2 = False
    EV4B3 = False
    EV4B4 = False
    compressor = False
    Vol_Nut = 0
    Vol_H2O = 0
    P_Nut = 0
    P_Tank = 0
    P_H2O = 0
    tempExt = 0
    humExt = 0
    altitude = 0
    pass

# Class to manage ESP32's data
class espObject():
    def __init__(self):
        # Default values
        self.T1R = 0
        self.T1L = 0
        self.T2R = 0
        self.T2L = 0
        self.T3R = 0
        self.T3L = 0
        self.T4R = 0
        self.T4L = 0
        self.H1R = 0
        self.H1L = 0
        self.H2R = 0
        self.H2L = 0
        self.H3R = 0
        self.H3L = 0
        self.H4R = 0
        self.H4L = 0

        # Aux Control values
        self.update = False

    def clean(self):
        self.T1R = 0
        self.T1L = 0
        self.T2R = 0
        self.T2L = 0
        self.T3R = 0
        self.T3L = 0
        self.T4R = 0
        self.T4L = 0
        self.H1R = 0
        self.H1L = 0
        self.H2R = 0
        self.H2L = 0
        self.H3R = 0
        self.H3L = 0
        self.H4R = 0
        self.H4L = 0

    def getData(self):
        struct = {
            'T1R': self.T1R,
            'T1L': self.T1L,
            'T2R': self.T2R,
            'T2L': self.T2L,
            'T3R': self.T3R,
            'T3L': self.T3L,
            'T4R': self.T4R,
            'T4L': self.T4L,
            'H1R': self.H1R,
            'H1L': self.H1L,
            'H2R': self.H2R,
            'H2L': self.H2L,
            'H3R': self.H3R,
            'H3L': self.H3L,
            'H4R': self.H4R,
            'H4L': self.H4L
        }
        return struct

# Class to manage Grower's data
class growerObject():
    def __init__(self):
        # Default values
        self.temp = 0
        self.hum = 0
        self.co2 = 0
        self.x = 0
        self.y = 0

        # Aux Control values
        self.update = False

    def clean(self):
        self.temp = 0
        self.hum = 0
        self.co2 = 0
        self.x = 0
        self.y = 0

    def getData(self):
        struct = {
            'temp': self.temp,
            'hum': self.hum,
            'co2': self.co2,
            'x': self.x,
            'y': self.y,
        }
        return struct

# Global Functions
# Function to save new object
def newEntry(object, properties):
    newObject = State()
    for property in properties:
        setattr(newObject, property, getattr(object, property))
    newObject.save()

# Function to update some property in state
def updateState(object, property, value):
    global update
    if(getattr(object, property) != value):
        update = True
        setattr(object, property, value)

# Get pointer
def getPointer(classes, id):
    ptr = {
        '__type': 'Pointer',
        'className': classes,
        'objectId': id
    }
    return ptr

# Global Variables
second = 0
update = False
updateValve = False
updateTime = ''
growerArray = [growerObject(), growerObject(), growerObject(), growerObject()]
espArray = [espObject(), espObject(), espObject()]

# Complete ESPData
def completeEspData(msg, device):
    spl = msg.split(',')
    if device == 'esp32front': index = 0
    elif device == 'esp32center': index = 1
    elif device == 'esp32back': index = 2
    else: index = -1

    if index != -1:
        for i, substring in enumerate(spl):
            sub2string = substring.split('=')
            if 'T1R' in sub2string[0]: espArray[index].T1R = float(sub2string[1])
            elif 'H1R' in sub2string[0]: espArray[index].H1R = float(sub2string[1])
            elif 'T1L' in sub2string[0]: espArray[index].T1L = float(sub2string[1])
            elif 'H1L' in sub2string[0]: espArray[index].H1L = float(sub2string[1])
            elif 'T2R' in sub2string[0]: espArray[index].T2R = float(sub2string[1])
            elif 'H2R' in sub2string[0]: espArray[index].H2R = float(sub2string[1])
            elif 'T2L' in sub2string[0]: espArray[index].T2L = float(sub2string[1])
            elif 'H2L' in sub2string[0]: espArray[index].H2L = float(sub2string[1])
            elif 'T3R' in sub2string[0]: espArray[index].T3R = float(sub2string[1])
            elif 'H3R' in sub2string[0]: espArray[index].H3R = float(sub2string[1])
            elif 'T3L' in sub2string[0]: espArray[index].T3L = float(sub2string[1])
            elif 'H3L' in sub2string[0]: espArray[index].H3L = float(sub2string[1])
            elif 'T4R' in sub2string[0]:
                espArray[index].update = True
                espArray[index].T4R = float(sub2string[1])
            elif 'H4R' in sub2string[0]: espArray[index].H4R = float(sub2string[1])
            elif 'T4L' in sub2string[0]: espArray[index].T4L = float(sub2string[1])
            elif 'H4L' in sub2string[0]: espArray[index].H4L = float(sub2string[1])
    else: print('DEVICE NOT FOUND')

# Complete ESPData
def completeGrowerData(msg, device):
    try: index = int(re.findall('\d', device)[0]) - 1
    except: index = -1
    if index != -1:
        if all(x in msg for x in ['Temp', 'Hum', 'CO2']):
            data = re.findall('\d+\.\d+', msg)
            growerArray[index].temp = float(data[0])
            growerArray[index].hum = float(data[1])
            growerArray[index].co2 = float(data[2])
            growerArray[index].update = True
    else: print('DEVICE NOT FOUND')

register(cr.APPLICATION_ID, cr.REST_API_KEY, master_key=cr.MASTER_KEY)

# File Variables
file = cr.log_uri
fSize = os.path.getsize(file)
print('Actual size of log file: {} bytes'.format(fSize))

# Query the configuration of the system
conf = Config.Query.filter(city=cr.cityFilter).filter(state=cr.stateFilter).filter(locationNumber=cr.numberFilter)
conf = conf[0]
print('System Configuration ID: {}'.format(conf.objectId))

# Query the last state saved in the State class
st = State.Query.all().order_by('createdAt', descending=True).limit(1)
st = st[0]

# Create a Pointer object to State Class
if(getattr(st, 'system') != getPointer('Config', conf.objectId)):
    setattr(st, 'system', getPointer('Config', conf.objectId))

# Define mqtt Controller for communication
mqttControl = mqttController()

try:
    # Define MQTT communication
    client = mqtt.Client()
    client.on_connect = mqttControl.on_connect  # Specify on_connect callback
    client.on_message = mqttControl.on_message  # Specify on_message callback
    #client.on_publish = mqttControl.on_publish  # Specify on_publish callback
    client.on_disconnect = mqttControl.on_disconnect  # Specify on_disconnect callback
    # Connect to MQTT broker. Paremeters (IP direction, Port, Seconds Alive)
    if(client.connect(cr.system['brokerIP'], 1883, 60)==0): mqttControl.clientConnected = True
    else: print("Cannot connect with MQTT Broker")
except Exception as e: print("Cannot connect with MQTT Broker [{}]".format(e))

while True:
    now = datetime.now()

    # Check for messages in mqtt
    if mqttControl.clientConnected: client.loop(0.1)
    else:
        sleep(0.1)
        # Else try to reconnect every 30s
        if(time()-mqttControl.actualTime>30):
            mqttControl.actualTime = time()
            try:
                # Reconnect client
                client = mqtt.Client()
                client.on_connect = mqttControl.on_connect  # Specify on_connect callback
                client.on_message = mqttControl.on_message  # Specify on_message callback
                #client.on_publish = mqttController.on_publish  # Specify on_publish callback
                client.on_disconnect = mqttControl.on_disconnect  # Specify on_disconnect callback
                # Connect to MQTT broker. Paremeters (IP direction, Port, Seconds Alive)
                if(client.connect(cr.system['brokerIP'], 1883, 60)==0): mqttControl.clientConnected = True
                else: log.logger.error("Cannot connect with MQTT Broker")
            except Exception as e: log.logger.error("Cannot connect with MQTT Broker [{}]".format(e))

    # Check for updates in log
    if(fSize < os.path.getsize(file)):
        update = False
        try:
            with open(file, 'r') as infile:
                infile.seek(fSize, 0)
                for line in infile:
                    # Let ony useful lines
                    if line[-1] == '\n': line = line[:-1]
                    if line != '':
                        if (updateTime != line[0:19]):
                            updateTime = line[0:19]
                            for i in range(3):
                                if espArray[i].update:
                                    espArray[i].update = False
                                    if i==0: st.ESP_Front = espArray[i].getData()
                                    elif i==1: st.ESP_Center = espArray[i].getData()
                                    elif i==2: st.ESP_Back = espArray[i].getData()
                                    if not update: update = True
                            for i in range(4):
                                if growerArray[i].update:
                                    growerArray[i].update = False
                                    if i==0: st.Grower1 = growerArray[i].getData()
                                    elif i==1: st.Grower2 = growerArray[i].getData()
                                    elif i==2: st.Grower3 = growerArray[i].getData()
                                    elif i==3: st.Grower4 = growerArray[i].getData()
                                    if not update: update = True
                            if(update and updateValve):
                                updateValve = False
                                updateState(st, 'RealTime', dateObj)
                                newEntry(st, cr.stateKeys) # Update database
                                print("DB UPDATED")
                        # Here is where I have to decode te lines and parse to database
                        if len(line)>45:
                            dateString = line[0:19]
                            dateObj = datetime.strptime(dateString, '%Y-%m-%d %H:%M:%S')
                            device = line[20:36].strip(' ')
                            level = line[36:45].strip(' ')
                            msg = line[45:]
                            # Get relevant master info
                            if(device.startswith('master')):
                                if('C' in msg and '%RH' in msg and 'm' in msg):
                                        extData = re.findall('\d+\.\d+', msg)
                                        if(len(extData) == 3):
                                            updateState(st, 'tempExt', float(extData[0]))
                                            updateState(st, 'humExt', float(extData[1]))
                                            updateState(st, 'altitude', float(extData[2]))
                            # Get relevant generalControl info
                            elif(device.startswith('generalControl')):
                                if('Turn On' in msg): # If something turn on
                                    # Check if it was an irrigation solenoid
                                    ev = re.findall('[1-4][(A-B)][1-4]', msg)
                                    inFan = re.findall('Input Fan-[1-4]', msg)
                                    outFan = re.findall('Output Fan-[1-4]', msg)
                                    fan = re.findall('Vent Fan-[1-4]', msg)
                                    led = re.findall('[L][(1-4)][S][1-4]', msg)
                                    #hum = re.findall('Hum Valve-[1-4]', msg)
                                    if(len(ev) == 1 ):
                                        updateValve = True
                                        updateState(st, 'EV{}'.format(ev[0]), True)
                                    # Check input fans
                                    elif(len(inFan) == 1 ): updateState(st, 'IN_FAN{}'.format(inFan[0][-1]), True)
                                    # Check output fans
                                    elif(len(outFan) == 1 ): updateState(st, 'OUT_FAN{}'.format(outFan[0][-1]), True)
                                    # Check ventilation fans
                                    elif(len(fan) == 1 ): updateState(st, 'FAN{}'.format(fan[0][-1]), True)
                                    # Check LED's
                                    elif(len(led) == 1 ): updateState(st, '{}'.format(led[0]), True)
                                    # Check humidty valves
                                    #elif(len(hum) == 1 ): updateState(st, 'HUM{}'.format(hum[0][-1]), True)

                                elif('Turn Off' in msg): # If something turn off
                                    # Check if it was an irrigation solenoid
                                    ev = re.findall('[1-4][(A-B)][1-4]', msg)
                                    inFan = re.findall('Input Fan-[1-4]', msg)
                                    outFan = re.findall('Output Fan-[1-4]', msg)
                                    fan = re.findall('Vent Fan-[1-4]', msg)
                                    led = re.findall('[L][(1-4)][S][1-4]', msg)
                                    #hum = re.findall('Hum Valve-[1-4]', msg)
                                    if(len(ev) == 1 ):
                                        updateValve = True
                                        updateState(st, 'EV{}'.format(ev[0]), False)
                                    # Check input fans
                                    elif(len(inFan) == 1 ): updateState(st, 'IN_FAN{}'.format(inFan[0][-1]), False)
                                    # Check output fans
                                    elif(len(outFan) == 1 ): updateState(st, 'OUT_FAN{}'.format(outFan[0][-1]), False)
                                    # Check ventilation fans
                                    elif(len(fan) == 1 ): updateState(st, 'FAN{}'.format(fan[0][-1]), False)
                                    # Check LED's
                                    elif(len(led) == 1 ): updateState(st, '{}'.format(led[0]), False)
                                    # Check humidty valves
                                    #elif(len(hum) == 1 ): updateState(st, 'HUM{}'.format(hum[0][-1]), False)

                                elif('psi' in msg): # Info from pressure sensors
                                    try:
                                        pressure = re.findall('\d+\.\d+', msg)[0]
                                        if('Kegs_h2o' in msg): updateState(st, 'P_H2O', float(pressure))
                                        elif('Kegs_nut' in msg): updateState(st, 'P_Nut', float(pressure))
                                        # If compressor / airTank desire generalControl needs to print
                                    except:
                                        print('REGEX failed getting pressure')
                                elif('liters' in msg): # Info from pressure sensors
                                    liters = re.findall('\d+\.\d+', msg)[0]
                                    #print('liters', liters)
                            #elif(device.startswith('motorsGrower')): print('motorsGrower')
                            #elif(device.startswith('solutionMaker')): print('solutionMaker')
                            elif(device.startswith('esp')):
                                espData = re.findall('[TH][1-4][RL]', msg)
                                if(len(espData)==4): completeEspData(msg, device)
                            elif(device.startswith('grower')): completeGrowerData(msg, device)

                        # To Debug
                        #print(line)
            fSize = os.path.getsize(file)
            for i in range(3):
                if espArray[i].update:
                    espArray[i].update = False
                    if i==0: st.ESP_Front = espArray[i].getData()
                    elif i==1: st.ESP_Center = espArray[i].getData()
                    elif i==2: st.ESP_Back = espArray[i].getData()
                    if not update: update = True
            for i in range(4):
                if growerArray[i].update:
                    growerArray[i].update = False
                    if i==0: st.Grower1 = growerArray[i].getData()
                    elif i==1: st.Grower2 = growerArray[i].getData()
                    elif i==2: st.Grower3 = growerArray[i].getData()
                    elif i==3: st.Grower4 = growerArray[i].getData()
                    if not update: update = True
            if(update):
                if updateValve: updateValve = False
                updateState(st, 'RealTime', dateObj)
                newEntry(st, cr.stateKeys) # Update database
                print("DB UPDATED")
        except Exception as e: print(e)
    elif(fSize > os.path.getsize(file)): fSize = os.path.getsize(file)
    sleep(0.1) # Avoiding HIGH CPU usage
