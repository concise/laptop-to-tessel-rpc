var tessel = require('tessel');

console.log('Hit CTRL-C to exit this program...\n');

tessel.findTessel({serial: process.env.TESSEL_SERIAL}, function(err, device) {
  if (err) {
    console.error('There is an error on findTessel() call.');
    throw err;
  }

  var b = new Buffer('01020304', 'hex');
  device.send(b);
  console.log('Sent to Tessel board:');
  console.log(b);

  device.on('message', function(m) {
    console.log('Result from Tessel board:');
    console.log(m);
  });
});
