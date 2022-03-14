
function myFunction() {
    var a = document.getElementById("NavBar");
    if (a.className === "center") {
        a.className += " responsive";
    } else {
        a.className = "center";
    }
}