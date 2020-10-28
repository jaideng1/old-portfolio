
var searchbar = document.getElementById("searchbar");

searchbar.addEventListener('input', openSearchBar);

function openSearchBar(e) {
  console.log("Activated");
  if (searchbar.value.length > 0) {
    console.log("Activated 2");
    document.href = "/search";
  }
}
