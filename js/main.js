// menu button image hover effect
const menuButton = document.querySelector(".menuButton");

menuButton.addEventListener("mouseover", (event) => {
    menuButton.src = "img/menu.png";
})

menuButton.addEventListener("mouseout", (event) => {
    menuButton.src = "img/menu_silver.png";
})

// create menu
const anchor = document.querySelector("header div");

function createMenu() {
    const menu = document.createElement("div");
    const menuItems = document.createElement("ul");
    const menuItem1 = document.createElement("li"); // home
    const menuItem2 = document.createElement("li"); // html websites
    const menuItem3 = document.createElement("li"); // js/dom sites

    menu.appendChild(menuItems);
    menuItems.appendChild(menuItem1);
    menuItems.appendChild(menuItem2);
    menuItems.appendChild(menuItem3);

    menuItem1.textContent = "HOME";
    menuItem2.textContent = "HTML / CSS WEBSITES";
    menuItem3.textContent = "JAVASCRIPT & DOM SITES";

    menuItem1.href = "index.html";
    console.log(menuItem1.href);

    menuButton.addEventListener("click", (event) => {

    })

    anchor.appendChild(menu);
    return menu;
}

// createMenu();