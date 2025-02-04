// Function to validate phone password
function checkPhonePassword() {
    let password = document.getElementById("phonePassword").value;
    if (password === "263580") {
        window.location.href = "security2.html"; // Move to next step
    } else {
        document.getElementById("error-message").innerText = "❌ Incorrect password. Try again!";
    }
}

// Function to validate birthday
function checkBirthday() {
    let birthday = document.getElementById("birthday").value;
    if (birthday === "04/21/06") {
        window.location.href = "security3.html"; // Move to next step
    } else {
        document.getElementById("error-message").innerText = "❌ Incorrect birthday. Try again!";
    }
}

// Function to validate boyfriend's name
function checkBoyfriendName() {
    let name = document.getElementById("boyfriendName").value.toLowerCase(); // Convert input to lowercase
    if (name === "ronit") {
        window.location.href = "index.html"; // Grant access to the main page
    } else {
        document.getElementById("error-message").innerText = "❌ Incorrect name. Try again!";
    }
}
