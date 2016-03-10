var five = require("johnny-five");
var board = new five.Board();
var isIntroAudioPaused = false;

board.on("ready", function() {

  // Create a standard `led` component instance
  console.log("Connected");
  this.repl.inject({
    // Allow limited on/off control access to the
    // Led instance from the REPL.
    five: five
  });
});