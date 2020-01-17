import os
import json
from bson import json_util
from time import sleep
from datetime import datetime
# Define path to parse app
os.environ["PARSE_API_ROOT"] = "http://localhost:1337/parse"

from parse_rest.datatypes import Function, Object, GeoPoint
from parse_rest.connection import register
from parse_rest.query import QueryResourceDoesNotExist
from parse_rest.connection import ParseBatcher
from parse_rest.core import ResourceRequestBadRequest, ParseError

stateKeys = ["P_Nut","L1S1","L1S2","L1S3","L1S4","L2S1","L2S2","L2S3","L2S4","L3S1","L3S2","L3S3","L3S4","L4S1","L4S2","L4S3","L4S4","IN_FAN1",
"IN_FAN2","IN_FAN3","IN_FAN4","OUT_FAN1","OUT_FAN2","OUT_FAN3","OUT_FAN4","FAN1","FAN2","FAN3","FAN4","P_H2O","P_Tank","Vol_Nut",
"Vol_H2O","Vol1","Vol2","Vol3","Vol4","Vol5","Vol_SMaker","Vol_Recirculation","PumpIn","PumpOut","PumpSMaker","compressor","Fill_H2O",
"EV1A1","EV1A2","EV1A3","EV1A4","EV1B1","EV1B2","EV1B3","EV1B4","EV2A1","EV2A2","EV2A3","EV2A4","EV2B1","EV2B2","EV2B3","EV2B4",
"EV3A1","EV3A2","EV3A3","EV3A4","EV3B1","EV3B2","EV3B3","EV3B4","EV4A1","EV4A2","EV4A3","EV4A4","EV4B1","EV4B2","EV4B3","EV4B4"]

screenKeys = ["mainScreen","floor1","floor2","floor3","floor4","compressor","recirculation"]

configKeys = ["max_pressure","min_pressure","critical_pressure","floor1","floor2","floor3","floor4"]

# Function to save new object
def newEntry(object, newObject, properties):
    for property in properties:
        setattr(newObject, property, getattr(object, property))
    newObject.save()

# App Variables
APPLICATION_ID = '123456'
REST_API_KEY = '...'
MASTER_KEY = '...'
register(APPLICATION_ID, REST_API_KEY, master_key=MASTER_KEY)

# File Variables
file = r"\\192.168.1.100\log\growMaster.log"
fSize = os.path.getsize(file)
print(fSize)

# Create State Class to Query and write in it
class State(Object):
    P_Nut = False
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
    IN_FAN1 = False
    IN_FAN2 = False
    IN_FAN3 = False
    IN_FAN4 = False
    OUT_FAN1 = False
    OUT_FAN2 = False
    OUT_FAN3 = False
    OUT_FAN4 = False
    FAN1 = False
    FAN2 = False
    FAN3 = False
    FAN4 = False
    P_H2O = 0
    P_Nut = 0
    P_Tank = 0
    Vol_Nut = 0
    Vol_H2O = 0
    Vol1 = 0
    Vol2 = 0
    Vol3 = 0
    Vol4 = 0
    Vol5 = 0
    Vol_SMaker = 0
    Vol_Recirculation = 0
    PumpIn = 0
    PumpOut = 0
    PumpSMaker = 0
    Fill_H2O = 0
    compressor = False
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
    pass

# Query the last state saved in the State class
st = State.Query.all().order_by("createdAt", descending=True).limit(1)

if(len(st)==1):
    st = st[0]
    print(st.objectId)
    #st.P_Nut = 100
    newSt = State()
    newEntry(st, newSt, stateKeys)
sleep(1)
"""
# DEBUG
# EXAMPLE FOR SAVING NEW OBJECT IN GameScore Class
#class GameScore(Object):
#    pass

#gameScore = GameScore(score=1337, player_name='John Doe', cheat_mode=False)
#gameScore.cheat_mode = True
#gameScore.level = 20
#gameScore.save()

while True:
    if(fSize < os.path.getsize(file)):
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
                    else: print("Line does not have min size")

                    # To Debug
                    print(line)#print(bytes(line, 'utf-8'))
        fSize = os.path.getsize(file)
    elif(fSize > os.path.getsize(file)): fSize = os.path.getsize(file)
    sleep(1)
    """
