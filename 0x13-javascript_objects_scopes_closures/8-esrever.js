#!/usr/bin/node
exports.esrever = function (list) {
  let len = list.length - 1;
  let k = 0;
  while ((len - k) > 0) {
    const aux = list[len];
    list[len] = list[k];
    list[k] = aux;
    k++;
    len--;
  }
  return list;
};
