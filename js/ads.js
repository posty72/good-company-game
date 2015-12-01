// By Josh Post for Mediaworks Interactive, 2014

var globalID;
var adNum;

var startAd = function(){

	if(level === 1) {

	} else if(level === maxLevel) {
		return gameWon();
	}
	
	adNum = Math.floor(Math.random() * 3) + 1;

	adDestroyed = false;
	startTouches();

	if(lives === 0) {
		return gameOver();
	}

	var controlX = Math.floor(Math.random() * 3);
	var controlY = Math.floor(Math.random() * 3);

	if(controlX === 0) {
		startX = -150;
	} else if(controlX === 1) {
		startX = width;
	} else {
		startX = 512 - (158 / 2);
	}

	if(controlY === 0) {
		startY = -150;
	} else {
		startY = 300;
	}

	if(startX > 0 && startX < width) {
		startY = -150;
	}

	var centerX = (158 / 2) + startX;
	var centerY = (152 / 2) + startY;
	
	touchesOn = true;
	globalID = requestAnimationFrame(drawAds(controlX, controlY, startX,startY, speed, centerX, centerY));
}


var drawAds = function(controlX, controlY, startX, startY, speed, centerX, centerY) {

	var opacity = 1;
	if(adDestroyed === false) {
		var adImg = new Image();
			adImg.src = 'images/ad'+adNum+'.png';
		adImg.onload = function(){

			//console.log(startX, startY);
			adX = startX;
			adY = startY;

			if(adDestroyed === true) {
				// From Top
				if(startX === 433 && startY+152 < 339) {
					startY = startY - speed;
				// From Left
				} else if(startX < 418-159 && startY === 300) {
					startX = startX + speed;
				// From Right
				} else if(startX > 512+95 && startY === 300) {
					startX = startX + speed;
				// From Right-Top
				} else if(startX > 512+95 && startY < 300) {
					startX = startX + speed;
					startY = startY - speed;
				// From Left-Top
				} else if(startX < 512-95-159 && startY < 300) {
					startX = startX - speed;
					startY = startY - speed;
				}
			} else {
				// From Top
				if(startX === 433 && startY+152 < 339) {
					startY = startY + speed;
				// From Left
				} else if(startX < 418-159 && startY === 300) {
					startX = startX + speed;
				// From Right
				} else if(startX > 512+95 && startY === 300) {
					startX = startX - speed;
				// From Right-Top
				} else if(startX > 512+95 && startY < 300) {
					startX = startX - speed;
					startY = startY + speed;
				// From Left-Top
				} else if(startX < 512-95-159 && startY < 300) {
					startX = startX + speed;
					startY = startY + speed;
				} else {
					loseLife(function(){
						startAd();
					});
					return destroyAd(false);
				}
			}

			context2.clearRect(0,0,width,height);

			context2.drawImage(adImg, 0, 0, 159, 152, startX, startY, 159, 152);

			setTimeout(function(){
				if(adDestroyed === false && level < maxLevel) {
					globalID = requestAnimationFrame(drawAds(controlX, controlY, startX, startY, speed, centerX, centerY));	
				}
			}, 1000 / fps);
		}
	}
}


var destroyAd = function(i) {
	adDestroyed = true;
	touchesOn = false;
	cancelAnimationFrame(globalID);
	
	if(i === true) {
		drawDestroyedAd('cloud',adX,adY);
		speed = speed + (origSpeed / 2);
		level++;
		$('.level').html('Level: <span>'+level+'</span>/'+maxLevel);

		setTimeout(function(){
				startAd();
		}, 600);
	} else {
		if(level != maxLevel) {
			drawDestroyedAd('broken',adX,adY);
		}
	}
}

var drawDestroyedAd = function(state,x,y,callback){
	var destroyedImg = new Image();
	destroyedImg.src = (state === 'broken') ? 'images/broken'+adNum+'.png' : 'images/cloud.png';
	destroyedImg.onload = function(){
		context2.clearRect(0,0,width,height);
		context2.drawImage(destroyedImg, 0, 0, 159, 152, x, y, 159, 152);
		//alert(x+ ' ' +y)
	}
}


