#!/usr/bin/env python3
import os
import json
from time import sleep, time
import credentials as cr
from bson import json_util
from datetime import datetime, timedelta

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

# Create State Class to Query
class State(Object):
    pass

# Create Water Class to Query
class Water(Object):
    pass

class Plant(Object):
    pass

# Difference to UTC from local Time
deltaUTC = datetime.utcfromtimestamp(time())-datetime.fromtimestamp(time())

def stateQuery(initialHour, finalHour):
    runQuery = True
    results = []
    resultNumber = 0
    limitNumber = 1000
    while runQuery:
        i = 0
        if(initialHour<finalHour): st = State.Query.filter(system=ptrSystem).filter(createdAt__gte=initialHour-deltaUTC).filter(createdAt__lte=finalHour-deltaUTC).skip(resultNumber).limit(limitNumber)
        else: st = State.Query.filter(system=ptrSystem).filter(createdAt__gte=finalHour-deltaUTC).skip(resultNumber).limit(limitNumber)
        for status in st:
            results.append(status)
            i += 1
        resultNumber += i
        if (i<limitNumber): runQuery = False

    print('Vivencias registradas en la base de datos entre el {0} y el {1}: {2} resultados'.format(initialHour, finalHour, len(results)))

    return results

def waterQuery(initialHour, finalHour):
    runQuery = True
    waterResults = []
    waterResultNumber = 0
    limitNumber = 100
    while runQuery:
        i = 0
        if(initialHour<finalHour): wtr = Water.Query.filter(system=ptrSystem).filter(createdAt__gte=initialHour-deltaUTC).filter(createdAt__lte=finalHour-deltaUTC).skip(waterResultNumber).limit(limitNumber)
        else: wtr = Water.Query.filter(system=ptrSystem).filter(createdAt__gte=finalHour-deltaUTC).skip(waterResultNumber).limit(limitNumber)
        for info in wtr:
            waterResults.append(info)
            i += 1
        waterResultNumber += i
        if (i<limitNumber): runQuery = False

    return waterResults

