#Decision Making Method for which BIN the ITEM should be placed into.

#----------VARIABLES USED IN THIS MODULE-----------#

#array of recycle words
recycle = ['plastic', 'aluminum', 'bottle', 'recycle', 'recyclable', 'paper']

#--------------------------------------------------#

#function for decision
def decision (arg):

    #if the word from Json is the one that needs to be read is there
    if (type(arg) == type(list)):

        #goes through the array of possible words for recycle
        for i in recycle:

            #if one of them is in the list of words from the image,
            if (arg in recycle[i]): 

                #tell the program that the item needs to go to the recycle bin
                return 'Recycle'

        #if not, tell the program that the item needs to go to the compost bin
        return 'compost'

