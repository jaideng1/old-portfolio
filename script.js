
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
    createCanvas(document.body.clientWidth, document.body.clientHeight);
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
        textSize(30)
        text("> " + textbar, 50, 50);
    }
}

document.onkeypress = function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charCode);
    alert(charStr);
};