def plantQuery(floor, side, printResult = False):
    # Query to know the plants that are inside the system
    line = 1 # PARAM
    #plant = Plant.Query.filter(system=ptrSystem).filter(piso=floor).filter(lado=side).filter(linea=line).order_by('createdAt', descending=True).limit(165)
    plant = Plant.Query.filter(piso=floor).filter(lado=side).filter(linea=line).order_by('createdAt', descending=True).limit(165)
    plantArray = []
    pos1 = 37
    pos2 = 92
    pos3 = 129

    for i,pl in enumerate(plant):
        i += 1
        newPlant = {}
        newPlant['index'] = i
        newPlant['fechaSiembra'] = (pl.createdAt-deltaUTC)
        newPlant['diasDentro'] = (datetime.now()-(pl.createdAt-deltaUTC)).days
        plantArray.append(newPlant)

    # Query to know the State of the Water between 2 dates
    iHour = datetime.now()
    fHour = datetime.now() - timedelta(days=plantArray[-1]['diasDentro']+1)
    wtrResult = waterQuery(iHour, fHour)
    print('Riegos registrados en la base de datos entre el {0} y el {1}: {2} resultados'.format(iHour, fHour, len(wtrResult)))

    for i,pl in enumerate(plantArray):
        if pl['index'] < pos1:
            pl['diasEtapa1'] = pl['diasDentro']
            pl['diasEtapa2'] = 0
            pl['diasEtapa3'] = 0
            pl['diasEtapa4'] = 0
        elif pl['index'] < pos2:
            pl['diasEtapa1'] = pl['diasDentro'] - plantArray[i-pos1+1]['diasDentro']
            pl['diasEtapa2'] = (datetime.now()-plantArray[i-pos1+1]['fechaSiembra']).days
            pl['diasEtapa3'] = 0
            pl['diasEtapa4'] = 0
        elif pl['index'] < pos3:
            pl['diasEtapa1'] = pl['diasDentro'] - plantArray[i-pos1+1]['diasDentro']
            pl['diasEtapa2'] = plantArray[i-pos1+1]['diasDentro'] - plantArray[i-pos2+1]['diasDentro']
            pl['diasEtapa3'] = (datetime.now()-plantArray[i-pos2+1]['fechaSiembra']).days
            pl['diasEtapa4'] = 0
        else:
            pl['diasEtapa1'] = pl['diasDentro'] - plantArray[i-pos1+1]['diasDentro']
            pl['diasEtapa2'] = plantArray[i-pos1+1]['diasDentro'] - plantArray[i-pos2+1]['diasDentro']
            pl['diasEtapa3'] = plantArray[i-pos2+1]['diasDentro'] - plantArray[i-pos3+1]['diasDentro']
            pl['diasEtapa4'] = (datetime.now()-plantArray[i-pos3-1]['fechaSiembra']).days

        waterConsumption = 0
        hoy = datetime.now()
        fechaEtapa3 = hoy - timedelta(days=pl['diasEtapa4'])
        fechaEtapa2 = fechaEtapa3 - timedelta(days=pl['diasEtapa3'])
        fechaEtapa1 = fechaEtapa2 - timedelta(days=pl['diasEtapa2'])
        fechaInicio = fechaEtapa1 - timedelta(days=pl['diasEtapa1'])
        #print(hoy, fechaEtapa3, fechaEtapa2, fechaEtapa1, fechaInicio)

        for water in wtrResult:
            compareTime = water.createdAt-deltaUTC
            if(compareTime>=fechaInicio and compareTime<fechaEtapa1):
                zone = 'EV{0}{1}1'.format(floor,side)
                waterConsumption += getattr(water, zone)
            elif(compareTime>=fechaEtapa1 and compareTime<fechaEtapa2):
                zone = 'EV{0}{1}2'.format(floor,side)
                waterConsumption += getattr(water, zone)
            elif(compareTime>=fechaEtapa2 and compareTime<fechaEtapa3):
                zone = 'EV{0}{1}3'.format(floor,side)
                waterConsumption += getattr(water, zone)
            elif(compareTime>=fechaEtapa3 and compareTime<hoy):
                zone = 'EV{0}{1}4'.format(floor,side)
                waterConsumption += getattr(water, zone)

        pl['consumoAgua'] = waterConsumption

        # DEBUG
        if printResult:
            if(pl['index']<10): print('Index:{0}\t\t{1}\t{2}\t{3}\t{4}\t{5}\t{6}\t{7}'.format(
            pl['index'], pl['diasDentro'], pl['diasEtapa1'], pl['diasEtapa2'], pl['diasEtapa3'], pl['diasEtapa4'], pl['fechaSiembra'],
            pl['consumoAgua']))
            else: print('Index:{0}\t{1}\t{2}\t{3}\t{4}\t{5}\t{6}\t{7}'.format(
            pl['index'], pl['diasDentro'], pl['diasEtapa1'], pl['diasEtapa2'], pl['diasEtapa3'], pl['diasEtapa4'], pl['fechaSiembra'],
            pl['consumoAgua']))

    return plantArray

register(cr.APPLICATION_ID, cr.REST_API_KEY, master_key=cr.MASTER_KEY)

# Query the configuration of the system
conf = Config.Query.filter(city=cr.cityFilter).filter(state=cr.stateFilter).filter(locationNumber=cr.numberFilter)
conf = conf[0]
ptrSystem = {
    '__type': 'Pointer',
    'className': 'Config',
    'objectId': conf.objectId
}

print('System Configuration ID: {}'.format(conf.objectId))

# Query to know the State of the System between 2 dates
"""
# DEBUG
iHour = datetime(2020,4,3) # PARAM
fHour = datetime(2020,4,6) # PARAM
stateResult = stateQuery(iHour, fHour)

plant1A = plantQuery(1, 'A', True)
plant1B = plantQuery(1, 'B')
plant2A = plantQuery(2, 'A')
plant2B = plantQuery(2, 'B')
plant3A = plantQuery(3, 'A')
plant3B = plantQuery(3, 'B')
plant4A = plantQuery(4, 'A')
plant4B = plantQuery(4, 'B')
"""
