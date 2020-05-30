
const inDevelopment = false;
var mainContent = "";
var frame = 0;
var inIntro = true;

//setup
function setup() {
    
    if (inDevelopment) {
        strHTML = document.querySelector('#main-content').innerHTML;
        document.querySelector('#main-content').innerHTML = "<h2>Sorry!</h2><br/><h3>The website is still in development.<br/><a href=\"https://github.com/jaideng1\">To GitHub Page</a></h3>";
        document.querySelector('#main-content').style = "";
        return;
    }
    strHTML = document.querySelector('#main-content').innerHTML;
    document.querySelector('#main-content').innerHTML = "";
    createCanvas(document.clientWidth, document.clientHeight);
}

var WIDTH = document.clientWidth;
var HEIGHT = document.clientHeight;

let introStorage = {
    
};

function draw() {
    if (inIntro) {
        frame++;
        let textbar = "";
        if (frame % 180 < 90) {
            textbar = "▮";
        }
        textSize(document.clientHeight / 30)
        text("> " + textbar, document.clientWidth / 20, document.clientHeight / 20);
    }
}
