//navbar animation
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const chapMenu = document.querySelector(".chap-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    chapMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

document.querySelectorAll(".chap-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    chapMenu.classList.remove("active");
}));
