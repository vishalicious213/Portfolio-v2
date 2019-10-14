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
                    const visitButton = document.createElement("span");
                    const visitText = document.createElement("p");
                const view = document.createElement("a");
                    const viewButton = document.createElement("i");
                    const viewText = document.createElement("p");
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
                visit.appendChild(visitButton);
                visit.appendChild(visitText);
            offsite.appendChild(view);
                view.appendChild(viewButton);
                view.appendChild(viewText);
        workInfo.appendChild(techBox);
            techBox.appendChild(descriptor);
            techBox.appendChild(tech);

    // set class names
    container.classList.add("container");
        screenshot.classList.add("screenshot");
        workInfo.classList.add("workInfo");
            offsite.classList.add("offsite");
                visitText.classList.add("visit");
                visitButton.classList.add("chevron");
                viewText.classList.add("view");
                viewButton.classList.add("chevron", "git", "fab", "fa-github");
            techBox.classList.add("techBox");
                tech.classList.add("tech");

    // set text content
    img.src = "img/github-usercard.jpg";
    projectName.textContent = "Component Test";
    
    visit.style.display = "flex";
    visit.style.alignItems = "baseline";
    visit.href = "https://vishalicious213.github.io/5.4-github-usercard-v2/";
    visitButton.textContent = ">";
    visitText.textContent = " VISIT SITE";
    
    view.style.display = "flex";
    view.style.alignItems = "baseline";
    view.href = "https://github.com/vishalicious213/5.4-github-usercard-v2";
    viewText.textContent = " VIEW CODE";
    
    descriptor.textContent = "Accessed the GitHub API using the axios JavaScript library and built a component that creates social cards of my GitHub followers based on returned data.";
    tech.textContent = "#";

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