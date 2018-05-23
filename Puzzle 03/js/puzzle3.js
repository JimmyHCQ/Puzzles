var box1 = document.getElementById('puzzle1');
var box2 = document.getElementById('puzzle2');
var box3 = document.getElementById('puzzle3');
var box4 = document.getElementById('puzzle4');

function put() {
  nuts.style.opacity = "0.25";
  nuts.style.pointerEvents = "none";
  if(box1.innerHTML == ""){
    box1.innerHTML = letter;
  }
  else if(box2.innerHTML == ""){
    box2.innerHTML = letter;
  }
  else if(box3.innerHTML == ""){
    box3.innerHTML = letter;
  }
  else if(box4.innerHTML == ""){
    box4.innerHTML = letter;
    confirm();
  }
}

function confirm() {
  if (box1.innerHTML == "B" && box2.innerHTML == "I" && box3.innerHTML == "T" && box4.innerHTML == "E") {
    document.getElementById('section').style.background = "green";
  }
  else{
    document.getElementById('section').style.background = "red";
  }
}

function reset() {
  box1.innerHTML = "";
  box2.innerHTML = "";
  box3.innerHTML = "";
  box4.innerHTML = "";
  document.getElementById('section').style.background = "grey"
  document.getElementById('letterB').style.opacity = "1";
  document.getElementById('letterI').style.opacity = "1";
  document.getElementById('letterT').style.opacity = "1";
  document.getElementById('letterE').style.opacity = "1";
  document.getElementById('letterB').style.pointerEvents = "visible";
  document.getElementById('letterI').style.pointerEvents = "visible";
  document.getElementById('letterT').style.pointerEvents = "visible";
  document.getElementById('letterE').style.pointerEvents = "visible";
}
