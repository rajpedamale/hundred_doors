'use strict';

function hundredDoors(doors, visitCount) {
  let updatedDoors = [...doors];
  if(visitCount){
    updatedDoors = doors.map(() => '@');
  }
  return updatedDoors.join('');
}

module.exports = hundredDoors;
