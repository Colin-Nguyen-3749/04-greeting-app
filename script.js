// Declare a variable to store the user's name
let userName = "Colin";

// Get the button element from the page using its id
let button = document.getElementById("welcomeBtn");

// Get the paragraph element where we will show the welcome message
let message = document.getElementById("welcomeMsg");

// Add a click event listener to the button
button.addEventListener("click", function() {
  // When the button is clicked, show the welcome message using userName
  message.textContent = "Welcome, " + userName + "!";
});