var tessel = require('tessel');

// Blinking LED to indicate the Tessel is alive.
(function() {
  var led1 = tessel.led[0].output(1);
  setInterval(function() { led1.toggle(); }, 1000);
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
