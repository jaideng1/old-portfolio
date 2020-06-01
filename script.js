
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
    text: "",
    displayTextBar: true,
};

function draw() {
    if (inIntro) {
        background(255);
        frame++;
        let textbar = "";
        if (frame % 120 == 0) {
            introStorage.displayTextBar = true;
        } else if (frame % 120 == 60) {
            introStorage.displayTextBar = false;
        }
        if (introStorage.displayTextBar) {
            textbar = "_";
        }
        textSize(30)
        text("> " + introStorage.text + textbar, 50, 50);
    }
}

document.onkeypress = function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    if (charCode == 8) {
        if (introStorage.text.split('').length > 0) {
            let temptxt = introStorage.text.split('');
            temptxt.pop();
            introStorage.text = temptxt.join('');
        }
    }
    var charStr = String.fromCharCode(charCode);
    if (inIntro) {
        introStorage.text += charStr;
    }
};
