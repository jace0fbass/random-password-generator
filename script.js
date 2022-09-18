
var lowerCaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

// Asks the user to select how long they want their password to be.
function generatePassword() {
  var lengthQuestion = Number(prompt("How long of a password would you like? Choose between 8-128 digits"));
  console.log( typeof lengthQuestion);
  console.log( "length choice:", lengthQuestion )

  // Cycle through the results until the input is valid.
  while (lengthQuestion < 8 || lengthQuestion> 128 || isNaN(lengthQuestion)) {
    if (lengthQuestion < 8 || lengthQuestion > 128 || isNaN(lengthQuestion)) {
      if (Number.isNaN(lengthQuestion) ) {
        alert("Please enter a number.")
        return null;
      }
      if (lengthQuestion < 8 || lengthQuestion > 128 ) {
        alert("Please select a number between 8 and 128.")
        return null;
      }
      lengthQuestion = Number(prompt("How long of a password would you like? Chose between 8-128 digits"));
    }
  };

  // Asks the user to confirm if they want to use different character types.
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
  var combined = "";

  // adds selected characters to an array
  var userInfo = [].concat(lowerQuestion);
  if (upperQuestion) userInfo = userInfo.concat(upperCaseChars);
  if (numbersQuestion) userInfo = userInfo.concat(numbers);
  if (specialQuestion) userInfo = userInfo.concat(specialChars);

  for (var i =1; i <= lengthQuestion; i++) {
  var randomized = userInfo[Math.floor(Math.random() * userInfo.length)]
  combined += randomized;
  };

  return combined;
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