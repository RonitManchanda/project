document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById("noButton");

    noButton.addEventListener("mouseover", function () {
        const x = Math.random() * (window.innerWidth - 150); // Ensure it stays within screen width
        const y = Math.random() * (window.innerHeight - 50); // Ensure it stays within screen height

        noButton.style.position = "absolute"; // Ensures button moves
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });
});
