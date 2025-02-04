document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById("noButton");

    noButton.addEventListener("mouseover", function () {
        // Get viewport size
        const maxX = window.innerWidth - noButton.offsetWidth - 20; // Keep inside width
        const maxY = window.innerHeight - noButton.offsetHeight - 20; // Keep inside height

        // Generate random X and Y values within boundaries
        const x = Math.floor(Math.random() * maxX);
        const y = Math.floor(Math.random() * maxY);

        // Apply new position
        noButton.style.position = "absolute";
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });
});
