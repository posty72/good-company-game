// By Josh Post for Mediaworks Interactive, 2014


var drawLives = function(livesLeft) {

	context1.clearRect(10,608,408,47);

	var posX = 100;
	var posY = (height);

	// Lives
	
	context1.font = "30px sans-serif";
	context1.fillText("Lives: ", 10, (posY - 25));
	

	for(var i=0;i<livesLeft;i++) {
		var livesImg = new Image();
		livesImg.src = 'images/life-icon.png';
		livesImg.onload = function(){
			context1.drawImage(livesImg, 0, 0, 39, 47, posX, (posY - 60), 39, 47);
			posX += 47;
		}
	}
}


var loseLife = function(callback) {
	lives -= 1;
	if(lives > 0) {
		drawJames('hit-'+lives);

		setTimeout(function(){
			drawJames('degrade-'+lives);
			callback();
		}, 1500);
	} else {
		drawJames('failure');
		callback();
	}

	drawLives(lives);
}