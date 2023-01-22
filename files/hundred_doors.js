'use strict';

const open = '@';
const closed = '#';

function hundredDoors(doors, visitCount=0) {
  let updatedDoors = [...doors];
  for(let i=1; i<=visitCount; i++){
    updatedDoors = 
      updatedDoors.map(
        (door, doorNumber) => door===closed?open:closed);
      )
  }
  return updatedDoors.join('');
}

module.exports = hundredDoors;
