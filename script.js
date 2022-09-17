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


// define uppercase, lowercase, numeric, special
var lowerCaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var upperCaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var specialChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]

function generatePassword() {
  
lengthQuestion = window.prompt("How long of a password would you like? Chose between 8-128 digits");
  console.log( 'length choice:', lengthQuestion )

lowerQuestion = confirm("Would you like to use lowercase letters?");
  console.log( 'lower choice', lowerQuestion )

upperQuestion = confirm("Would you like to use uppercase letters?");
  console.log( 'upper choice', upperQuestion )

numbersQuestion = confirm("Would you like to use numbers?");
  console.log( 'numbers choice', numbersQuestion )

specialQuestion = confirm("Would you like to use special characters?");
  console.log( 'special choice', specialQuestion )
// if statement here?
}

// change ok/cancel to yes/no and make the choice apply to the result


//var result = "";

//if else
//return result;


//how to generate element
