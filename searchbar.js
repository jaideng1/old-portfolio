
var searchbar = document.getElementById("searchbar");

searchbar.addEventListener('input', openSearchBar);

function openSearchBar(e) {
  if (searchbar.value.length > 0) {
    document.location.href = "/search.html";
  }
}
