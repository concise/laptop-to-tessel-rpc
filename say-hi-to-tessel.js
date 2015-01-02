#!/usr/bin/env node
/*
 * Usage:
 *
 * Change directory to where this script is
 *
 *      $ npm install tessel
 *      $ node say-hi-to-tessel.js
 *
 * You should see echo from Tessel board.
 *
 */
var tessel = require('tessel');
var count = 0;

// `tessel.findTessel` finds a Tessel attached to this computer and connects.
tessel.findTessel({serial: process.env.TESSEL_SERIAL}, function(err, device) {
  if (err) {
    throw err;
  }

  setInterval(function() {
    count += 1;
    device.send('Hi, Tessel! (the ' + count + 'th time from laptop\' script)');
  }, 1000);

  device.on('message', function(m) {
    console.log('Laptop got a message from Tessel:', m);
  });
});
