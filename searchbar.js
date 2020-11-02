
var searchbar = document.getElementById("searchbar");

searchbar.addEventListener('input', searchBarUpdate);


var hasBeenBigger = false;

function searchBarUpdate(e) {
  openSearchBar(e);
  checkElements(searchbar.value.toLowerCase())
}

function openSearchBar(e) {
  if (searchbar.value.length > 0) {
    if (searchbar.classList.contains("starting-searchbar")) {
      searchbar.classList.remove("starting-searchbar");
    }
    if (searchbar.classList.contains("searchbar-small")) {
      searchbar.classList.remove("searchbar-small");
    }
    searchbar.classList.add("searchbar-bigger");
    hasBeenBigger = true;
  }
  if (searchbar.value.length == 0 && hasBeenBigger) {
    searchbar.classList.remove("searchbar-bigger");
    searchbar.classList.add("searchbar-small");
  }
}

var searchTerms = ["Test", "LetterA","Foo","Foe","LongWord","Word with Spaces", "123 Numbers", "ç accents"];

function checkElements(search) {
  if (search.length > 1) {
    let results = [];
    for (let i = 0; i < searchTerms.length; i++) {
      let keywords = search.split(" ");
      for (let j = 0; j < keywords.length; j++) {
        console.log(searchTerms);
        console.log(i);
        console.log(searchTerms[i]);
        if (searchTerms[i].toLowerCase().includes(keywords[j])) {
          results.push(searchTerms[i]);
          break;
        }
      }
      
    }
    let htmlResults = "";
    for (let k = 0; k < results.length; k++) {
      htmlResults += "<li><span>" + results[k] + "</span></li>";
    }
    document.getElementById("search-results").innerHTML = htmlResults;
    
  }
}
