// Ensures variables have functional scope for reroll
let includeLower;
let includeUpper;
let includeNumber;
let includeSpecial;
let length;
let resetlength;
// Primary function for password generation
function generatePassword() {
// Ensures the alphanumeric sidestep prompt works properly on repeat generations
  let includeAlphaNum = false;
  // Check if function is generating fresh password or rerolling with previously used criteria
  if (generateBtn.dataset.fresh === "true"){
  // Promt for password length
    length = parseInt(prompt("Enter desired password length (between 8 and 128):"));
//  Re-prompt for invalid inputs
    while (isNaN(length) || length < 8 || length > 128) {
    length = parseInt(prompt("Ivalid- Please enter a length between 8 and 128:"));
  }
  // Holds the specified length in a separate variable for safe keeping
  resetlength = length;
    // Prompt to add all alphanumeric with single ok
    includeAlphaNum = confirm("Include all alphanumeric characters?")
    if (includeAlphaNum) {
      includeUpper = true;
      includeLower = true;
      includeNumber = true;
    } else {
  // Separate prompts for which characters to include
     includeLower = confirm("Include lowercase letters?");
     includeUpper = confirm("Include uppercase letters?");
     includeNumber = confirm("Include numbers?");
    }
  // Prompt for special characters
     includeSpecial = confirm("Include special characters?");
  // Set boolean for rerolling password later
     generateBtn.dataset.fresh = "false";
  } else {
    // Copies length value of previously generated password
    length = resetlength;
  }
  // Defining available characters
   const lowercase = "abcdefghijklmnopqrstuvwxyz";
   const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const numbers = "0123456789";
   const specialChars = "!@#$%^&*()_-+=[]{}|;':\",./<>?";
  // Clears previous password and character set
   let password = "";
   let charSet = "";

  // Adds the available characters to character set, an ensures at least one character of that type is included in the password
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
  // Fills the password with available characters
   for (let i = 0; i < length; i++) {
     password += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  // Sends generated characters into shuffler function
   password = shuffler(password);
    return password;
}
  // Function to shuffle the password to prevent the first four character types from being predictable
function shuffler(string){
  const array = string.split("");
  for (let i = array.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i +1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.join("");
}
// Button to generate
const generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", function() {
  generateBtn.dataset.fresh = "true";
  const password = generatePassword();
  // ungreys the reroll button
  recreateBtn.style.opacity = "1.0";
  recreateBtn.style.cursor = "auto";
// Displays the generated password
  document.getElementById("password").textContent = password;
})
// Button to reroll
const recreateBtn = document.getElementById("recreateBtn");
recreateBtn.addEventListener("click", function(){
  const password = generatePassword();
  document.getElementById("password").textContent = password;
});