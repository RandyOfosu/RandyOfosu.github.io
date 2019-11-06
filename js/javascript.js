function veranderKleur() {
  var mijnProject = document.getElementById("project2");
  if (mijnProject.style.backgroundColor == "") {
    document.getElementById("project2").style.backgroundColor = "red";
    document.getElementById("project2").style.fontSize = "20px";
  } else if (mijnProject.style.backgroundColor == "red") {
    document.getElementById("project2").style.backgroundColor = "blue";
    document.getElementById("project2").style.height = "300px";
  } else if (mijnProject.style.backgroundColor == "blue") {
    document.getElementById("project2").style.width = "525px";
    document.getElementById("project2").style.backgroundColor = "green";
  } else if (mijnProject.style.backgroundColor == "green") {
    document.getElementById("project2").style.borderRadius = "100%";
    document.getElementById("project2").style.height = "500px";
    document.getElementById("project2").style.backgroundColor = "purple";
  } else {
    document.getElementById("project2").style.backgroundColor = "";
    document.getElementById("project2").style.borderRadius = "";
    document.getElementById("project2").style.width = "450px";
    document.getElementById("project2").style.height = "500px";
    document.getElementById("project2").style.fontSize = "";
  }
}

var x = document.getElementById("likeButton1");

function activeLike() {
  if (x.style.backgroundColor == "") {
    document.getElementById("likeButton1").style.backgroundColor = "white";
    document.getElementById("likeButton1").style.color = "orange";
  } else {
    document.getElementById("likeButton1").style.backgroundColor = "";
    document.getElementById("likeButton1").style.color = "white";
  }
}

var d = new Date();
document.getElementById("datum").innerHTML = d;
