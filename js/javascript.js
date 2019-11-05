function veranderKleur() {
  var mijnProject = document.getElementById("project2");
  if (mijnProject) {
    document.getElementById("project2").style.backgroundColor = "blue";
  } else if (mijnProject == "blue") {
    document.getElementById("project2").style.backgroundColor = "red";
  }
}
