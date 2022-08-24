const menuBtn =
document.querySelector(".menu-btn");

const menu =
document.querySelector(".menu");

const menuNav =
document.querySelector(".menu-nav");

const navItems =
document.querySelectorAll(".nav-item");

const homeNav = document.getElementById('nav-1');
const aboutNav = document.getElementById('nav-2');
const projectNav = document.getElementById('nav-3');
const linksNav = document.getElementById('nav-4');
const resumeNav = document.getElementById('nav-5');
const navbarItem = [homeNav, aboutNav, projectNav, linksNav, resumeNav];
// Set the initial state of the menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    navItems.forEach((item) =>
        item.classList.add("show"));

    // Reset the menu state
    showMenu = true;
    navAnimation('out', 'in');
} else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    navItems.forEach((item) =>
        item.classList.remove("show"));

    // Reset the menu state
    showMenu = false;
    navAnimation('in', 'out');
}
}

function navAnimation(direction1, direction2) {
    navbarItem.forEach((nav, i) => {
      nav.classList.replace(`slide-${direction1}-${i + 1}`, `slide-${direction2}-${i + 1}`);
    });
}
