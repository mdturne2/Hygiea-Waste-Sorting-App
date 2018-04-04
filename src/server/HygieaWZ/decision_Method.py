#Decision Making Method for which BIN the ITEM should be placed into.

#
#import (stuff from API: Json file documentation, Database of words used for association, and exactly the return type [still need])
#

#----------VARIABLES USED IN THIS MODULE-----------#

#counter
c = 0 

#length for how many label annotations there are
len = len(labelAnnotations)

#--------------------------------------------------#

#List for descriptions for the ITEM
decrip = ['']

#Adding all the descriptions from label annotations into a list
while c < len:
    decrip.append(labelAnnotations[c][2])
    c = c + 1

#NOTE FOR JOSH
# Figure out some way to remove the part: "description:" "WORD" 
# in order to simplify the process....

