// Toggle navigation menu visibility
document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("menu-toggle");
    const nav = document.querySelector("nav");

    toggle.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
});

// Accordion functionality for FAQ section
document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach((accordion) => {
        accordion.addEventListener("click", function () {
            const panel = this.nextElementSibling;
            const isOpen = panel.classList.contains("active");

            // Close all panels and reset symbols
            document.querySelectorAll(".panel").forEach((p) => p.classList.remove("active"));
            document.querySelectorAll(".accordion").forEach((btn) => {
                btn.textContent = btn.textContent.replace("-", "+");
            });

            // Open this panel if it wasn’t already open
            if (!isOpen) {
                panel.classList.add("active");
                this.textContent = this.textContent.replace("+", "-");
            }
        });
    });
});
