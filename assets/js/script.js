var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "R",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var randomizeArray = function (array) {
  var grabIndex = Math.floor(Math.random() * array.length);
  var indexValue = array[grabIndex];
  return indexValue;
};

var getUserInput = function () {
  //How many characters is the password?
  var passwordLength = window.prompt(
    "How many characters would you like your password to contain? [Choose a number between 8 and 128]"
  );

  var passwordSpecialCharacters = window.confirm(
    "Would you like to use special characters in your password? [Type YES or NO]"
  );

  //Does the password contain numbers?
  var passwordNumerics = window.confirm(
    "Would you like to use numerics in your password? [Type YES or NO]"
  );

  //Does the password contain uppercase letters?
  var passwordUpperCase = window.confirm(
    "Would you like to use Uppercase in your password? [Type YES or NO]"
  );

  //Does the password contain lowercase letters?
  var passwordLowerCase = window.confirm(
    "Would you like to use Lowercase in your password? [Type YES or NO]"
  );

  var userChoice = {
    confirmPasswordLength: passwordLength,
    confirmSpecialCharacters: passwordSpecialCharacters,
    confirmNumerics: passwordNumerics,
    confirmUpperCase: passwordUpperCase,
    confirmLowerCase: passwordLowerCase,
  };

  return userChoice;
};

// Example code from Stackoverflow
var generatePassword = function () {
  var userOutput = getUserInput();
  var stagingArray = [];
  var newPassword = [];
  if (userOutput.confirmSpecialCharacters === true) {
    stagingArray = stagingArray.concat(specialCharacters);
    stagingArray.push(randomizeArray(specialCharacters));
  }

  if (userOutput.confirmNumerics === true) {
    stagingArray = stagingArray.concat(numericCharacters);
    stagingArray.push(randomizeArray(numericCharacters));
  }

  if (userOutput.confirmUpperCase === true) {
    stagingArray = stagingArray.concat(upperCase);
    stagingArray.push(randomizeArray(upperCase));
  }

  if (userOutput.confirmLowerCase === true) {
    stagingArray = stagingArray.concat(lowerCase);
    stagingArray.push(randomizeArray(lowerCase));
  }

  for (var i = 0; i < userOutput.confirmPasswordLength; ++i) {
    var almostThere = randomizeArray(stagingArray);
    newPassword.push(almostThere);
  }
  console.log(newPassword);
  return newPassword.join("");
};
//End example code

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment code here //
