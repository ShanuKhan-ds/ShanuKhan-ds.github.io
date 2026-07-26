// Portfolio Website JavaScript
// Developed by Shanu Khan

document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio Website Initialized");

    // Smooth Scroll Navigation
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
});
