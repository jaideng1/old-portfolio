
const inDevelopment = true;

var strHTML = "";
if (inDevelopment) {
    strHTML = document.querySelector('body').innerHTML;
    document.querySelector('body').innerHTML = "<h2>Sorry!</h2><br/><h3>The website is still in development.<br/><a href=\"https://github.com/CBlockSurprise\">To GitHub Page</a></h3>";
}
