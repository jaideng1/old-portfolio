
var links = {
  
};

function init() {
  loadProjects();
  fadeInLinks();
}

function fadeInLinks() {
  setTimeout(function() {
    let linkElements = document.querySelector("#social-links").children;
    
    for (let j = 0; j < linkElements[j]; j++) {
      for (let i = 0; i < 100; i++) {
        setTimeout(() => {
          linkElements[j].style = "opacity: " + ((i + 1) * 100) + ";";
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
