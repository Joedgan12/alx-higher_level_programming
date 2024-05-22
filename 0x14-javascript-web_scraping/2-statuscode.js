#!/usr/bin/node
// display the status code of a GET request
const request = require('request');

request(process.argv[2], function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log('code:', data.statusCode);
  }
});
