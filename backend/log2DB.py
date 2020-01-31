import os
import re
import json
from bson import json_util
from time import sleep
from datetime import datetime
# Define path to parse app
os.environ['PARSE_API_ROOT'] = 'http://localhost:1337/parse'

from parse_rest.datatypes import Function, Object, GeoPoint
from parse_rest.connection import register
from parse_rest.query import QueryResourceDoesNotExist
from parse_rest.connection import ParseBatcher
from parse_rest.core import ResourceRequestBadRequest, ParseError

# Data Structures
configKeys = ['systemId','city','state','hardwareVersion','softwareVersion','ledConfig',
'max_pressure','min_pressure','critical_pressure','floor1','floor2','floor3','floor4']

screenKeys = ['system','mainScreen','compressor','recirculation','floor1','floor2','floor3','floor4']

stateKeys = ['system','RealTime','Vol_Recirculation','Vol1','Vol2','Vol3','Vol4','Vol5','Vol_SMaker',
'FAN1','FAN2','FAN3','FAN4','IN_FAN1','IN_FAN2','IN_FAN3','IN_FAN4','OUT_FAN1','OUT_FAN2','OUT_FAN3','OUT_FAN4',
'L1S1','L1S2','L1S3','L1S4','L2S1','L2S2','L2S3','L2S4','L3S1','L3S2','L3S3','L3S4','L4S1','L4S2','L4S3','L4S4',
'PumpIn','PumpOut','PumpSMaker','Fill_H2O','ESP_Front','ESP_Center','ESP_Back','Grower1','Grower2','Grower3','Grower4',
'EV1A1','EV1A2','EV1A3','EV1A4','EV1B1','EV1B2','EV1B3','EV1B4','EV2A1','EV2A2','EV2A3','EV2A4','EV2B1','EV2B2','EV2B3','EV2B4',
'EV3A1','EV3A2','EV3A3','EV3A4','EV3B1','EV3B2','EV3B3','EV3B4','EV4A1','EV4A2','EV4A3','EV4A4','EV4B1','EV4B2','EV4B3','EV4B4',
'compressor','Vol_Nut','Vol_H2O','P_Nut','P_Tank','P_H2O','tempExt', 'humExt']

#Create Config State to Query
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
    pass

# Class to manage ESP32's data
class espObject():
    pass

# Class to manage Grower's data
class growerObject():
    pass

# Global Variables
second = 0
update = False

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

# App Variables
APPLICATION_ID = '123456'
REST_API_KEY = '...'
MASTER_KEY = '...'
register(APPLICATION_ID, REST_API_KEY, master_key=MASTER_KEY)

# File Variables
file = r'\\192.168.1.100\log\growMaster.log'
fSize = os.path.getsize(file)
print(fSize)

# Query the last state saved in the State class
st = State.Query.all().order_by('createdAt', descending=True).limit(1)
st = st[0]

"""
# DEBUG
# Example to write in DataBase
if(len(st)==1):
    st = st[0]
    print(st.objectId)
    updateState(st, 'P_Nut', 150)
    newEntry(st, stateKeys)
print('CUT')
sleep(10)

# Example to use Parse Object variable as dict in Python
# Testing class
class Test(Object):
    pass

test = Test.Query.all().order_by('createdAt', descending=True).limit(1)
test = test [0]
print(test.testObject['name'])

# EXAMPLE FOR SAVING NEW OBJECT IN GameScore Class
#class GameScore(Object):
#    pass

#gameScore = GameScore(score=1337, player_name='John Doe', cheat_mode=False)
#gameScore.cheat_mode = True
#gameScore.level = 20
#gameScore.save()
"""

while True:
    now = datetime.now()
    if(second!=now.second and now.second%2==0):
        second = now.second
        if(fSize < os.path.getsize(file)):
            update = False
            with open(file, 'r') as infile:
                infile.seek(fSize, 0)
                for line in infile:
                    # Let ony useful lines
                    if line[-1] == '\n': line = line[:-1]
                    if line != '':
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
                                    if(len(ev) == 1 ): updateState(st, 'EV{}'.format(ev[0]), True)
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
                                    if(len(ev) == 1 ): updateState(st, 'EV{}'.format(ev[0]), False)
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
                                    except:
                                        print('REGEX failed getting pressure')
                                elif('liters' in msg): # Info from pressure sensors
                                    liters = re.findall('\d+\.\d+', msg)[0]
                                    #print('liters', liters)
                            #elif(device.startswith('motorsGrower')): print('motorsGrower')
                            #elif(device.startswith('solutionMaker')): print('solutionMaker')
                            """
                            elif(device.startswith('esp')):
                                espData = re.findall('[TH][1-4][RL]', msg)
                                if(len(espData==4)):
                                    spl = string.split(',')
                                    for i, substring in enumerate(splitStr):
                                        if(i==0):
                                if('front' in device):
                                elif('center' in device):
                                elif('back' in device)
                            #elif(device.startswith('grower')): print('grower')
                           """
                        # To Debug
                        print(line) #print(bytes(line, 'utf-8'))
            fSize = os.path.getsize(file)
            if(update):
                updateState(st, 'RealTime', dateObj)
                newEntry(st, stateKeys) # Update database
        elif(fSize > os.path.getsize(file)): fSize = os.path.getsize(file)
    sleep(0.1) # Avoiding HIGH CPU usage
