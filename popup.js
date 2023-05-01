// JavaScript code for the chat button functionality

// Toggle the visibility of the popup when the chat button is clicked
document.getElementById("chatButton").addEventListener("click", function() {
  var popup = document.getElementById("popup");
  if (popup.style.display === "block") {
    popup.style.display = "none";
  } else {
    popup.style.display = "block";
  }
});

// Add more JavaScript code as needed