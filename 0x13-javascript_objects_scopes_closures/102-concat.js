#!/usr/bin/node
const fs = require('fs');
let data1 = '';
let data2 = '';
try {
  data1 = fs.readFileSync(process.argv[2], 'utf8');
} catch (err) {
  console.error(err);
}

try {
  data2 = fs.readFileSync(process.argv[3], 'utf8');
} catch (err) {
  console.error(err);
}

fs.writeFile(process.argv[4], data1 + data2, function (err) {
  if (err) {
    return console.error(err);
  }
});
