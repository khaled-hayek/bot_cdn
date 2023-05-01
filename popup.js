// Toggle the visibility of the iframe when the chat button is clicked
document.getElementById("chatButton").addEventListener("click", function() {
  var chatFrame = document.getElementById("chatFrame");
  if (chatFrame.style.display === "block") {
	chatFrame.style.display = "none";
  } else {
	chatFrame.style.display = "block";
  }
});