// Example code from Stackoverflow
var generatePassword = function () {
  var length = 8,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
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
console.log(password);

// Assignment code here
var password = document.getElementById("password");
var generateBtn = document.getElementById("generate.btn");

// Password creation prompts

//How many characters is the password?
var passwordLength = window.prompt(
  "How many characters would you like your password to contain? [Choose a number between 8 and 128]"
);

//Does the password have special characters?
var passwordSpecialCharacters = window.prompt(
  "Would you like to use special characters in your password? [Type YES or NO]"
);
if (
  passwordSpecialCharacters === "YES" ||
  passwordSpecialCharacters === "yes"
) {
}

//Does the password contain numbers?
var passwordNumerics = window.prompt(
  "Would you like to use numerics in your password? [Type YES or NO]"
);
if (passwordNumerics === "YES" || passwordNumerics === "yes") {
}

//Does the password contain uppercase letters?
var passwordUpperCase = window.prompt(
  "Would you like to use Uppercase in your password? [Type YES or NO]"
);
if (passwordUpperCase === "YES" || passwordUpperCase === "yes") {
}

//Does the password contain lowercase letters?
var passwordLowerCase = window.prompt(
  "Would you like to use Lowercase in your password? [Type YES or NO]"
);
if (passwordLowerCase) {
}

// Generate password function using variables
var uniquePassword = [
  passwordCharacters,
  passwordSpecialCharacters,
  passwordNumerics,
  passwordUpperCase,
  passwordLowerCase,
];
