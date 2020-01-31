import re

string = "T2R=13.9, H2R=99.9, T2L=13.8, H2L=90.3"
check = re.findall("[TH][1-4][RL]", string)

if (len(check)==4):
    splitStr = string.split(",")
    for i, substring in enumerate(splitStr):
        newSplit = substring.split("=")
        print(float(newSplit[1]))
        print(i)
        print(newSplit[0][2])
#print(re.findall("\d+\.\d+", "4B1 Turn On 15, 15 29.3"))
