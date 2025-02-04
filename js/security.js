document.addEventListener("DOMContentLoaded", function () {
    console.log("Security script loaded successfully!");

    // ✅ Phone Password Validation
    const phoneButton = document.getElementById("submitPhonePassword");
    if (phoneButton) {
        phoneButton.addEventListener("click", function () {
            let password = document.getElementById("phonePassword").value;
            if (password === "263580") {
                window.location.href = "security2.html";
            } else {
                document.getElementById("error-message").innerText = "bru how do you not know your phone password";
            }
        });
    }

    // ✅ Anniversary Date Validation (MM/DD/YY)
    const anniversaryButton = document.getElementById("submitAnniversary");
    if (anniversaryButton) {
        anniversaryButton.addEventListener("click", function () {
            let anniversary = document.getElementById("anniversary").value.trim();
            if (anniversary === "06/07/24") {
                window.location.href = "security3.html";
            } else {
                document.getElementById("error-message").innerText = "we're breaking up wtf";
            }
        });
    }

    // ✅ Boyfriend's Name Validation - Redirects to Valentine Page
    const boyfriendButton = document.getElementById("submitBoyfriend");
    if (boyfriendButton) {
        boyfriendButton.addEventListener("click", function () {
            let name = document.getElementById("boyfriendName").value.toLowerCase().trim();
            if (name === "ronit") {
                window.location.href = "valentine.html"; // ✅ Goes to the final proposal page
            } else {
                document.getElementById("error-message").innerText = "you aren't funny btw";
            }
        });
    }
});
