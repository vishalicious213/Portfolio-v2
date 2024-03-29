// project data ----------------------------------------------------
// js_dom.html
const jsDomProjects = [
    



    {img: "img/react-wars.jpg", name: "React Wars", type: "Sprint Challenge V: React", visit: "https://vish213-reactwars.netlify.com", view: "https://github.com/vishalicious213/6.5-Sprint-Challenge-React-Wars", desc: "Used axios to access the Star Wars API, then used React components, state and side effects to render information about Star Wars characters. Imported and rendered images separately.", stack: ["js", "react", "axios"]},
    {img: "img/american-football.jpg", name: "Football Scoreboard", type: "React Components & Component State", visit: "https://vish213-scoreboard.netlify.com/", view: "https://github.com/vishalicious213/6.1-react-american-football-scoreboard-v2", desc: "Football scoreboard: Two buttons per team - one increments score by 3 points (field goal) and the other by 7 (touchdown + extra point). Demonstrates React components, state and click handlers.", stack: ["js", "react"]},
    {img: "img/lambda-times.jpg", name: "Lambda Times", type: "Sprint Challenge IV: Applied JavaScript", visit: "https://vishalicious213.github.io/5.5-Sprint-Challenge-Applied-Javascript-v2/", view: "https://github.com/vishalicious213/5.5-Sprint-Challenge-Applied-Javascript-v2", desc: "This project tied together the DOM, components, axios and HTTP get requests through JavaScript. Article data was retrieved from an API and required manipulation of nested objects and arrays.", stack: ["js", "dom", "axios"]},
    {img: "img/github-usercard.jpg", name: "GitHub Followers", type: "Components II", visit: "https://vishalicious213.github.io/5.4-github-usercard-v2/", view: "https://github.com/vishalicious213/5.4-github-usercard-v2", desc: "Accessed the GitHub API using the axios JavaScript library and built a component that creates social cards of my GitHub followers based on returned data.", stack: ["js", "dom", "axios"]},
    {img: "img/newsfeed.jpg", name: "Lambda School Newsfeed", type: "Components I", visit: "https://vish213-newsfeed.netlify.com/", view: "https://github.com/vishalicious213/5.3-Newsfeed-Components-v2", desc: "Created component to assemble and place articles using JavaScript and the DOM. Button expands/contracts each article. Did same with menu.", stack: ["js", "dom"]},
    {img: "img/fun-bus-dom.jpg", name: "Fun Bus II", type: "DOM II - Event Exploration", visit: "https://vishalicious213.github.io/5.2-DOM-IIv2/", view: "https://github.com/vishalicious213/5.2-DOM-IIv2", desc: "DOM II utilized the Document Object Model and JavaScript to rebuild the Fun Bus website. Interactive elements include mouseover, click, double-click, scroll effects and more.", stack: ["js", "dom"]},    
]

// {img: "#", name: "#", visit: "#", view: "#", desc: "#"},

jsDomAnchor = document.querySelector(".jsDomWorks");
jsDomProjects.forEach(project => {
    // console.log(project);
    jsDomAnchor.appendChild(projectCard(project));
})