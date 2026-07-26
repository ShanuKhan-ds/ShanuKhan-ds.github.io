// Portfolio Website JavaScript
// Developed by Shanu Khan

document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio Website Initialized");

    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    const sections = document.querySelectorAll("main section[id]");

    // Smooth Scroll
    navLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (!targetSection) return;

            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

    // Active Navigation Highlight
    const updateActiveLink = () => {
        let currentSection = "home";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 140;

            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");

            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink();
});
