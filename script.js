
var lowerCaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

// Asks the user to select how long they want their password to be.
function generatePassword() {
  var lengthQuestion = Number(prompt("How long of a password would you like? Choose between 8-128 digits"));
  console.log( typeof lengthQuestion);
  console.log( 'length choice:', lengthQuestion )
  // Cycle through the results until the input is valid.
  while (lengthQuestion < 8 || lengthQuestion> 128 || isNaN(lengthQuestion)) {
    if (lengthQuestion < 8 || lengthQuestion > 128 || isNaN(lengthQuestion)) {
      if (Number.isNaN(lengthQuestion) ) {
        alert('Please enter a number.')
        return null;
      }
      if (lengthQuestion < 8 || lengthQuestion > 128 ) {
        alert('Please select a number between 8 and 128.')
        return null;
      }
      lengthQuestion = Number(prompt("How long of a password would you like? Chose between 8-128 digits"));
    }
  };

  // Asks the user to confirm if they want to use different character types.
  var lowerQuestion = confirm("Would you like to use lowercase letters?");
  console.log( 'lower choice', lowerQuestion )

  var upperQuestion = confirm("Would you like to use uppercase letters?");
  console.log( 'upper choice', upperQuestion )

  var numbersQuestion = confirm("Would you like to use numbers?");
  console.log( 'numbers choice', numbersQuestion )

  var specialQuestion = confirm("Would you like to use special characters?");
  console.log( 'special choice', specialQuestion )
  
  if (lowerQuestion === false && upperQuestion === false && numbersQuestion === false && specialQuestion === false) {
    alert('You must chose at least 1 type of character.')
    return null;
  }

  var combined = "";

  // adds selected characters to an array
  var userInfo = [].concat(lowerCaseChars);
  if (upperCaseChars) userInfo = userInfo.concat(upperCaseChars);
  if (numbers) userInfo = userInfo.concat(numbers);
  if (specialChars) userInfo = userInfo.concat(specialChars);

  for (var i =1; i <= lengthQuestion; i++) {
  var randomized = userInfo[Math.floor(Math.random() * userInfo.length)]
  combined +- randomized;
  };
  return combined;
};

// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}


generateBtn.addEventListener("click", writePassword);




/*if (!userInfo) return null;

if (userInfo.lowerQuestion) {
  ifChoice = ifChoice.concat(lowerCaseChars)
  selections.push(getRandom(lowerCaseChars))
}

if (userInfo.upperQuestion) {
  ifChoice = ifChoice.concat(upperCaseChars)
  selections.push(getRandom(upperCaseChars))
}

if (userInfo.numbersQuestion) {
  ifChoice = ifChoice.concat(numbers)
  selections.push(getRandom(numbers))
}

if (userInfo.specialQuestion) {
  ifChoice = ifChoice.concat(specialChars)
  selections.push(getRandom(specialChars))
}



 

 var userInfo = userChoices();
  var ifChoice =[];
  var selections = []; {
    
    for (var i = 0; i < ; i++) {
      upperCaseChars[i] = lowerCaseChars[i].toUpperCase()
      console.log('Loop there it is');
    }
  }
 /* function getRandom(arr) {
    var randomIndex = Math.floor(Math.random() * arr);
    var indexElement = arr[randomIndex];
    return indexElement;
  }
  
  return;
}

  var lengthQuestion = Number(prompt("How long of a password would you like? Chose between 8-128 digits"));
  console.log( typeof lengthQuestion);
  console.log( 'length choice:', lengthQuestion )
  
  if (Number.isNaN(lengthQuestion) ) {
    alert('Please enter a number.')
    return null;
  }
  if (lengthQuestion < 8 || lengthQuestion > 128 ) {
    alert('Please select a number between 8 and 128.')
    return null;
  }
  
  var lowerQuestion = confirm("Would you like to use lowercase letters?");
  console.log( 'lower choice', lowerQuestion )
  
  var upperQuestion = confirm("Would you like to use uppercase letters?");
  console.log( 'upper choice', upperQuestion )
  
  var numbersQuestion = confirm("Would you like to use numbers?");
  console.log( 'numbers choice', numbersQuestion )
  
  var specialQuestion = confirm("Would you like to use special characters?");
  console.log( 'special choice', specialQuestion )
  
  if (lowerQuestion === false && upperQuestion === false && numbersQuestion === false && specialQuestion === false) {
    alert('You must chose at least 1 type of character.')
    return null;
  }
  
  var userInput = {
    lengthQuestion: lengthQuestion,
    lowerQuestion: lowerQuestion,
    upperQuestion: upperQuestion,
    numbersQuestion: numbersQuestion,
    specialQuestion: specialQuestion
  };
   
  return userInput;
}
*/
// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}


generateBtn.addEventListener("click", writePassword);


