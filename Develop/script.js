// Assignment code here

// Prompt alert message
function generatePassword () {
var passwordLength = prompt("How many characters do you want your password?");
if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
  alert("Value must be a number greater than 8 and less than 128.");
  return;
}
// confirm characters
var includeUppercase = confirm("Include uppercase letters?");
var includeLowercase = confirm("Include lowercase letters?");
var includeNumbers = confirm("Include numbers?");
var includeSpecialChars = confirm("Include special characters?");

if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSpecialChars) {
  alert("You must include at least one character type");
  return;
  
}

var upperChars ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChars ="abcdefghijklmnopqrstuvwxyz";
var numberChars ="0123456789";
var specialChars ="!@#$%^&*()_+[]{}|;:,.<>?";

var allChars = "";

if (includeUppercase) {
  allChars += upperChars;
}

if (includeLowercase) {
  allChars += lowerChars;
}

if (includeNumbers) {
  allChars += numberChars;
}

if (specialChars) {
  allChars += specialChars;
}


// Generate the password to the page
var generatedPassword = "";
for(var i = 0; i < passwordLength; i++); {
  var randomIndex = Math.floor(Math.random() * allChars.length);
  generatedPassword += allChars.charAt(randomIndex);
  generatedPassword =(randomIndex);
}
}
  

generatePassword();


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
