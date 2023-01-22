'use strict';

const length = 100;
const initialStateOfDoors = [...Array(length)].map(() => {
  return '#';
});

function hundredDoors(doors=initialStateOfDoors) {
  return doors.join('');
}

module.exports = hundredDoors;
