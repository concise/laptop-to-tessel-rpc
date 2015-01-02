/*
 * Usage:
 *
 * Change directory to where this script is, and then
 *
 *      $ tessel push .
 *
 * You should see the LEDs on Tessel board are blinking.
 *
 */
var tessel = require('tessel');
var echo_counter = 0;

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
  echo_counter += 1;
  process.send('Tessel board has got ' + echo_counter + ' messages from USB port.  This time it is: ' + msg);
});

// Keep the event loop alive
process.ref();
