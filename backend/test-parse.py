#!/usr/bin/env python3

import os
from datetime import datetime

# Define path to parse app
os.environ["PARSE_API_ROOT"] = "http://localhost:1337/parse"

from parse_rest.datatypes import Function, Object, GeoPoint
from parse_rest.connection import register
from parse_rest.query import QueryResourceDoesNotExist
from parse_rest.connection import ParseBatcher
from parse_rest.core import ResourceRequestBadRequest, ParseError


stateKeys = ['system','RealTime','Vol_Recirculation','Vol1','Vol2','Vol3','Vol4','Vol5','Vol_SMaker',
'FAN1','FAN2','FAN3','FAN4','IN_FAN1','IN_FAN2','IN_FAN3','IN_FAN4','OUT_FAN1','OUT_FAN2','OUT_FAN3','OUT_FAN4',
'L1S1','L1S2','L1S3','L1S4','L2S1','L2S2','L2S3','L2S4','L3S1','L3S2','L3S3','L3S4','L4S1','L4S2','L4S3','L4S4',
'PumpIn','PumpOut','PumpSMaker','Fill_H2O','ESP_Front','ESP_Center','ESP_Back','Grower1','Grower2','Grower3','Grower4',
'EV1A1','EV1A2','EV1A3','EV1A4','EV1B1','EV1B2','EV1B3','EV1B4','EV2A1','EV2A2','EV2A3','EV2A4','EV2B1','EV2B2','EV2B3','EV2B4',
'EV3A1','EV3A2','EV3A3','EV3A4','EV3B1','EV3B2','EV3B3','EV3B4','EV4A1','EV4A2','EV4A3','EV4A4','EV4B1','EV4B2','EV4B3','EV4B4',
'compressor','Vol_Nut','Vol_H2O','P_Nut','P_Tank','P_H2O','tempExt', 'humExt']

def getPointer(classes, id):
    ptr = {
        '__type': 'Pointer',
        'className': classes,
        'objectId': id
    }
    return ptr

#Create Config State to Query
class Config(Object):
    pass

# Create State Class to Query and write in it
class State(Object):
    system = {}
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

    def getData(self):
        struct = {
            "T1R": self.T1R,
            "T1L": self.T1L,
            "T2R": self.T2R,
            "T2L": self.T2L,
            "T3R": self.T3R,
            "T3L": self.T3L,
            "T4R": self.T4R,
            "T4L": self.T4L,
            "H1R": self.H1R,
            "H1L": self.H1L,
            "H2R": self.H2R,
            "H2L": self.H2L,
            "H3R": self.H3R,
            "H3L": self.H3L,
            "H4R": self.H4R,
            "H4L": self.H4L
        }

        return struct

def newEntry(object, properties):
    newObject = State()
    for property in properties:
        setattr(newObject, property, getattr(object, property))
    newObject.save()

# App Variables
APPLICATION_ID = '123456'
REST_API_KEY = '...'
MASTER_KEY = '...'
register(APPLICATION_ID, REST_API_KEY, master_key=MASTER_KEY)

conf = Config.Query.filter(city='Valle de Bravo').filter(state='Edo. de Mexico').filter(locationNumber=1)
conf = conf[0]
print(conf.objectId)

esp = espObject()
esp.T1R = 20
print(esp.getData())
print( getattr(esp, "T1R"))
"""
st = State.Query.all().order_by('createdAt', descending=True).limit(1)
st = st[0]
print(st.objectId)
if(getattr(st, 'system') != getPointer('Config', conf.objectId)):
    setattr(st, 'system', getPointer('Config', conf.objectId))

newEntry(st, stateKeys)
"""
