// Get the input field where the user will type their name
let nameInput = document.getElementById("nameInput");

// Get the button element from the page using its id
let button = document.getElementById("welcomeBtn");

// Get the paragraph element where we will show the welcome message
let message = document.getElementById("welcomeMsg");

// Add a click event listener to the button
button.addEventListener("click", function() {
  // Get the value entered by the user
  let userName = nameInput.value;
  // Show a fun personalized message using the user's name
  message.textContent = "Hey " + userName + "! You are awesome!";
});