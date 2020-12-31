let menuButton = document.querySelector(".hamburger-icon");
let closeButton = document.querySelector(".close-menu-icon");
let mobileNavMenu = document.querySelector(".mobile-nav-menu");

menuButton.addEventListener("click", toggleNav);
closeButton.addEventListener("click", hideNav);

function toggleNav() {
    mobileNavMenu.style.height = "20em";
    menuButton.style.display = "none";
    closeButton.style.display = "block";
}

function hideNav() {
    mobileNavMenu.style.height = "0";
    menuButton.style.display = "block";
    closeButton.style.display = "none";
}