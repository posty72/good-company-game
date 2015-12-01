// By Josh Post for Mediaworks Interactive, 2014

/*
if ( navigator.userAgent.indexOf('iPad') == -1 ) {
  	alert('This game is designed for iPads. Other devices may not work as intended.');
  } else {
	if(window.innerHeight > window.innerWidth){
		alert("Please use Landscape!");
	}
}
*/


$('canvas').attr('width', width);
$('canvas').attr('height', height);

var setup = function(callback){

	$('canvas').show();

	canvas1.style.webkitFilter = "blur(3px)";

	$('.loading-countdown').text(countdown)
	drawJames('normal');

	var intervalID = setInterval(function(){
		countdown--;
		if(countdown != 0) {
			$('.loading-countdown').text(countdown);
		} else { 
			clearInterval(intervalID);
			callback();
		}
	}, 1000);
}

var startGame = function(){
	$('.welcome-screen').hide();
	$('.gameover-screen').hide();
	$('.won').hide();
	$('.loading-screen').show();
	$('.level').show();
	resetValues();
	$('.level').html('Level: <span>'+level+'</span>/'+maxLevel);
	setup(function(){
		$(canvas1).attr('style','');
		$('canvas').show();
		$('.loading-screen').hide();
		drawLives(lives);
		drawJames('normal');
		startTouches();
		startAd();
	});
}

var gameOver = function(){
	setTimeout(function(){
		canvas1.style.webkitFilter = "blur(3px)";
		context2.clearRect(0,0,1024,668);
		$('.gameover-screen').show();
	}, 1500);
}

var resetValues = function(){
	countdown = origCountdown;
	lives = origLives;
	speed = origSpeed;
	countdown = origCountdown;
	level = origLevel;
	maxLevel = origMaxLevel;
}

var gameWon = function(){
	context2.clearRect(0,0,1024,668);
	drawJames('success');
	setTimeout(function(){
		canvas1.style.webkitFilter = "blur(3px)";
		$('.won').show();
	}, 2000);
	destroyAd(false);

};


$('.restart').on('click', function(evt){
	startGame();
	evt.preventDefault();
});

//startGame();