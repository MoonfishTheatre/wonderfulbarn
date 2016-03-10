var five = require("johnny-five");
var board = new five.Board();
var isIntroAudioPaused = false;

board.on("ready", function() {

  // Create a standard `led` component instance
  console.log("Connected");
  var headphonesButton = new five.Button(13);
  var guideLight = new five.Led(12);
  var introAudio = new five.Led(11);
  var bookAudio = new five.Led(10);
  var bookButton = new five.Button(9);

  // Stage 1 - Pick up the audio and play intro audio
  headphonesButton.on("hold", function() {
  	console.log("Please pick up headphones");
  })

  headphonesButton.on("down", function() {
  	console.log("Headphones are down");
  	guideLight.off();
  	introAudio.off();
  	if (isIntroAudioPaused === true) {
  		console.log("Intro Audio is Paused");
  	}
  })

  headphonesButton.on("up", function() {
  	guideLight.on();
  	introAudio.on();
  	console.log("Playing intro audio");
  })

  // Stage - 2 Opening of the book
  if (headphonesButton.isDown === false) {
  	bookButton.on("down", function() {
  		console.log("Book Audio Starts to Play");
  		introAudio.off();
  		bookAudio.on();
  	})

  	bookButton.on("up", function() {
  		console.log("Book Audio is Paused");
  		bookAudio.off();
  	})
  }







});