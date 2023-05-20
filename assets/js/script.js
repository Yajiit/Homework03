let includeLower;

function generatePassword() {
// Promt for password length
  if (generateBtn.dataset.fresh === "true"){
    length = parseInt(prompt("Enter desired password length (between 8 and 128):"));
//  Re-prompt for invalid inputs
    while (isNaN(length) || length < 8 || length > 128) {
    length = parseInt(prompt("Ivalid- Please enter a length between 8 and 128:"));
  }
  // Prompt for which characters to include
     includeLower = confirm("Include lowercase characters?");
  }
  
  // Defining available characters
  const lowercase = "abcdefghijklmnopqrstuvwxyz";

  // Clears previous password and character set
  let password = "";
  let charSet = "";

  // Adding the available characters to password
  if (includeLower) {
    charSet += lowercase;
    password += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
    length--;
  }

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
