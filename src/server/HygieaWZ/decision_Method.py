#Decision Making Method for which BIN the ITEM should be placed into.

#----------VARIABLES USED IN THIS MODULE-----------#

#arrays of words
array_1 = ['plastic', 'bottle', 'plastic', 'glass']
array_2 = ['food', 'paper', 'liquid', 'drink', 'water']
array_3 = ['aluminum', 'foil']

#count system 
a1 = 0
a2 = 0
a3 = 0
a = 0
b = 0

#--------------------------------------------------#

#function for decision
def decision (arg):

    #if the word from Json is the one that needs to be read is there
    if (type(arg) == type(list)):

        #goes through the json words for key word array 1
        for i in array_1:

            #checks if the word is in array 1
            if (arg in array_1[i]): 

                a1 = a1 + 1

        #goes through the json words for key word array 2
        for i in array_2:

            #checks if the word is in array 2
            if (arg in array_2[i]):

                a2 = a2 + 1

        #goes through the json words for key word array 3
        for i in array_3:

            #checks if the word is in array 3
            if (arg in array_3[i]):

                a3 = a3 + 1

        #adds all points for array 1 and array 2
        a = a1 + a2

        #adds all points for array 2 and array 3
        b = a2 + a3

        #if there are more words from array 1
        if (a > b):

            #tell the program that the item needs to go to the recycle bin
            return 'Recycle'

        #if there are more words from array 3
        else: 

            #if not, tell the program that the item needs to go to the trash bin
            return 'Trash'

