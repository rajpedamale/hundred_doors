'use strict';

function hundredDoors(doors, visitCount) {
  if(visitCount){
    doors = doors.map(() => {'@'});
  }
  return doors.join('');
}

module.exports = hundredDoors;
