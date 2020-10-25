#!/usr/bin/env python3
import os
import re
import json
from time import sleep, time
import credentials as cr
from bson import json_util
from datetime import datetime
import paho.mqtt.client as mqtt
from mqttCallback import mqttController
from logger import logger

"""
# PENDIENTE
1- Robustecer actualización de eventos para que baja latencia de lectura
en el log no afecte al registro de todos los eventos definidos como importantes
"""
# Define path to parse app
os.environ['PARSE_API_ROOT'] = cr.db_uri

from parse_rest.datatypes import Function, Object, GeoPoint
from parse_rest.connection import register
from parse_rest.query import QueryResourceDoesNotExist
from parse_rest.connection import ParseBatcher
from parse_rest.core import ResourceRequestBadRequest, ParseError

# Create Config State to Query
class config(Object):
    pass

# Create State Class to Query and write in it
class state(Object):
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

# Create Water Class to write in it
class water(Object):
    system = ''
    RealTime = datetime.now()
    waste = 0
    EV1A1 = 0
    EV1A2 = 0
    EV1A3 = 0
    EV1A4 = 0
    EV1B1 = 0
    EV1B2 = 0
    EV1B3 = 0
    EV1B4 = 0
    EV2A1 = 0
    EV2A2 = 0
    EV2A3 = 0
    EV2A4 = 0
    EV2B1 = 0
    EV2B2 = 0
    EV2B3 = 0
    EV2B4 = 0
    EV3A1 = 0
    EV3A2 = 0
    EV3A3 = 0
    EV3A4 = 0
    EV3B1 = 0
    EV3B2 = 0
    EV3B3 = 0
    EV3B4 = 0
    EV4A1 = 0
    EV4A2 = 0
    EV4A3 = 0
    EV4A4 = 0
    EV4B1 = 0
    EV4B2 = 0
    EV4B3 = 0
    EV4B4 = 0
    pass

# Global Functions
# Function to save new object
def newEntry(object, properties):
    newObject = state()
    for property in properties:
        setattr(newObject, property, getattr(object, property))
    newObject.save()

# Function to update some property in state
def updateState(object, property, value):
    global update
    if(getattr(object, property) != value):
        update = True
        setattr(object, property, value)

# Function to save new object in Water
def newWaterEntry(object, properties):
    newObject = water()
    for property in properties:
        setattr(newObject, property, getattr(object, property))
    newObject.save()

# Function to update some property in state
def updateWaterState(object, property, value):
    if(getattr(object, property) != value):
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
# Charge logger parameters
log = logger()

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
    else: log.logger.error('DEVICE NOT FOUND')

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
    else: log.logger.error('DEVICE NOT FOUND')

register(cr.APPLICATION_ID, cr.REST_API_KEY, master_key=cr.MASTER_KEY)

# File Variables
file = cr.log_uri
fSize = os.path.getsize(file)
log.logger.info('Actual size of log file: {} bytes'.format(fSize))

# Query the configuration of the system
conf = config.Query.filter(city=cr.cityFilter).filter(state=cr.stateFilter).filter(locationNumber=cr.numberFilter)
conf = conf[0]
log.logger.info('System Configuration ID: {}'.format(conf.objectId))

# Query the last state saved in the State class
st = state.Query.all().order_by('createdAt', descending=True).limit(1)
st = st[0]

# Create a Pointer object to State Class
if(getattr(st, 'system') != getPointer('config', conf.objectId)):
    setattr(st, 'system', getPointer('config', conf.objectId))

# Create Water object to report consumption
wtr = water()
# Create a Pointer object to State Class
if(getattr(wtr, 'system') != getPointer('config', conf.objectId)):
    setattr(wtr, 'system', getPointer('config', conf.objectId))

# Define mqtt Controller for communication
mqttControl = mqttController(log.logger)

try:
    # Define MQTT communication
    client = mqtt.Client()
    client.on_connect = mqttControl.on_connect  # Specify on_connect callback
    client.on_message = mqttControl.on_message  # Specify on_message callback
    #client.on_publish = mqttControl.on_publish  # Specify on_publish callback
    client.on_disconnect = mqttControl.on_disconnect  # Specify on_disconnect callback
    # Connect to MQTT broker. Paremeters (IP direction, Port, Seconds Alive)
    if(client.connect(cr.system['brokerIP'], 1883, 60)==0): mqttControl.clientConnected = True
    else: log.logger.warning("Cannot connect with MQTT Broker")
except Exception as e: log.logger.warning("Cannot connect with MQTT Broker [{}]".format(e))

