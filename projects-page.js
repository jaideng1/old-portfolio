var lng = "";
var prjcts = document.getElementsByClassName("projects")[0];

function loadProjects() {
  
  let results = [];
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].language == lng) {
      results.push(projects[i]);
    }
  }
  let htmlResults = "<center>";
  for (let k = 0; k < results.length; k += 2) {
    //results[k]
    htmlResults += '<div class="row align-items-center d-flex project-row">';
    //if (k > results.length) {
      htmlResults +=     '<div class="col-sm-6 inverse-project">';
      try {
        htmlResults +=       '<h3><a href="' + results[k].link + '" target="_blank">' + results[k].title + '</a></h3>';
        htmlResults +=       '<p>' + results[k].description + '</p>';
        htmlResults +=       '<p>Tags: ' + results[k].tags.join(", ") + '</p>';
      } catch(e) {}
      htmlResults +=     '</div>';
    //}
    //console.log((k + 1) + " - " + results.length)
    //if (k + 1 > results.length) {
      htmlResults +=     '<div class="col-sm-6 inverse-project">';
      try {
        htmlResults +=       '<h3><a href="' + results[k + 1].link + '" target="_blank">' + results[k + 1].title + '</a></h3>';
        htmlResults +=       '<p>' + results[k + 1].description + '</p>';
        htmlResults +=       '<p>Tags: ' + results[k + 1].tags.join(", ") + '</p>';
      } catch(e) {}

      htmlResults +=     '</div>';
    //}
    htmlResults +=   '</center>';
    prjcts = htmlResults;
}

function setLngAndRun(tol) {
   lng = tol;
   loadProjects();
}
