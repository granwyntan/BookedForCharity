document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    menuToggle.addEventListener("click", function () {
        menuToggle.classList.toggle("open");
        mobileMenu.classList.toggle("hidden");
        mobileMenu.classList.toggle("closed");
        menuToggle.setAttribute(
            "aria-expanded",
            menuToggle.classList.contains("open")
        );
    });
});
