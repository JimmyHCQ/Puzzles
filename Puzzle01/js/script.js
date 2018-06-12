fetch('/js/json/puzzle.json')
  .then(function(puzzle){
    return puzzle.json();
  })
  .then(function(puzzleJSON){
    puzzle=puzzleJSON;
  });

var currentWord = 0;
var currentButton = 0;
var currentBox = 0;

function start(){
  enigma=puzzle.words[currentWord];
  for (i=0;i < enigma.letters.length;i++) {
    letter=word.letters[i].letter;
      document.getElementById("divButton").innerHTML += "<button id='button" + i + "' onclick=\"selectedButton='" + i + "',selectedLetter='"+letter+"', addLetter()\">" + word.letters[i].letter + "</button>";
  }
}

function addLetter() {
  document.getElementById("button" + selectedButton + "").style.opacity = "0.25";
  document.getElementById("button" + selectedButton + "").style.pointerEvents = "none";
  box = document.getElementById("divBox");
  console.log(selectedLetter);
  box.innerHTML += selectedLetter;
  console.log(box.innerHTML);
  okWord = wordsJSON.words[currentWord].word;
  if (box.innerHTML.length == okWord.length) {
    check();
  }
}

function check() {
  box = document.getElementById("divBox");
  if (box.innerHTML == okWord) {
   document.querySelector('.containerPuzzle').style.background = "#00FF00";
  }
  else {
    document.querySelector('.containerPuzzle').style.background = "#FF0000";
  }
}
