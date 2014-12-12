var mySound = new T("sin");

$(document).ready( function () {
	$("#play").click(function() {
		mySound.play();	
		console.log("play");
	});
	$("#pause").click(function() {
		mySound.pause();	
		console.log("pause");
	});
});

/*
var playSound = function (sound) {
		$("#play").click(function(sound) {
			this.play();	
			console.log("play");
	});
		$("#pause").click(function(sound) {
			this.stop();
			console.log("stop");
	});
}
*/
