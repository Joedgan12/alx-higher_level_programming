#!/usr/bin/node
class Rectangle {
  constructor (w, h) {
    if ((w > 0) && (h > 0)) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    for (let x = 0; x < this.height; x++) {
      let k = '';
      for (let m = 0; m < this.width; m++) {
        k += 'X';
      }
      console.log(k);
    }
  }
}

module.exports = Rectangle;
