document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById("noButton");

    noButton.addEventListener("mouseover", function () {
        const x = Math.random() * (window.innerWidth - 150); // Ensure it stays within the window
        const y = Math.random() * (window.innerHeight - 50);

        noButton.style.position = "absolute"; // Ensure absolute positioning
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });
});
