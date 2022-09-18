// All possible characters indexed in arrays. The user will select which character types they would like to include in their randomly generated password.
var lowerCaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

// The value called out at the end of this function will be the password.
function generatePassword() {

  // Asks the user to select how long they want their password to be.
  var lengthQuestion = Number(prompt("How long of a password would you like? Choose between 8-128 digits"));
  console.log( typeof lengthQuestion);
  console.log( "length choice:", lengthQuestion )

  // Cycles through the results until the input requirements are fulfilled.
  while (lengthQuestion < 8 || lengthQuestion > 128 || isNaN(lengthQuestion)) {
    if (lengthQuestion < 8 || lengthQuestion > 128 || isNaN(lengthQuestion)) {

      // Doesn't allow the user to proceed through the confirms if they don't enter a number type value.
      if (Number.isNaN(lengthQuestion) ) {
        alert("Please enter a number.")
        return null;
      }

      // Doesn't allow the user to proceed through the confrims if the number for their password length is less than 8 or more than 128.
      if (lengthQuestion < 8 || lengthQuestion > 128 ) {
        alert("Please select a number between 8 and 128.")
        return null;
      }
      lengthQuestion = Number(prompt("How long of a password would you like? Chose between 8-128 digits"));
    }
  };

  // Asks the user to confirm which character types they would like to use for their password.
  var lowerQuestion = confirm("Would you like to use lowercase letters?");
  console.log( "lower choice", lowerQuestion )

  var upperQuestion = confirm("Would you like to use uppercase letters?");
  console.log( "upper choice", upperQuestion )

  var numbersQuestion = confirm("Would you like to use numbers?");
  console.log( "numbers choice", numbersQuestion )

  var specialQuestion = confirm("Would you like to use special characters?");
  console.log( "special choice", specialQuestion )

  // Forces the user to select at least one character type for their password.
  if (lowerQuestion === false && upperQuestion === false && numbersQuestion === false && specialQuestion === false) {
    alert("You must chose at least 1 type of character.")
    return null;
  }

  // Becomes the password.
  var collectedChars = "";

  // Adds selected characters to an array
  var userInfo = [] 
  if (lowerQuestion) userInfo = userInfo.concat(lowerCaseChars);
  if (upperQuestion) userInfo = userInfo.concat(upperCaseChars);
  if (numbersQuestion) userInfo = userInfo.concat(numbers);
  if (specialQuestion) userInfo = userInfo.concat(specialChars);

  for (var i = 0; i <= lengthQuestion; i++) {
  var randomized = userInfo[Math.floor(Math.random() * userInfo.length)]
  // Adds the value of randomized to collectedChars.
  collectedChars += randomized;
  };

  // Ends function and sends collectedChars to be called out in generatePassword function().
  return collectedChars;
};

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