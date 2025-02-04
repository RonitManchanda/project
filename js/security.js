document.addEventListener("DOMContentLoaded", function () {
    console.log("Security script loaded successfully!");  // Debugging check

    // ✅ Phone Password Validation
    const phoneButton = document.getElementById("submitPhonePassword");
    if (phoneButton) {
        phoneButton.addEventListener("click", function () {
            console.log("Phone password button clicked!"); // Debugging check
            let password = document.getElementById("phonePassword").value;
            if (password === "263580") {
                window.location.href = "security2.html";
            } else {
                document.getElementById("error-message").innerText = "❌ You don't know your own phone password?";
            }
        });
    }

    // ✅ Birthday Validation
    const birthdayButton = document.getElementById("submitBirthday");
    if (birthdayButton) {
        birthdayButton.addEventListener("click", function () {
            console.log("Birthday button clicked!"); // Debugging check
            let birthday = document.getElementById("birthday").value;
            if (birthday === "06/07/24") {
                window.location.href = "security3.html";
            } else {
                document.getElementById("error-message").innerText = "How could you forget our anniversary??";
            }
        });
    }

    // ✅ Boyfriend's Name Validation (Case-Insensitive)
    const boyfriendButton = document.getElementById("submitBoyfriend");
    if (boyfriendButton) {
        boyfriendButton.addEventListener("click", function () {
            console.log("Boyfriend name button clicked!"); // Debugging check
            let name = document.getElementById("boyfriendName").value.toLowerCase().trim();
            if (name === "ronit") {
                window.location.href = "index.html";
            } else {
                document.getElementById("error-message").innerText = "You're not funny, try again.";
            }
        });
    }
});
