document.addEventListener("DOMContentLoaded", function () {
    console.log("Security script loaded successfully!");

    // ✅ Final Step: Redirect to Valentine Page
    const boyfriendButton = document.getElementById("submitBoyfriend");
    if (boyfriendButton) {
        boyfriendButton.addEventListener("click", function () {
            let name = document.getElementById("boyfriendName").value.toLowerCase().trim();
            if (name === "ronit") {
                window.location.href = "valentine.html"; // Redirects to final page
            } else {
                document.getElementById("error-message").innerText = "❌ Incorrect name. Try again!";
            }
        });
    }
});
