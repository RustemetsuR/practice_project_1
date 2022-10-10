const ruFlag = document.querySelector(".language-switcher-button-RU");
const kgFlag = document.querySelector(".language-switcher-button-KG");

ruFlag.addEventListener("click", () =>{
    ruFlag.classList.toggle("active");
    kgFlag.classList.remove("active");
});

kgFlag.addEventListener("click", () =>{
    ruFlag.classList.remove("active");
    kgFlag.classList.toggle("active");
});

const hamburger = document.querySelector(".header__burger");
const nav = document.querySelector(".header__nav");


hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
});

document.querySelectorAll(".header__nav-list-links").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
}))
