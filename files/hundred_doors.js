'use strict';

const open = '@';
const closed = '#';

function hundredDoors(doors, visitCount=0) {
  let updatedDoors = [...doors];
  for(i=1; i<=visitCount; i++){
    updatedDoors = doors.map(door => door===closed?open:closed);
  }
  return updatedDoors.join('');
}

module.exports = hundredDoors;
