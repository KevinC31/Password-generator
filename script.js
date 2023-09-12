// Assignment code here

// Function to generate a random password
function generateRandomPassword() {
  
  // Prompt the user for password length
  var passwordLength = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));

  // Check if the input is valid
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid input. Password length must be between 8 and 128 characters.");
    return;
  }
// Prompt the user for character types
var includeLowerCase = confirm("Do you want to include lowercase letters?");
var includeUpperCase = confirm("Do you want to include uppercase letters?");
var includeNumbers = confirm("Do you want to include numbers?");
var includeSpecialChars = confirm("Do you want to include special characters?");

// Define characters
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChars = "0123456789";
var specialChars = "!@#$%^&*()_-+=<>?";

// Combine selected character sets
var allChars = "";

if (includeLowerCase) {
  allChars += lowercaseChars;
}

if (includeUpperCase) {
  allChars += uppercaseChars;
}

if (includeNumbers) {
  allChars += numberChars;
}

if (includeSpecialChars) {
  allChars += specialChars;
}

// Check if at least one character type is selected
if (allChars === "") {
  alert("Please select at least one character type.");
  return;
}

// Initialize the password
var password = "";

// Generate the random password
for (var i = 0; i < passwordLength; i++) {
  var randomIndex = Math.floor(Math.random() * allChars.length);
  password += allChars.charAt(randomIndex);
}

// Display the generated password
alert("Your random password is: " + password);
}

// Call the password generator function
generateRandomPassword();

  


  




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  generatePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
