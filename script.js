
const inDevelopment = false;
var mainContent = "";
var frame = 0;
var inIntro = true;

//preload
let cmdFontRegular;
function preload() {
  cmdFontRegular = loadFont('assets/Source_Code_Pro/SourceCodePro-Regular.ttf');
}

const WIDTH = window.innerWidth - 20;
const HEIGHT = window.innerHeight - 20;

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
    createCanvas(WIDTH, HEIGHT);
}


let introStorage = {
    text: "",
    displayTextBar: true,
};

let blacklistKeys = [
    "CapsLock",
    "Shift",
    "Tab",
    "ArrowLeft",
    "ArrowUp",
    "ArrowDown",
    "ArrowRight",
    "Meta",
    "Alt",
    "Control",
    "F1",
    "F2",
    "F3",
    "F4",
    "F5",
    "F6",
    "F7",
    "F8",
    "F9",
    "F10",
    "F11",
    "F12",
    "Escape"
];

function draw() {
    if (inIntro) {
        background(0);
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
        textFont(cmdFontRegular);
        stroke(255);
        fill(255);
        text("> " + introStorage.text + textbar, 50, 50);
    }
}

document.onkeydown = function(e) {
    var key = e.key;
    
    if (inIntro) {
        if (blacklistKeys.includes(key)) {
            return;
        }
        if (key == "Backspace") {
            if (introStorage.text.split('').length > 0) {
                let temptxt = introStorage.text.split('');
                temptxt.pop();
                introStorage.text = temptxt.join('');
            }
            return;
        }
        if (key == "Enter") {
            return;
        }
        introStorage.text += key;
    }
};
