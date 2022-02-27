// Assignment code here
var characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*";
var passwordLength = ;
var passwordValue = "";

// Get references to the element
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Write password to the #password input
function getPassword() {
  var promptCriteria = window.prompt("Include Uppercase? 'Yes' or 'No' .")
  passwordValue = "";

  for (var i = 0; i < passwordLength; i++) {
    var number = Math.floor(Math.random() * characters.length);
    passwordValue += characters.substring(number, number + 1);
  }

  passwordText.value = passwordValue;
}

// Add event listener to generate button
generateBtn.addEventListener("click", getPassword);
