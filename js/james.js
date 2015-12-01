// By Josh Post for Mediaworks Interactive, 2014

var drawJames = function(state) {

	// James
	var jamesImg = new Image();

	jamesImg.src = 'images/james.png';

	switch(state) {
		case 'degrade-2':
			jamesImg.onload = function(){
				context1.clearRect(422,294,243,436);
				context1.drawImage(jamesImg, 484, 0, 183, 436, 422, 294, 183, 436);
			}
			break
		case 'degrade-1':
			jamesImg.onload = function(){
				context1.clearRect(422,294,243,436);
				context1.drawImage(jamesImg, 666, 0, 182, 436, 422, 294, 182, 436);
			}
			break
		case 'hit-2':
			jamesImg.onload = function(){
				context1.clearRect(422,294,243,436);
				context1.drawImage(jamesImg, 0, 0, 242, 436, 422, 294, 242, 436);
			}
			break
		case 'hit-1':
			jamesImg.onload = function(){
				context1.clearRect(422,294,243,436);
				context1.drawImage(jamesImg, 242, 0, 243, 436, 422, 294, 243, 436);
			}
			break
		case 'success':
			jamesImg.onload = function(){
				context1.clearRect(422,294,243,436);
				context1.drawImage(jamesImg, 1028, 0, 237, 436, 422, 294, 237, 436);
			}
			break
		case 'failure':
			jamesImg.onload = function(){
				context1.clearRect(422,294,243,436);
				context1.drawImage(jamesImg, 847, 0, 182, 436, 422, 294, 182, 436);
			}
			break
		case 'normal':
		default:
			jamesImg.onload = function(){
				context1.clearRect(422,294,243,436);
				context1.drawImage(jamesImg, 1263, 0, 181, 436, 422, 294, 181, 436);
			}
		}
}