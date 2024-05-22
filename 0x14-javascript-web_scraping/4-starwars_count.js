#!/usr/bin/node
// prints the number of movies where the character “Wedge Antilles” is present.

const request = require('request');
const url = process.argv[2];
request(url, function (err, res, body) {
  if (err) {
    console.log(err);
  } else {
    let count = 0;
    const data = JSON.parse(body);
    for (const element of data.results) {
      for (const char of element.characters) {
        if (char.includes('/18/')) {
          count += 1;
          break;
        }
      }
    }
    console.log(count);
  }
});
