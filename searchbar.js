
var searchbar = document.getElementById("searchbar");

searchbar.addEventListener('input', openSearchBar);

var hasBeenBigger = false;

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

var searchTerms = ["Test", "Cock", "Ball", "PP", "Yes", "No", "verylongword"];

jQuery(document).ready(function($) {
        $("#searchbar").autocomplete({
            source: searchTerms,
            minLength:2,
            position: { offset:'-30 0' },  
//             select: function(event, ui ) { 
//                     goTo(ui.item.value);
//                     return false;
//             }        
    }); 
});
