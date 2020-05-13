"""
Este archivo sirve como ejemplo para utilizar las funciones de consulta a la base de datos.

Actualmente se tienen las funciones:
 * stateQuery(horaInicio, horaFin)
 * plantQuery(piso, lado)

Ambas consultas regresan una lista con los resultados obtenidos de la base de datos

Cada resultado en la lista es un objeto o diccionario, y para acceder a sus valores
es necesario conocer la estructura de dicho objeto. A continuación se enlistas las
propiedades del objecto State (Vivencia) junto con una breve descripción de su significado:

 - system, # ID del sistema dentro de la base de datos siempre debe ser "Rm7x4K4Y9l"
 - RealTime, # Hora en la que se registró el evento en el log
 # Volumenes tanques de recirculado Vol5 corresponde al tanque de agua
 - Vol_Recirculation, Vol1, Vol2, Vol3, Vol4, Vol5, Vol_SMaker,
 # Bool ventiladores, True=ON False=OFF
 - FAN1, FAN2, FAN3, FAN4,
 - IN_FAN1, IN_FAN2, IN_FAN3, IN_FAN4,
 - OUT_FAN1, OUT_FAN2, OUT_FAN3, OUT_FAN4,
 # Bool Regiones LED, True=ON False=OFF
 - L1S1, L1S2, L1S3, L1S4,
 - L2S1, L2S2, L2S3, L2S4,
 - L3S1, L3S2, L3S3, L3S4,
 - L4S1, L4S2, L4S3, L4S4,
 # Int Bombas, El número entero indica si la bomba estaba encendida y hacia donde
 # mandaba la solucion
 - PumpIn, PumpOut, PumpSMaker,
 - Fill_H2O, # Bool electroválvula rellenar agua de la línea municipal (Todavía no se registra su valor correctamente)
 # Objeto con la información de las temperaturas y humedades de cada ESP
 - ESP_Front, ESP_Center, ESP_Back,
 # Objeto con la información de la temperaturas, humedades y CO2 de cada Grower
 - Grower1, Grower2, Grower3, Grower4,
 # Bool Electroválvulas de riego, True=ON False=OFF
 - EV1A1, EV1A2, EV1A3, EV1A4, EV1B1, EV1B2, EV1B3, EV1B4,
 - EV2A1, EV2A2, EV2A3, EV2A4, EV2B1, EV2B2, EV2B3, EV2B4,
 - EV3A1, EV3A2, EV3A3, EV3A4, EV3B1, EV3B2, EV3B3, EV3B4,
 - EV4A1, EV4A2, EV4A3, EV4A4, EV4B1, EV4B2, EV4B3, EV4B4,
 - compressor, # Bool Compresor, True=ON False=OFF
 - Vol_Nut, Vol_H2O, # Volumenes de los tanques de riego
 - P_Nut, P_Tank, P_H2O, # Presiones de los tanques de riego y del tan que de reserva de aire
 - tempExt, humExt, altitude # temperatura, humedad y altura externa registrada por el sensor BMP180/280/680
 # (Actualmente se esta usando el sensor BMP180 que no incluye lectura de humedad)

La estructura de datos del ESP es la siguiente:
 * T1R, T1L, H1R, H1L,
 * T2R, T2L, H2R, H2L,
 * T3R, T3L, H3R, H3L,
 * T4R, T4L, H4R, H4L

La estructura de datos del Grower es la siguiente:
 * temp, hum, co2, x, y (Las posiciones X-Y todavía no se actualizan)

Por otro lado la consulta a las plantas devuelve una lista con los diccionarios de las plantas
dentro del sistema.

Para acceder a las propiedades del diccionario se requieren las siguientes palabras claves:
 - index
 - fechaSiembra
 - diasDentro
 - diasEtapa1
 - diasEtapa2
 - diasEtapa3
 - diasEtapa4
 - consumoAgua
"""

import reportQuery as rQ
from datetime import datetime

stateResult = rQ.stateQuery(datetime(2020,4,6), datetime(2020,4,9,23,59,0))
aux = False
for st in stateResult:
    if st.L1S1!=aux:
        print(st.RealTime)
        aux=st.L1S1

"""
plant1A = rQ.plantQuery(1, 'A')
for pl in plant1A:
    if(pl['index']<10): print('Index:{0}\t\t{1}\t{2}\t{3}\t{4}\t{5}\t{6}\t{7}'.format(
    pl['index'], pl['diasDentro'], pl['diasEtapa1'], pl['diasEtapa2'], pl['diasEtapa3'], pl['diasEtapa4'], pl['fechaSiembra'],
    pl['consumoAgua']))
    else: print('Index:{0}\t{1}\t{2}\t{3}\t{4}\t{5}\t{6}\t{7}'.format(
    pl['index'], pl['diasDentro'], pl['diasEtapa1'], pl['diasEtapa2'], pl['diasEtapa3'], pl['diasEtapa4'], pl['fechaSiembra'],
    pl['consumoAgua']))
"""
