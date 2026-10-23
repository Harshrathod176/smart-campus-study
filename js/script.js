/* =========================================================
   Smart Campus Study — script.js
   The only JavaScript on the site: the phone menu button.
   Everything else (layout, colours, responsive grids) is CSS.
   ========================================================= */

// Mobile navigation toggle
var menuButton = document.querySelector(".nav-toggle");
var navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
    menuButton.addEventListener("click", function () {
        // Add or remove the "open" class, which shows the links on phones
        navLinks.classList.toggle("open");

        // Tell screen readers whether the menu is open
        var isOpen = navLinks.classList.contains("open");
        menuButton.setAttribute("aria-expanded", isOpen);
        menuButton.textContent = isOpen ? "Close" : "Menu";
    });
}
