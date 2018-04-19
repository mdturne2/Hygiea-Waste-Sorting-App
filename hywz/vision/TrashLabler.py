#Decision Making Method for which BIN the ITEM should be placed into.

#----------VARIABLES USED IN THIS MODULE-----------#



#--------------------------------------------------#

#function for decision
def decision (arg):
    #array of recycle words
    arg=str(arg)
    recycle = ['plastic', 'aluminum', 'bottle', 'recycle', 'recyclable', 'paper']
    #if the word from Json is the one that needs to be read is there
    if type(arg) == type(''):
        for i in recycle:
            if i in arg.lower():
                return 'Recycle'
        return 'Compost'
    
    else:
        return 'error'

