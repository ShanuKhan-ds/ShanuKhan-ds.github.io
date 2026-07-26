// Portfolio Website JavaScript
// Developed by Shanu Khan

document.addEventListener("DOMContentLoaded", () => {

    console.log("Portfolio Website Initialized");

    // Smooth Scroll
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

});
