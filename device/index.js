var tessel = require('tessel');

// Blinking LED to indicate the Tessel is still alive.
(function() {
  var led1 = tessel.led[0].output(1);
  var led2 = tessel.led[1].output(0);
  setInterval(function() {
    led1.toggle();
    led2.toggle();
  }, 2000);
}());

// Echo back what Tessel receives.
process.on('message', function(msg) {
  if (Buffer.isBuffer(msg)) {
    process.send(tessel.plusone(msg));
  } else {
    process.send('Input is not a `Buffer` object.');
  }
});

// Keep the event loop alive
process.ref();
