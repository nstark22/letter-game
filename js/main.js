$(document).ready(function() {
  var score = 0;
  var lastTop = "";

  $(this).bind('keypress', function(e) {
    var key = String.fromCharCode((e.keyCode ? e.keyCode : e.charCode));
    if ( $('span').filter(function(){ return $(this).text() == key; })[0] ) {
      score = score +  1;
      $('span').filter(function(){ return $(this).text() == key; })[0].remove();
      $("#points").replaceWith( '<span id="points" class="typography score">'+ score +"</span>" )
    }      
  });

  function moveletter(){
    $( ".letter" ).css('left', startPos);
    $( ".letter" ).animate({left: -75}, 7000, 'linear') 
  };

  var screenWidth = $(document).width();
  var startPos = screenWidth;
 
  setInterval(function() {
    var number = letter ();
    var top = row (lastTop);
    lastTop = top;
    $( ".container" ).append( '<span class="typography letter" style="top:'+ top +'">'+ String.fromCharCode(number) +"</span>" );
    moveletter();
  }, 1000);

  setInterval(function() {
    if ($( ".letter" ).css('left') == "-75px") {
      alert("Game over");
      location.reload();
    }
    // a = $.map( $( ".letter" ), function(  value, index ) {
    //    return $(value).css('left');
    //  });
    // if ( $.inArray("-75px", a) > -1  ) {

    //   alert("Game over");
    //   location.reload();
    // }
  }, 500);
});

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
