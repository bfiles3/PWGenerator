# PWGenerator
    For the password generator assignment, the task was to create a code that could, based on user input, generate a unique password. In order to complete this assignment, I had to write a code that could theorhetically include all numbers, lower and uppercase, special characters, and numbers. That is where I started with the code for the generation of the password. 
    
    I assigned variables based on the possible characters that could be included in the random password. I had a specific variable for lowercase, uppercase, special, and numeric characters. I named these accordingly and placed them at the top of the JavaScript file so that the possibilities were defined early on. I then moved onto the next task, which was assigning variables based on the user's responses to the given prompts.

    In order to create variables based on responses, there had to be individual code created to define each characteristic of the password. First and foremost was to make sure that length was defined. If the length was not defined properly between the integers of eight and 128, the next pieces of the code would not run. This was more or less a safeguard to make sure that the random password fell into the determined length.

    Following the length, the code created to define the allowed characters was listed in order of lowercase, uppercase, special, and numeric characters. In order to create a password that only contained the variables the user chose, I created a variable "allowedCharacters" that could be concated to add whatever characters the user confirmed that they wanted. If they chose cancel on the confirmation prompt, that variable would simply not be added.

    To end the "generatePassword" function, I created a "for" loop that returned a random number based on the length provided by the user, and then attributed that random index of numbers to the "allowedCharacters" variable. This basically attributed the random index of numbers to random characters included in the variable, in order to return a unique password. I then used that loop to return the random password.

