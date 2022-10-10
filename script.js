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