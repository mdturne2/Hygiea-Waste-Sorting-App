#Creating the Login process for the User

#
#Need to know how to import the data of the Usernames and Passwords
#

user_Login_Array = USER LOGIN ARRAY FROM CREATE USER
len = user_Login_Array.len

#Method for the Login Verification 
def login (typed_Username, typed_Password):

    #for loop for the length of array of user login accounts
    for i in len:

        #if the username is a match
        if (typed_Username in user_Login_Array[i][0]):

            #And if the password is a match
            if (typed_Password in user_Login_Array[i][1]):

                #return the account is verified 
                return 'success'

            #return if the username is correct, but the password is incorrect
            return 'password denied'

        #return if there is no account with that username
        return 'account not there'