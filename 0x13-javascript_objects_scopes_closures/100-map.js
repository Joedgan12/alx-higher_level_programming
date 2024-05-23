#!/usr/bin/node

const dict = require('./101-data');

const occurrencesByUserId = dict;
const userIdsByOccurrence = {};

for (const userId in occurrencesByUserId) {
  const occurrences = occurrencesByUserId[userId];
  if (!userIdsByOccurrence[occurrences]) {
    userIdsByOccurrence[occurrences] = [];
  }
  userIdsByOccurrence[occurrences].push(userId);
}

console.log(userIdsByOccurrence);
