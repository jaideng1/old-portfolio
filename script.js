/*
@varibles
*/
var projects = [
  //JS PROJECTS
  {
    title: "My Portfolio",
    link: "https://github.com/jaideng1/jaideng1.github.io/",
    description: "I mean, it's one of my projects. You can see the source of it by clicking on \"My Portfolio,\" right above this."
  },
  {
    title: "Circles Are Cool",
    link: "https://github.com/jaideng1/circles_are_cool",
    description: "Messing around with the properties of a circle, wanted to see what I could do with adjustable settings."
  },
  {
    title: "Newton's Fractal",
    link: "https://github.com/jaideng1/newtonsfractal",
    description: "With a bit of help, I recreated Newton's Fractal. There is some stuff that could of been improved (as in shading, ect), but I wasn't able to understand that part of the problem."
  },
  {
    title: "Cretaceous Period Project",
    link: "https://github.com/jaideng1/cretaceous-period-project",
    description: "A school project about the Cretaceous Period, a first attempt of trying to make a nice looking website. My porfolio is my second attempt, and it looks a lot better due to the things I learned from this project."
  },
  {
    title: "Math Cardgame",
    link: "https://github.com/jaideng1/math-cardgame",
    description: "A card game that I made for school (that's meant to be played online). The rules are a bit complicated though."
  },
  //PYTHON
  {
    title: "Eyetracker",
    link: "https://github.com/jaideng1/python-eyetracker",
    description: "An eyetracker that runs on python. I originally wanted this to connected to Minecraft, but you have to have a good camera to run it, which I don't have."
  },
  {
    title: "TicTacToe",
    link: "https://github.com/jaideng1/TicTacToe",
    description: "A project I made 2 years ago when I started getting into Python. Due to me being new to this language, I made 300 lines of checks to see if someone had won, and another 300 for the AI checks."
  },
  //JAVA
  {
    title: "Minecraft Capture the Flag",
    link: "https://github.com/jaideng1/minecraftctf",
    description: "A basic project for Minecraft. It's a WIP, but I would like to start over and make it better in the future."
  },
  {
    title: "Recreation of a Game",
    link: "https://jaideng1.github.io/java-projects/game-recreation.html",
    description: "I don't exactly have a title for this, but it's a work in progress. It's a recreation of a game in Minecraft that I play a lot. The code isn't public right now though."
  },
  //C#
  {
    title: "Data Crawler",
    link: "https://github.com/jaideng1/DataCrawler",
    description: "A project I made to crawl around the files in MacOS and pick out files with certain keywords in the title. It takes a really long time to run though."
  },
  {
    title: "C# Chatter",
    link: "https://github.com/jaideng1/chatwithc",
    description: "This is a program that connected with a webserver, and then you were able to chat with other people."
  },
  
];
/*
@init
*/
function init() {
  loadProjects();
  fadeInLinks();
  markName();
  loadYears();
}

/*
@markName
*/
var markNameTracker = {
  marked: "",
  unmarked: "jaiden g."
};
function markName() {
  //document.querySelector("#name").innerHTML = "";
  for (let i = 0; i < markNameTracker.unmarked.split('').length; i++) {
    setTimeout(() => {
      markNameTracker.marked += markNameTracker.unmarked.split('')[0];
      let changedUnmarked = markNameTracker.unmarked.split('');
      changedUnmarked[0] = "";
      markNameTracker.unmarked = changedUnmarked.join('');
      document.querySelector("#name").innerHTML = "<mark>" + markNameTracker.marked + "</mark>" + markNameTracker.unmarked;
    }, ((i + 1) * 85) + 240);
  }
}

/*
@loadYears
*/
function loadYears() {
  let date = new Date();
  let year = date.getFullYear();
  document.getElementById("years").textContent = "I've been coding for " + (year - 2014) + " years as of " + year + ".";
}

/*
@fadeInLinks
*/
function fadeInLinks() {
  setTimeout(function() {
    let linkElements = document.querySelector("#social-links").children;
    
    for (let j = 0; j < linkElements.length; j++) {
      for (let i = 0; i < 100; i++) {
        setTimeout(() => {
          linkElements[j].style = "opacity: " + ((i + 1) / 100) + ";";
        }, ((i + 1) * 10) + (j * 350) + 200);
      }
    }
    
  }, 750);
}

/*
@loadProjects
*/
function loadProjects() {
  let chosenProjects = [];
  let chosenNumbers = [];
  for (let i = 0; i < 3; i++) {
    let randomNum;
    do {
      randomNum = Math.floor(Math.random() * projects.length);
    } while (chosenNumbers.includes(randomNum))
    chosenNumbers.push(randomNum);
    chosenProjects.push(projects[randomNum]);
  }
  
  let featuredProjects = document.getElementsByClassName("featured-project");
  for (let j = 0; j < chosenProjects.length; j++) {
    featuredProjects[j].children[0].innerHTML = "<a href=\"" + chosenProjects[j].link + "\">"chosenProjects[j].title + "</a>";
    featuredProjects[j].children[1].innerHTML = chosenProjects[j].description;
  }
}


init();


/*
 @methods
*/
function clone(Obj) {
  let buf; // the cloned object
  if (Obj instanceof Array) {
    buf = []; // create an empty array
    var i = Obj.length;
    while (i --) {
      buf[i] = clone(Obj[i]); // recursively clone the elements
    }
    return buf;
  } else if (Obj instanceof Object) {
    buf = {}; // create an empty object
    for (const k in Obj) {
      if (obj.hasOwnProperty(k)) { // filter out another array's index
        buf[k] = clone(Obj[k]); // recursively clone the value
      }     
    }
    return buf;
  } else {
    return Obj;
  }
}
