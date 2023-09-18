// A function to check if passwords are 
function validatePassword(password, confirmPassword) {
  if (password === confirmPassword) {
    console.log("Password Matched. Password validation Successful.");
  } else {
    console.log("Password didn't match. Password validation unsuccessful.");
  }
}

// Example usage
const password = "mySecretPassword";
const confirmPassword = "mySecretPassword"; // Replace with the user's input

validatePassword(password, confirmPassword);

