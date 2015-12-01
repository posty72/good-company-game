// By Josh Post for Mediaworks Interactive, 2014

/* Game Settings */
// Change the game settings here
var lives = 3;
var speed = 4;
var countdown = 3;
var level = 1;
var maxLevel = 15;
var fps = 24;

/* Consistent Settings */
// Any values below WILL NOT change
var origLives = lives;
var origSpeed = speed;
var origCountdown = countdown;
var origLevel = level;
var origMaxLevel = maxLevel;

// Instantiate ad variables
var adX;
var adY;

// Instatiate canvases
var canvas1 = document.getElementById('canvas-1');
var canvas2 = document.getElementById('canvas-2');
var context1 = canvas1.getContext('2d');
var context2 = canvas2.getContext('2d');

var adDestroyed = false;
var touchesOn = false;

var width = $(window).width();
var height = $(window).height();

var requestAnimationFrame = function(){ return (
		window.requestAnimationFrame 	|| 
		window.webkitRequestAnimationFrame
	)
};
	
var cancelAnimationFrame = function(){
	return (
		window.cancelAnimationFrame 	|| 
		window.webkitCancelRequestAnimationFrame
	)
};