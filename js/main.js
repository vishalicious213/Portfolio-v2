// menu button hover effect
const menuButton = document.querySelector(".menuButton");

menuButton.addEventListener("mouseover", (event) => {
    menuButton.src = "img/menu.png";
})

menuButton.addEventListener("mouseout", (event) => {
    menuButton.src = "img/menu_silver.png";
})