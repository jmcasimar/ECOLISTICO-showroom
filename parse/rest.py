import os
import json
os.environ["PARSE_API_ROOT"] = "http://localhost:1337/parse"

# Everything else same as usual

from parse_rest.datatypes import Function, Object, GeoPoint
from parse_rest.connection import register
from parse_rest.query import QueryResourceDoesNotExist
from parse_rest.connection import ParseBatcher
from parse_rest.core import ResourceRequestBadRequest, ParseError

APPLICATION_ID = '123456'
REST_API_KEY = '...'
MASTER_KEY = None

register(APPLICATION_ID, REST_API_KEY, master_key=MASTER_KEY)


# EXAMPLE FOR SAVING NEW OBJECT IN GameScore Class
#class GameScore(Object):
#    pass

#gameScore = GameScore(score=1337, player_name='John Doe', cheat_mode=False)
#gameScore.cheat_mode = True
#gameScore.level = 20
#gameScore.save()

# Example for getting all the results in system class
class system(Object):
    pass

sys = system.Query.all()
for result in sys:
    print(result.EV4A1)
