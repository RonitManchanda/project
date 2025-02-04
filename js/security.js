document.addEventListener("DOMContentLoaded", function () {
    console.log("Security script loaded successfully!");

    // ✅ Phone Password Validation
    const phoneButton = document.getElementById("submitPhonePassword");
    if (phoneButton) {
        phoneButton.addEventListener("click", function () {
            console.log("Phone password button clicked!");
            let password = document.getElementById("phonePassword").value;
            if (password === "263580") {
                window.location.href = "security2.html";
            } else {
                document.getElementById("error-message").innerText = "You don't know your own phone password?";
            }
        });
    }

    // ✅ Birthday Validation
    const birthdayButton = document.getElementById("submitBirthday");
    if (birthdayButton) {
        birthdayButton.addEventListener("click", function () {
            console.log("Birthday button clicked!");
            let birthday = document.getElementById("birthday").value;
            if (birthday === "06/07/24") {
                window.location.href = "security3.html";
            } else {
                document.getElementById("error-message").innerText = "How could you forget our anniversary, get it right or we are breaking up";
            }
        });
    }

    // ✅ Boyfriend's Name Validation - Redirects to Final Proposal Page
    const boyfriendButton = document.getElementById("submitBoyfriend");
    if (boyfriendButton) {
        boyfriendButton.addEventListener("click", function () {
            console.log("Boyfriend name button clicked!");
            let name = document.getElementById("boyfriendName").value.toLowerCase().trim();
            if (name === "ronit") {
                window.location.href = "valentine.html";  // ✅ Redirects to the final proposal page
            } else {
                document.getElementById("error-message").innerText = "you aren't funny.";
            }
        });
    }
});
