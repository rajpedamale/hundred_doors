'use strict';

function hundredDoors(doors, visitCount) {
  if(visitCount){
    updatedDoors = doors.map(() => '@');
  }
  return updatedDoors.join('');
}

module.exports = hundredDoors;
