//
// Made by Jaideng1
//


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
    document.body.style = "background-color: rgb(0,0,0);"
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
    displayTextBar: true, //for blinking
    ableToType: true,
    showTextBar: true, //show textbar with typing thing
    textUnder: "",
    timerToClear: setTimeout(function() {
      introStorage.textUnder = "";
    }, 1),
};
let bckColor = {r: 0, g: 0, b: 0};

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
        background(bckColor.r, bckColor.g, bckColor.b);
        frame++;
        let textbar = "";
        if (frame % 120 == 0) {
            introStorage.displayTextBar = true;
        } else if (frame % 120 == 60) {
            introStorage.displayTextBar = false;
        }
        if (introStorage.displayTextBar && introStorage.text.length < 40) {
            textbar = "_";
        } else if (introStorage.displayTextBar) {
            textbar = "■";
        }
        textSize(30)
        textFont(cmdFontRegular);
        stroke(255);
        fill(255);
        text("WebOS v1.0.3, made by jaideng1. Type in 'help', or 'pass'.", 50, 50);
      
        if (introStorage.showTextBar) {
          text("webos:~ jaideng1$ " + introStorage.text + textbar, 50, 130);
        } else {
          text("webos:~ jaideng1$ " + introStorage.text, 50, 130);
        }
        
        text(introStorage.textUnder, 50, 210);
        
    }
}

//haha, laugh at me all you want. i know this is unsecure alright? i just want a tiny bit of protection.
const PASS_TO_WEBSITE = " J41D3NGI";

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
        if (key == "Enter" && introStorage.ableToType) {
            if (introStorage.text == "") {
              return;
            }
            let bp = introStorage.text.split('');
            if (bp[0] == "p" && bp[1] == "a" && bp[2] == "s" && bp[3] == "s") {
              let p = introStorage.text.replace('pass', '');
              if (p == PASS_TO_WEBSITE) {
                //display text
                introStorage.ableToType = false;
                introStorage.showTextBar = false;
                introStorage.textUnder = "Password correct.";
                setTimeout(function() {
                  let addonTextBySlow = " Joining";
                  let onAT = 0;
                  for (let i = 0; i < addonTextBySlow.split('').length; i++) {
                    setTimeout(function() {
                      introStorage.textUnder += addonTextBySlow.split('')[onAT];
                      onAT += 1;
                    }, (2000/addonTextBySlow.split('').length) * (i+1));
                  }
                  for (let i = 0; i < 256; i++) {
                    setTimeout(function() {
                      bckColor.r += 1;
                      bckColor.g += 1;
                      bckColor.b += 1;
                    }, 2500 + ((5000-2500) * (i + 1)));
                  }
                  setTimeout(function() {
                    introStorage.textUnder += ".";
                  }, 2900);
                  setTimeout(function() {
                    introStorage.textUnder += ".";
                  }, 3750);
                  setTimeout(function() {
                    introStorage.textUnder += ".";
                  }, 5000);
                }, 1200)
                
                /*
                Password correct.
                <wait 750 milliseconds>
                Joining <250mi> . <250mi> . <250mi> . (in this time, background fades to white)
                <do join animation>
                (mouse comes out of corner, "clicks" on bottom right, and "drags" over to top left, as if it's selecting something in an image)
                (delete key sound plays, as the white thing dissapears, making windows computer appear)
                (mouse goes to finder, opens it, and finder window appears)
                (clicks on "reboot_to_website.exe", and then screen goes to black, turns back on after 5 seconds, and shows window reboot thing.)
                (after 5 seconds, it stops, and fades to white)
                (reveal the website)
                */
              } else {
                //display message under
                try {
                  introStorage.timerToClear.clearTimeout();
                } catch (e) {
                }
                introStorage.textUnder = "Wrong passcode."
                introStorage.timerToClear = setTimeout(function() {
                  introStorage.textUnder = "";
                }, 3000);
              }
            } else if (introStorage.text == "help") {
              //display message under
              try {
                introStorage.timerToClear.clearTimeout();
              } catch (e) {
              }
              
              introStorage.textUnder = "Enter passcode to website. EXAMPLE: 'pass password'."
              introStorage.timerToClear = setTimeout(function() {
                introStorage.textUnder = "";
              }, 4000);
            } else {
              try {
                introStorage.timerToClear.clearTimeout();
              } catch (e) {
              }
              introStorage.textUnder = "Command has either been disabled or does not exist.";
              introStorage.timerToClear = setTimeout(function() {
                introStorage.textUnder = "";
              }, 3000);
            }
            introStorage.text = "";
            return;
        }
        if (introStorage.ableToType) {
            if (introStorage.text.length < 40) {
              introStorage.text += key;
            }
            
        }
        
    }
};
