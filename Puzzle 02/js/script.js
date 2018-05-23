var box1 = document.getElementById('puzzle1');
var box2 = document.getElementById('puzzle2');
var box3 = document.getElementById('puzzle3');
var box4 = document.getElementById('puzzle4');
var resetB = document.getElementById('resetB');
var valid = 0;

// var letterC = document.getElementById('letterC');
// var letterO = document.getElementById('letterO');
// var letterD = document.getElementById('letterD');
// var letterE = document.getElementById('letterE');


function put() {
  Sb.style.opacity = "0.25";
  Sb.style.pointerEvents = "none";
  if (box1.innerHTML == "") {
    box1.innerHTML = Le;
  }
  else if (box2.innerHTML == "") {
      box2.innerHTML = Le;
  }
  else if (box3.innerHTML == "") {
      box3.innerHTML = Le;
  }
  else if (box4.innerHTML == "") {
      box4.innerHTML = Le;
  }
}
