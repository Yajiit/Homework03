let includeLower;
let includeUpper;
let includeNumber;
let includeSpecial;
let length;
function generatePassword() {
// Promt for password length
  
    length = parseInt(prompt("Enter desired password length (between 8 and 128):"));
//  Re-prompt for invalid inputs
    while (isNaN(length) || length < 8 || length > 128) {
    length = parseInt(prompt("Ivalid- Please enter a length between 8 and 128:"));
  }
  // Prompt for which characters to include
     includeLower = confirm("Include lowercase letters?");
     includeUpper = confirm("Include uppercase letters?");
     includeNumber = confirm("Include numeric characters?");
     includeSpecial = confirm("Include special characters?");
  // Defining available characters
   const lowercase = "abcdefghijklmnopqrstuvwxyz";
   const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const numbers = "0123456789";
   const specialChars = "!@#$%^&*()_-+=[]{}|;':\",./<>?";
  // Clears previous password and character set
   let password = "";
   let charSet = "";

  // Adding the available characters to password
   if (includeLower) {
     charSet += lowercase;
     password += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
     length--;
  }
   if (includeUpper) {
     charSet += uppercase;
     password += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
     length--;
  }
  if (includeNumber) {
    charSet += numbers;
    password += numbers.charAt(Math.floor(Math.random() * numbers.length));
    length--;
  }
  if (includeSpecial) {
    charSet += specialChars;
    password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
    length--;
  }
  // Filling the password with available characters
   for (let i = 0; i < length; i++) {
     password += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }

    return password;
}

// Button to generate
const generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", function() {
const password = generatePassword();

// Displays the generated password
document.getElementById("password").textContent = password;
})
