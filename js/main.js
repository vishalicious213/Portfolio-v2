// menu button image hover effect ----------------------------------
const menuButton = document.querySelector(".menuButton");

menuButton.addEventListener("mouseover", (event) => {
    menuButton.src = "img/menu.png";
})

menuButton.addEventListener("mouseout", (event) => {
    menuButton.src = "img/menu_silver.png";
})

// create menu -----------------------------------------------------
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
    menuItem3.textContent = "JAVASCRIPT & REACT SITES";
    menuItem3.href = "js_dom.html";

    menu.appendChild(menuItem1);
    menu.appendChild(menuItem2);
    menu.appendChild(menuItem3);

    menu.classList.add("menu", "menu-toggle");
        
    menuButton.addEventListener("click", (event) => {
        menu.classList.toggle("menu-toggle");
        anchor.appendChild(menu);
    })

    return menu;
}

createMenu();

// card component --------------------------------------------------
function projectCard(projectObj) {
    // define new elements
    const container = document.createElement("div");
        const screenshot = document.createElement("div");
            const img = document.createElement("img");
        const workInfo = document.createElement("div");
            const projectName = document.createElement("h3");
            const projectType = document.createElement("p");
            const offsite = document.createElement("div");
                const visit = document.createElement("a");
                    const visitButton = document.createElement("span");
                    const visitText = document.createElement("p");
                const view = document.createElement("a");
                    const viewButton = document.createElement("i");
                    const viewText = document.createElement("p");
            const techBox = document.createElement("div");
                const descriptor = document.createElement("p");
                const tech = document.createElement("ul");
                    const htmlIco = document.createElement("li");
                    const cssIco = document.createElement("li");
                    const lessIco = document.createElement("li");
                    const wpIco = document.createElement("li");
                    const jsIco = document.createElement("li");
                    const domIco = document.createElement("li");
                    const domImg = document.createElement("img");
                    const axiosIco = document.createElement("li");
                    const axiosImg = document.createElement("img");
                    const reactIco = document.createElement("li");

    // setup structure of elements
    container.appendChild(screenshot);
        screenshot.appendChild(img);
    container.appendChild(workInfo);
        workInfo.appendChild(projectName);
        workInfo.appendChild(projectType);
        workInfo.appendChild(offsite);
            offsite.appendChild(visit);
                visit.appendChild(visitButton);
                visit.appendChild(visitText);
            if (projectObj.view != "#") {
                offsite.appendChild(view);
                    view.appendChild(viewButton);
                    view.appendChild(viewText);
            }
        workInfo.appendChild(techBox);
            techBox.appendChild(descriptor);
            techBox.appendChild(tech);

    // set class names
    container.classList.add("container");
        screenshot.classList.add("screenshot");
        workInfo.classList.add("workInfo");
            projectName.classList.add("title");
            projectType.classList.add("type");
            offsite.classList.add("offsite");
                visitText.classList.add("visit");
                visitButton.classList.add("chevron");
                viewText.classList.add("view");
                viewButton.classList.add("chevron", "git", "fab", "fa-github");
            techBox.classList.add("techBox");
                tech.classList.add("tech");
                    htmlIco.classList.add("fab", "fa-html5");
                    cssIco.classList.add("fab", "fa-css3-alt");
                    lessIco.classList.add("fab", "fa-less");
                    wpIco.classList.add("fab", "fa-wordpress");
                    jsIco.classList.add("fab", "fa-js-square");
                    domImg.classList.add("nounImg");
                    axiosImg.classList.add("axiosImg");
                    reactIco.classList.add("fab", "fa-react");

    // set text content
    img.src = projectObj.img;
    projectName.textContent = projectObj.name;
    projectType.textContent = projectObj.type;
    
    visit.style.display = "flex";
    visit.style.alignItems = "baseline";
    visit.href = projectObj.visit;
    visitButton.textContent = ">";
    visitText.textContent = " VISIT SITE";
    
    view.style.display = "flex";
    view.style.alignItems = "baseline";
    view.href = projectObj.view;
    viewText.textContent = " VIEW CODE";
    
    descriptor.textContent = projectObj.desc;
    tech.style.display = "flex";
    tech.style.flexDirection = "column";

    domImg.src = "img/noun_DOM_13029.svg";
    domImg.style.verticalAlign = "middle";
    axiosImg.src = "img/axios Page 1.svg";
    axiosImg.style.verticalAlign = "middle";

    htmlIco.title = "HTML5";
    cssIco.title = "CSS3";
    lessIco.title = "LESS";
    wpIco.title = "Wordpress";
    jsIco.title = "JavaScript";
    domImg.title = "DOM";
    axiosImg.title = "axios";
    reactIco.title = "React";

    // tech stack icons

    const stackArr = projectObj.stack;

    if (stackArr.includes("html")) {
        // console.log(`${projectObj.name} includes html`);
        tech.appendChild(htmlIco);
    };
    if (stackArr.includes("css")) {
        // console.log(`${projectObj.name} includes css`);
        tech.appendChild(cssIco);
    };
    if (stackArr.includes("less")) {
        // console.log(`${projectObj.name} includes less`);
        tech.appendChild(lessIco);
    };
    if (stackArr.includes("wp")) {
        // console.log(`${projectObj.name} includes wp`);
        tech.appendChild(wpIco);
    };
    if (stackArr.includes("js")) {
        // console.log(`${projectObj.name} includes js`);
        tech.appendChild(jsIco);
    };
    if (stackArr.includes("dom")) {
        // console.log(`${projectObj.name} includes dom`);
        tech.appendChild(domIco);
        domIco.appendChild(domImg);
    };
    if (stackArr.includes("axios")) {
        // console.log(`${projectObj.name} includes axios`);
        tech.appendChild(axiosIco);
        axiosIco.appendChild(axiosImg);
    };
    if (stackArr.includes("react")) {
        // console.log(`${projectObj.name} includes react`);
        tech.appendChild(reactIco);
    };

    return container;
}

// console.log(featuredProjects[0][img][name][visit][view][desc]);
// console.log(featuredProjects[0]);
// console.log(featuredProjects[0].img);
// console.log(featuredProjects[0].name);
// console.log(featuredProjects[0].visit);
// console.log(featuredProjects[0].view);
// console.log(featuredProjects[0].desc);

/*
img.src
projectName.textContent
visit.href
view.href
descriptor.textContent

let featuredProjects = [
    {img: "img/blog.jpg";}
]
*/


/*

font awesome: html, css, less, js, wp
<i title="HTML5" class="fab fa-html5"></i>
<i title="CSS3" class="fab fa-css3-alt"></i>
<i title="LESS" class="fab fa-less"></i>
<i title="Wordpress" class="fab fa-wordpress"></i>
<i title="JavaScript" class="fab fa-js-square"></i>

noun: dom
<img class="nounImg" title="DOM" src="img/noun_DOM_13029.svg">

local: axios
<img class="axiosImg" title="axios" src="img/axios Page 1.svg">

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