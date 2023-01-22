'use strict';

const length = 100;
const doors = [...Array(length)].map(() => {
  return { value: '@' };
});

function hundredDoors() {
  return doors;
}

module.exports = hundredDoors;
