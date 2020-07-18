/*
@varibles
*/
var projects = [
  {
    title: "...",
    description: "what"
  },
  {
    title: "Eyetracker",
    description: "An eyetracker that runs on python. I originally wanted this to connected to Minecraft, but you have to have a good camera to run it."
  },
  {
    title: "..",
    description: "another one"
  },
];

/*
@init
*/
function init() {
  loadProjects();
  fadeInLinks();
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
        }, ((i + 1) * 10) + (j * 350));
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
    chosenProjects.push(randomNum);
  }
  
  let featuredProjects = document.getElementsByClassName("featured-project");
  for (let j = 0; j < chosenProjects.length; j++) {
    featuredProjects[j].children[0] = chosenProjects[j].title;
    featuredProjects[j].children[1] = chosenProjects[j].description;
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
