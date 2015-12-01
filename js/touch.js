// By Josh Post for Mediaworks Interactive, 2014
  
var touchRadius;
   
var startTouches = function(){
	if(Modernizr.touch) {
    	canvas2.addEventListener('touchstart', doTouchStart, false);
	} else {
    	canvas2.addEventListener('mousedown', doMouseStart, false);
	}
}

function doTouchStart(evt) {
    evt.preventDefault();

    touch_x = evt.targetTouches[0].pageX;
    touch_y = evt.targetTouches[0].pageY;
	
	if(touch_x < adX+152 && touch_x > adX && touch_y < adY+159 && touch_y > adY && touchesOn === true) {
		return destroyAd(true);
	}
	
}

function doMouseStart(evt) {
    evt.preventDefault();
	return destroyAd(true);
}


document.body.addEventListener('touchmove', function(event) {
  event.preventDefault();
}, false);

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }
};

function handleMouseDown(evt) {
    destroyAd(true);
};