import os
import re

path = './Rectangulos/Rectangulo8'
list = os.listdir(path)

for name in list:
    newName = name.replace(re.findall('[\.][0]{1,3}', name)[0], '_')
    os.rename('{}/{}'.format(path, name), '{}/{}'.format(path, newName))
