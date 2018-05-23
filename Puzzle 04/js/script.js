var wordsJSON = {
  "words":[
    {
    "id":1,
    "word":"CODE",
    "letters":[
        {"id":1,"letter":"O"},
        {"id":2,"letter":"C"},
        {"id":3,"letter":"D"},
        {"id":4,"letter":"E"}
      ]
    },
    {
    "id":2,
    "word":"BONJOUR",
    "letters":[
        {"id":1,"letter":"B"},
        {"id":2,"letter":"O"},
        {"id":3,"letter":"N"},
        {"id":4,"letter":"J"},
        {"id":5,"letter":"O"},
        {"id":6,"letter":"U"},
        {"id":7,"letter":"R"}
      ]
    }
  ]
}

var currentWord = 0;
var currentButton = 0;
var currentBox = 0;

  function start(){
    word=wordsJSON.words[currentWord];
    for (i=0;i < word.letters.length;i++) {
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
