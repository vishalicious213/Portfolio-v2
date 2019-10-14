// project data ----------------------------------------------------
// index.html
const featuredProjects = [
    {img: "img/github-usercard.jpg", name: "Components II", visit: "https://vishalicious213.github.io/5.4-github-usercard-v2/", view: "https://github.com/vishalicious213/5.4-github-usercard-v2", desc: "Accessed the GitHub API using the axios JavaScript library and built a component that creates social cards of my GitHub followers based on returned data.", stack: ["js", "dom", "axios"]},
    {img: "img/newsfeed.jpg", name: "Components I", visit: "https://vishalicious213.github.io/5.3-Newsfeed-Components-v2/", view: "https://github.com/vishalicious213/5.3-Newsfeed-Components-v2", desc: "Created component to assemble and place articles using JavaScript and the DOM. Button expands/contracts each article. Did same with menu.", stack: ["js", "dom"]},
    {img: "img/fun-bus-dom.jpg", name: "DOM II", visit: "https://vishalicious213.github.io/5.2-DOM-IIv2/", view: "https://github.com/vishalicious213/5.2-DOM-IIv2", desc: "DOM II utilized the Document Object Model and JavaScript to rebuild the Fun Bus website. Interactive elements include mouseover, click, double-click, scroll effects and more.", stack: ["js", "dom"]},
    {img: "img/potluck.jpg", name: "Build Week 1", visit: "https://vishalicious213.github.io/4.x-buildWeek1-Potluck-Planner/", view: "https://github.com/vishalicious213/4.x-buildWeek1-Potluck-Planner", desc: "A group project - I designed and implemented every aspect of the main website while teammates developed the application and back end. Two other designers' websites were linked as alternate 'themes' in the navigation.", stack: ["html", "css", "less"]},
    {img: "img/resume.jpg", name: "Preprocessing I", visit: "https://vishalicious213.github.io/2.3-Preprocessing-I/", view: "https://github.com/vishalicious213/2.3-Preprocessing-I", desc: "This simple, single-page resume made use of preprocessing, nesting, mixins and variables in LESS. Work history items benefit from mouse-over highlighting.", stack: ["html", "css", "less"]},
    {img: "img/blog.jpg", name: "Redo From Start", visit: "https://neophyte.home.blog/", view: "", desc: "My programming blog details my experience learning how to think like a programmer, grasp computer science concepts and, of course, tackling coding projects.", stack: ["html", "css", "wp"]}
]

// {img: "#", name: "#", visit: "#", view: "#", desc: "#"},

projectAnchor = document.querySelector(".featuredWorks");
featuredProjects.forEach(project => {
    // console.log(project);
    projectAnchor.appendChild(projectCard(project));
})
