// Assignment Code
var generateBtn = document.querySelector("#generate");
// Variables that could possibly be included, based on the user responses
var caps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var spec = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.']




function generatePassword() {
  //Attributing variables based on user responses
  var allowedCharacters = []
  var pwLength = prompt("How many characters in your password? Please choose between 8-128.");
  console.log(typeof (pwLength))
  if ((parseInt(pwLength) > 128) || (parseInt(pwLength) < 8)) {
    alert("Please choose between 8-128 characters.")
    return "";
  } else {
    var pwCaps = confirm("Would you like to include uppercase letters?")
    if (pwCaps) {
      allowedCharacters = allowedCharacters.concat(caps)
    };
    var pwLower = confirm("Would you like lowercase letters?")
    if (pwLower) {
      allowedCharacters = allowedCharacters.concat(lower)
    };

    var pwSpec = confirm("Would you like to include special characters?")
    if (pwSpec) {
      allowedCharacters = allowedCharacters.concat(spec)
    };
    var pwNum = confirm("Would you like to include numbers?")
    if (pwNum) {
      allowedCharacters = allowedCharacters.concat(num)
    };
    //Creating the length, case style, and character inclusion of the password based on the above variables
    var randomPass = []
    for (var i = 0; i < parseInt(pwLength); i++) {
      let random_index = Math.floor(Math.random() * allowedCharacters.length);
      randomPass.push(allowedCharacters[random_index])
    }

    return randomPass.join("")

  }



}


// Starter code to generate the password in the correct space on the generator
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password")
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
