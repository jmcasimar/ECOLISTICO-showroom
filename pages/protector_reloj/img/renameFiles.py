import os
import re

path = './GROWY_EN'
list = os.listdir(path)

i = 0
for name in list:
    newName = name[:8]
    if(i<10): newName += '0000{}'.format(i)
    elif(i<100): newName += '000{}'.format(i)
    elif(i<1000): newName += '00{}'.format(i)
    elif(i<10000): newName += '0{}'.format(i)
    else: newName += '{}'.format(i)
    newName += '.png'
    i += 1
    #os.rename('{}/{}'.format(path, name), '{}/{}'.format(path, newName))
    #print(name[8:])
    print(newName)
