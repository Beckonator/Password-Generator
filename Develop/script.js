// Assignment code here
var passwordValue = "";
// Get references to the element
passwordLength = "10";
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var symbols = "!@#$%^&*";
var numbers = "1234567890";
debugger;
// Write password to the #password input
function getPassword() {
  const passwordLength = passwordText.value;
  passwordValue = "";
  var promptUppercase = window.prompt("Include Uppercase? 'YES' or 'NO'.");
  {
    if (
      promptUppercase === "yes" ||
      promptUppercase === "YES" ||
      promptUppercase === "Yes"
    ) {
      let includeUppercase = uppercase;
    } else {
      window.alert("Uppercase not used");
    }
  }
  var promptLowercase = window.prompt("Include Lowercase? 'YES' or 'NO'.");
  {
    if (
      promptLowercase === "yes" ||
      promptLowercase === "YES" ||
      promptLowercase === "Yes"
    ) {
      let includeLowercase = lowercase;
    } else {
      window.alert("Lowercase not used");
    }
  }
  var promptSymbols = window.prompt("Include Symbols? 'YES' or 'NO'.");
  {
    if (
      promptSymbols === "yes" ||
      promptSymbols === "YES" ||
      promptSymbols === "Yes"
    ) {
      console.log((includeSymbols = symbols));
    } else {
      window.alert("Symbols not used");
    }
  }
  var promptNumbers = window.prompt("Include Numbers? 'YES' or 'NO'.");
  {
    if (
      promptNumbers === "yes" ||
      promptNumbers === "YES" ||
      promptNumbers === "Yes"
    ) {
      let includeNumbers = numbers;
    } else {
      window.alert("Numbers not used");
    }
  }
}
passwordValue = "";

// for (let i = 0; i < passwordLength; i++) {
//   let password = Math.floor(Math.random() * characters.length);
//   passwordValue += characters.substring(password, password + 1);
// }

passwordText.value = passwordValue;

// Add event listener to generate button
generateBtn.addEventListener("click", getPassword);
