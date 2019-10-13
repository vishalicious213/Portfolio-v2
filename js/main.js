// menu button image hover effect
const menuButton = document.querySelector(".menuButton");

menuButton.addEventListener("mouseover", (event) => {
    menuButton.src = "img/menu.png";
})

menuButton.addEventListener("mouseout", (event) => {
    menuButton.src = "img/menu_silver.png";
})

// create menu
const anchor = document.querySelector(".menuDiv");

function createMenu() {
    const menu = document.createElement("div");

    const menuItem1 = document.createElement("a");
    menuItem1.textContent = "HOME";
    menuItem1.href = "index.html";
    const menuItem2 = document.createElement("a");
    menuItem2.textContent = "HTML / CSS WEBSITES";
    menuItem2.href = "html_web.html";
    const menuItem3 = document.createElement("a");
    menuItem3.textContent = "JAVASCRIPT & DOM SITES";
    menuItem3.href = "js_dom.html";

    menu.appendChild(menuItem1);
    menu.appendChild(menuItem2);
    menu.appendChild(menuItem3);

    menu.classList.add("menu", "menu-toggle");
        
    menuButton.addEventListener("click", (event) => {
        menu.classList.toggle("menu-toggle");
        anchor.appendChild(menu);
    })

    // anchor.appendChild(menu);
    return menu;
}

createMenu();


// card component
function projectCard() {
    // define new elements
    const container = document.createElement("div");
        const screenshot = document.createElement("div");
            const img = document.createElement("img");
        const workInfo = document.createElement("div");
            const projectName = document.createElement("h3");
            const offsite = document.createElement("div");
                const visit = document.createElement("a");
                const view = document.createElement("a");
            const techBox = document.createElement("div");
                const descriptor = document.createElement("p");
                const tech = document.createElement("p");

    // setup structure of elements
    container.appendChild(screenshot);
        screenshot.appendChild(img);
    container.appendChild(workInfo);
        workInfo.appendChild(projectName);
        workInfo.appendChild(offsite);
            offsite.appendChild(visit);
            offsite.appendChild(view);
        workInfo.appendChild(techBox);
            techBox.appendChild(descriptor);
            techBox.appendChild(tech);

    // set class names
    container.classList.add("container");
        screenshot.classList.add("screenshot");
        workInfo.classList.add("workInfo");
            offsite.classList.add("offsite");
                visit.classList.add("visit");
                view.classList.add("view");
            techBox.classList.add("techBox");
                tech.classList.add("tech");

    // set text content
    // title.textContent = articleData.title;
    img.src = "img/github-usercard.jpg";
    projectName.textContent = "Component Test";
    visit.textContent = "VISIT";
    visit.href = "https://vishalicious213.github.io/5.4-github-usercard-v2/";
    view.textContent = "VIEW";
    view.href = "https://github.com/vishalicious213/5.4-github-usercard-v2";
    descriptor.textContent = "Accessed the GitHub API using the axios JavaScript library and built a component that creates social cards of my GitHub followers based on returned data.";
    tech.textContent = "STACK";

    return container;
}

projectAnchor = document.querySelector(".works");
projectAnchor.appendChild(projectCard());


/*
<div class="container"> <!-- GitHub Cards -->
    <div class="screenshot">
        <img src="img/github-usercard.jpg">
    </div>                            
    <div class="workInfo">
        <h3>Components II</h3>
        <div class="offsite">
            <a href="https://vishalicious213.github.io/5.4-github-usercard-v2/"><p class="visit"><span class="chevron">></span> VISIT SITE</p></a>
            <a href="https://github.com/vishalicious213/5.4-github-usercard-v2"><p class="view"><span class="chevron git"><i class="fab fa-github"></i></span> VIEW CODE</p></a>
        </div>
        <div class="techBox">
            <p>Accessed the GitHub API using the axios JavaScript library and built a component that creates social cards of my GitHub followers based on returned data.</p>
            <p class="tech"><i title="JavaScript" class="fab fa-js-square"></i><img class="nounImg" title="DOM" src="img/noun_DOM_13029.svg"><img class="axiosImg" title="axios" src="img/axios Page 1.svg"></p>
        </div>
    </div>
</div> <!-- GitHub Cards -->
*/