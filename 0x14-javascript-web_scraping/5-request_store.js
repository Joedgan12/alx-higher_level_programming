#!/usr/bin/node
// gets the contents of a webpage and stores it in a file.
const fs = require('fs');
const request = require('request');
const url = process.argv[2];

request(url, function (err, res, body) {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile(process.argv[3], body, function (err) {
      if (err) {
        return console.error(err);
      }
    });
  }
});
