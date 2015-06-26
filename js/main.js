window.onload = function() {
  var score = 0;
  var lastTop = "";
  var newLetter = null;
  var speed = 100;
  var speedManager = 0;

  document.addEventListener("keypress", function(e) {
    var key = String.fromCharCode((e.keyCode ? e.keyCode : e.charCode));
    var allLetters = Array.prototype.slice.call(document.getElementsByTagName('span'));
    var allLettersTexts = allLetters.filter(function(letter){ return letter.innerHTML === key; })

    if ( allLettersTexts[0] ) {
      score = score +  1;
      speedManager = speedManager + 1;
      if ( speedManager == 10 ) {
        debugger
        speedManager = 0;
        speed = speed - 10;
      }

      allLettersTexts[0].remove();
      var points = document.getElementById("points"), pointsParent = points.parentNode;
      var newPoints = document.createElement("span");
      newPoints.id = "points";
      newPoints.className ="typography score";
      newPoints.innerHTML = score;

      pointsParent.replaceChild(newPoints, points);
    }
  });

  function moveLetter() {
    letters = document.getElementsByClassName("letter");
    for(var i = 0; i < letters.length; i++) {
      letters[i].style.left = parseInt(letters[i].style.left)-1+'px';
      if(letters[i].style.left =='-75px'){
        alert("Game over");
        location.reload();
      }
    }
    setTimeout(moveLetter,speed);
  }

  setInterval(function() {
    var number = letter ();
    var top = row (lastTop);
    lastTop = top;

    var container = document.getElementById("container");
    var startPos = window.innerWidth;

    newLetter = document.createElement("span");
    newLetter.className = "typography letter";
    newLetter.style.top = top;
    newLetter.style.left = startPos +'px';
    newLetter.innerHTML = String.fromCharCode(number);

    container.appendChild(newLetter);
    moveLetter();
  }, 1000);
};

function letter () {
	var number = 1 + Math.floor(Math.random() * 122);
  return ((number > 96 && number < 122) || (number > 64 && number < 91)) ? number : letter();
}

function row ( lastTop) {
  var tops = ['15%','30%','45%','60%','75%']
  var top = tops[Math.floor(Math.random()*tops.length)];
  //return ( top != lastTop ) ? top : row( lastTop );
  return top;
}
