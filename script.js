// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);


var password = document.getElementById("password");
var lowerCaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];


function generatePassword() {
var lengthQuestion = parseInt(prompt("How long of a password would you like? Chose between 8-128 digits"));
  console.log( typeof lengthQuestion);
  console.log( 'length choice:', lengthQuestion )
  if (Number.isNaN(lengthQuestion) ) {
    alert('Please refresh the page and enter a number.')
    return null;
  }
  if (lengthQuestion < 8 || lengthQuestion > 128 ) {
    alert('Please select a number between 8 and 128.')
    return null;
  }
}
var lowerQuestion = confirm("Would you like to use lowercase letters?");
  console.log( 'lower choice', lowerQuestion )
  
var upperQuestion = confirm("Would you like to use uppercase letters?");
  console.log( 'upper choice', upperQuestion )
  
var numbersQuestion = confirm("Would you like to use numbers?");
  console.log( 'numbers choice', numbersQuestion )
  
var specialQuestion = confirm("Would you like to use special characters?");
  console.log( 'special choice', specialQuestion )



  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
  }
  







  /*
function userChoices() {
  var lengthQuestion = parseInt(prompt("How long of a password would you like? Chose between 8-128 digits"));
  console.log( typeof lengthQuestion);
  console.log( 'length choice:', lengthQuestion )
  
  if (Number.isNaN(lengthQuestion) ) {
    alert('Please refresh the page and enter a number.')
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
  
  //for (var i =0; i < lowerCaseChars.length; ) {}
  
  return userInput;
}


function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length )
  var indexElement = arr[randomIndex];
  return indexElement;
}

function generatePassword() {
  var userInfo = userChoices();
  var sureChoice = [];
  var ifChoice =[getRandom];
  var finalChoice = [];
  var lowerCaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
  
  if (!userInfo) return null;
  
  if (userInfo.lowerQuestion) {
    ifChoice = ifChoice.concat(lowerCaseChars)
    sureChoice.push(getRandom(lowerCaseChars))
  }
  
  if (userInfo.upperQuestion) {
    ifChoice = ifChoice.concat(upperCaseChars)
    sureChoice.push(getRandom(upperCaseChars))
  }
  
  if (userInfo.numbersQuestion) {
    ifChoice = ifChoice.concat(numbers)
    sureChoice.push(getRandom(numbers))
  }
  
  if (userInfo.specialQuestion) {
    ifChoice = ifChoice.concat(specialChars)
    sureChoice.push(getRandom(specialChars))
  }
  
  // create more ifs then for loop and run user object and randomize if choice and push it to final choice. 
  
  //for loop on sure choice.length and call out index of surechoice it will equal final choice. 
  
  //then return final choice and do a .join
}




//return result;
