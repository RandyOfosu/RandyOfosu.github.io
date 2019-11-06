function veranderKleur() {
  var mijnProject = document.getElementById("project2");
  if (mijnProject.style.backgroundColor == "blue") {
    document.getElementById("project2").style.backgroundColor = "red";
  } else {
    document.getElementById("project2").style.backgroundColor = "blue";
  }
}
var d = new Date();
document.getElementById("datum").innerHTML = d;
