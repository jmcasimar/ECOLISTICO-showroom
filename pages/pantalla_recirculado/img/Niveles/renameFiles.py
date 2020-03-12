import os
import re

path = './TanqueB'
list = os.listdir(path)

for name in list:
    newName = name[7:]
    os.rename('{}/{}'.format(path, name), '{}/{}'.format(path, newName))
