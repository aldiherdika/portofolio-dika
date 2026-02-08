/* ===============================
   DOM ELEMENTS
================================ */
const menuToggle = document.getElementById("menuToggle");
const navLinks   = document.getElementById("navLinks");
const header     = document.querySelector("header");
const navItems   = document.querySelectorAll(".nav-links li a");

/* ===============================
   MOBILE MENU TOGGLE
================================ */
if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}

/* ===============================
   NAVBAR SCROLL EFFECT
================================ */
window.addEventListener("scroll", () => {
    header?.classList.toggle("scrolled", window.scrollY > 50);
});

/* ===============================
   ACTIVE NAV LINK
================================ */
navItems.forEach((item) => {
    item.addEventListener("click", () => {
        // Remove active from all
        navItems.forEach((link) => link.classList.remove("active"));

        // Add active to clicked
        item.classList.add("active");

        // Close mobile menu
        navLinks?.classList.remove("show");
    });
});

/* ===============================
   SMOOTH SCROLL (OPTIONAL)
================================ */
const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (!target) return;

    target.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
};
