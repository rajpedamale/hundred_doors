'use strict';

const length = 100;
const doors = [...Array(length)].map(() => {
  return '@';
});

function hundredDoors(doors=doors) {
  return doors.join('');
}

module.exports = hundredDoors;
