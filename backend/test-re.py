#!/usr/bin/env python3

import re

string = "Recirculation: Moving 29.77 liters from solution2 to solution maker"
check = re.findall("from solution[1-4]", string)
check1 = re.findall("to solution maker", string)
if (len(check)==1):
    print(check[0][-1])
#print(re.findall("\d+\.\d+", "4B1 Turn On 15, 15 29.3"))
