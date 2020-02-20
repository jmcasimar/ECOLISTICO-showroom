# Database url
db_uri = 'http://localhost:1337/parse'

# Log url
log_uri = '//192.168.1.100/log/growMaster.log'

# App Variables
APPLICATION_ID = '123456'
REST_API_KEY = '...'
MASTER_KEY = '...'

# System Filters
cityFilter = 'Valle de Bravo'
stateFilter = 'Edo. de Mexico'
numberFilter = 1

# Database Structures
configKeys = ['systemId','city','state','hardwareVersion','softwareVersion','ledConfig',
'max_pressure','min_pressure','critical_pressure','floor1','floor2','floor3','floor4']

screenKeys = ['system','mainScreen','compressor','recirculation','floor1','floor2','floor3','floor4']

stateKeys = ['system','RealTime','Vol_Recirculation','Vol1','Vol2','Vol3','Vol4','Vol5','Vol_SMaker',
'FAN1','FAN2','FAN3','FAN4','IN_FAN1','IN_FAN2','IN_FAN3','IN_FAN4','OUT_FAN1','OUT_FAN2','OUT_FAN3','OUT_FAN4',
'L1S1','L1S2','L1S3','L1S4','L2S1','L2S2','L2S3','L2S4','L3S1','L3S2','L3S3','L3S4','L4S1','L4S2','L4S3','L4S4',
'PumpIn','PumpOut','PumpSMaker','Fill_H2O','ESP_Front','ESP_Center','ESP_Back','Grower1','Grower2','Grower3','Grower4',
'EV1A1','EV1A2','EV1A3','EV1A4','EV1B1','EV1B2','EV1B3','EV1B4','EV2A1','EV2A2','EV2A3','EV2A4','EV2B1','EV2B2','EV2B3','EV2B4',
'EV3A1','EV3A2','EV3A3','EV3A4','EV3B1','EV3B2','EV3B3','EV3B4','EV4A1','EV4A2','EV4A3','EV4A4','EV4B1','EV4B2','EV4B3','EV4B4',
'compressor','Vol_Nut','Vol_H2O','P_Nut','P_Tank','P_H2O','tempExt', 'humExt', 'altitude']