try:
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
                    else: log.logger.warning("Cannot connect with MQTT Broker")
                except Exception as e: log.logger.warning("Cannot connect with MQTT Broker [{}]".format(e))

        try:
            # Check for updates in log
            if(fSize < os.path.getsize(file)):
                update = False
                #try:
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
                                    #log.logger.info("DB UPDATED")
                            # Here is where I have to decode te lines and parse to database
                            if len(line)>45:
                                dateString = line[0:19]
                                device = line[20:36].strip(' ')
                                level = line[36:45].strip(' ')
                                msg = line[45:]
                                try: dateObj = datetime.strptime(dateString, '%Y-%m-%d %H:%M:%S')
                                except Exception as e:
                                    dateObj = datetime.now()
                                    log.logger.error('dateObj conversion failed. Using datetime.now()')
                                    log.logger.error('dateString = {}'.format(dateString))
                                    log.logger.error('device = {}'.format(device))
                                    log.logger.error('level = {}'.format(level))
                                    log.logger.error('msg = {}'.format(msg))
                                    log.logger.error('{}'.format(e))
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
                                            if('Kegs_h20' in msg): updateState(st, 'P_H2O', float(pressure))
                                            elif('Kegs_nut' in msg): updateState(st, 'P_Nut', float(pressure))
                                            # If compressor / airTank desire generalControl needs to log
                                        except:
                                            log.logger.error('REGEX failed getting pressure')
                                    elif('liters' in msg): # Info from pressure sensors
                                        try:
                                            liters = re.findall('\d+\.\d+', msg)[0]
                                            if('Level' in msg):
                                                if ('Recirculation Tank' in msg): updateState(st, 'Vol_Recirculation', float(liters))
                                                elif('Solution1' in msg): updateState(st, 'Vol1', float(liters))
                                                elif('Solution2' in msg): updateState(st, 'Vol2', float(liters))
                                                elif('Solution3' in msg): updateState(st, 'Vol3', float(liters))
                                                elif('Solution4' in msg): updateState(st, 'Vol4', float(liters))
                                                elif('Water' in msg): updateState(st, 'Vol5', float(liters))
                                                elif('SMaker' in msg): updateState(st, 'Vol_SMaker', float(liters))
                                            elif('Water Consumption' in msg):
                                                ev = re.findall('[1-4][(A-B)][1-4]', msg)
                                                if(len(ev) == 1 ): updateWaterState(wtr, 'EV{}'.format(ev[0]), float(liters))
                                            elif('Wasted Water Volume' in msg): updateWaterState(wtr, 'waste', float(liters))
                                        except:
                                            log.logger.error('REGEX failed getting liters')
                                    elif('Restarting all water parameters saved' in msg):
                                        updateWaterState(wtr, 'RealTime', dateObj)
                                        newWaterEntry(wtr, cr.waterKeys) # Update database
                                    elif('from solution' in msg):
                                        sol = re.findall("from solution[1-4]", msg)
                                        if(len(sol)==1):
                                            if('to nutrition kegs' in msg): updateState(st, 'PumpOut', int(sol[0][-1]))
                                            elif('to solution maker' in msg): updateState(st, 'PumpOut', int(sol[0][-1])+10)
                                        elif('from solution 5' in msg): updateState(st, 'PumpOut', 5)
                                    elif('Move Out finished' in msg): updateState(st, 'PumpOut', 250)
                                    elif('Emptying solution Maker' in msg): updateState(st, 'PumpSMaker', 1)
                                    elif('Solution Maker emptied' in msg): updateState(st, 'PumpSMaker', 0)
                                    elif('updateSystemState' in msg):
                                        systemParam = msg.split(',')
                                        if(len(systemParam) >= 11):
                                            updateState(st, 'Vol_Nut', float(systemParam[2]))
                                            updateState(st, 'Vol_H2O', float(systemParam[3]))
                                            updateState(st, 'PumpIn', int(systemParam[6]))
                                            if( (systemParam[7]=='1' or systemParam[7]=='10' or systemParam[7]=='40' or systemParam[7]=='41' or
                                            systemParam[7]=='42' or systemParam[7]=='43' or systemParam[7]=='44' or systemParam[7]=='45' or
                                            systemParam[7]=='51' or systemParam[7]=='52' or systemParam[7]=='55' or systemParam[7]=='60' or
                                            systemParam[7]=='251' or systemParam[8]=='10') and  not st.compressor):
                                                updateState(st, 'compressor', True)
                                            elif (st.compressor): updateState(st, 'compressor', False)
                                #elif(device.startswith('motorsGrower')): log.logger.info('motorsGrower')
                                #elif(device.startswith('solutionMaker')): log.logger.info('solutionMaker')
                                elif(device.startswith('esp')):
                                    espData = re.findall('[TH][1-4][RL]', msg)
                                    if(len(espData)==4): completeEspData(msg, device)
                                elif(device.startswith('grower')): completeGrowerData(msg, device)

                            # To Debug
                            #log.logger.info(line)
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
                    #log.logger.info("DB UPDATED")
                #except Exception as e: log.logger.error(e)
            elif(fSize > os.path.getsize(file)): fSize = os.path.getsize(file)
            sleep(0.1) # Avoiding HIGH CPU usage
        except Exception as e:
            log.logger.error('Ignoring error: {}'.format(e))
            sleep(1) # Avoiding HIGH CPU usage

except:
    log.logger.critical("Exception Raised", exc_info=True)
