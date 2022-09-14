// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// define password criteria prompts
// define password length 8-128 characters

// define uppercase, lowercase, numeric, special
var lowerCaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var upperCaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var specialChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]

function generatePassword() {
lengthquestion = confirm("How long would you like your password to be? -Between 8 and 128 digits-");

lower = confirm("Would you like to use lowercase letters?");

upper = confirm("Would you like to use uppercase letters?");

numbers = confirm("Would you like to use numbers?");

special = confirm("Would you like to use special characters?");

}


//var result = "";

//if else
//return result;


//how to generate element