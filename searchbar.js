
var searchbar = document.getElementById("searchbar");

searchbar.addEventListener('input', openSearchBar);

function openSearchBar(e) {
  if (e.target.value.length > 0) {
    document.href = "/search";
  }
}
