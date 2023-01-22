'use strict';

const open = '@';
const closed = '#';

function hundredDoors(doors, visitCount) {
  let updatedDoors = [...doors];
  if(visitCount){
    updatedDoors = doors.map(door => door===closed?open:closed);
  }
  return updatedDoors.join('');
}

module.exports = hundredDoors;
