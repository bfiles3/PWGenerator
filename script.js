// Assignment Code
var generateBtn = document.querySelector("#generate");
// Variables that could possibly be included, based on the user responses
var caps = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lower = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var num = [0,1,2,3,4,5,6,7,8,9]
var spec = ['@', '%', '+', '', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.']
// Write password to the #password input

function generatePassword () {
  //Attributing variables based on user responses
var pwLength; 
 pwLength = prompt ("How many characters in your password? Please choose between 8-24.")
  if ((pwLength < 24) && (pwLength > 8)) {
    console.log (pwLength);
  }
  else {
    alert ("Please use characters between 8-24.");
    return false;
  };
var pwCaps 
  pwCaps = confirm("Would you like to include uppercase letters?")
  if (confirm){
    console.log (pwCaps);
};
var pwSpec 
  pwSpec = confirm("Would you like to include special characters?")
  if (confirm){
    console.log (pwSpec);
  };
};
  //Creating the length, case style, and character inclusion of the password based on the above variables

  

  



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password")
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
