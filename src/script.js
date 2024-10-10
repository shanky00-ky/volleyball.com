document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevents default form submission
    // Redirect to the players.html page
    window.location.href = "players.html";
});