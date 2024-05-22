#!/usr/bin/node
// computes the number of tasks completed by user id
const request = require('request');
const url = 'https://swapi-api.hbtn.io/api/films/' + process.argv[2];

request(url, function (err, res, body) {
  if (err) {
    console.log(err);
  } else {
    const data = JSON.parse(body).characters;
    for (const char of data) {
      request(char, function (err, res, body) {
        if (err) {
          console.log(err);
        } else {
          const charName = JSON.parse(body).name;
          console.log(charName);
        }
      });
    }
  }
});
