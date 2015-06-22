$(document).ready(function() {
  var score = 0;
  $(this).bind('keypress', function(e) {
    var key = String.fromCharCode((e.keyCode ? e.keyCode : e.charCode));
    if ( $('span').filter(function(){ return $(this).text() == key; })[0] ) {
      score = score +  1;
      $('span').filter(function(){ return $(this).text() == key; })[0].remove();
      $("#points").replaceWith( '<span id="points" class="typography score">'+ score +"</span>" )
    }      
  });

  setInterval(function() {
    var number = letter ();
    var nrow = row ();
    $( ".container" ).append( '<span class="typography row-' + nrow +'">'+ String.fromCharCode(number) +"</span>" );
  },
  1000);

  function moveletter(){
    le = $('.row-1')
    lea = $('.row-2')
    leb = $('.row-3')
    lec = $('.row-4')
    led= $('.row-5')
    le.css('left', startPos);
    le.animate({left: -75}, 7000, 'linear')
    lea.css('left', startPos);
    lea.animate({left: -75}, 7000, 'linear')
    leb.css('left', startPos);
    leb.animate({left: -75}, 7000, 'linear')
    lec.css('left', startPos);
    lec.animate({left: -75}, 7000, 'linear')
    led.css('left', startPos);
    led.animate({left: -75}, 7000, 'linear')   
  };

  var screenWidth = $(document).width();
  var startPos = screenWidth;
  var le = $('.row-1')
  var lea = $('.row-2')
  var leb = $('.row-3')
  var lec = $('.row-4')
  var led = $('.row-5')
  moveletter();
  setInterval(function() {
    moveletter();
  }, 2000);

  setInterval(function() {
    if ( (le.css('left') == "-75px") || (lea.css('left') == "-75px") || (leb.css('left') == "-75px") || (lec.css('left') == "-75px") || (led.css('left') == "-75px") ) {
      alert("Game over");
       location.reload();
    }
  }, 500);
});

function letter () {
	var number = 1 + Math.floor(Math.random() * 122);
  return ((number > 96 && number < 122) || (number > 64 && number < 91)) ? number : letter();
}
function row () {
	return 1 + Math.floor(Math.random() * 5);
}
