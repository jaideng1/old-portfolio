
var links = {
  
};

function init() {
  loadProjects();
  fadeInLinks();
}

function fadeInLinks() {
  console.log("fade in links called")
  setTimeout(function() {
    console.log("starting the start of fade in")
    let linkElements = document.querySelector("#social-links").children;
    console.log(linkElements.length)
    
    for (let j = 0; j < linkElements.length; j++) {
      console.log("linkElements element: " + j)
      for (let i = 0; i < 100; i++) {
        console.log("waiting " + ((i + 1) * 10) + (j * 250))
        setTimeout(() => {
          console.log("setting opacity to " + ((i + 1) * 100))
          linkElements[j].style = "opacity: " + ((i + 1) / 100) + ";";
        }, ((i + 1) * 10) + (j * 250));
      }
    }
    
  }, 750);
}

function loadProjects() {
  
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
