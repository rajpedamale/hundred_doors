'use strict';

const open = '@';
const closed = '#';

function visitDoors(updatedDoors, visit){
  return updatedDoors.map(
    (door, doorNumber) => {
      return door===closed?open:closed;
    }
  );
}

function hundredDoors(doors, visitCount=-1) {
  let updatedDoors = [...doors];
  for(let i=0; i<=visitCount; i++){
    updatedDoors = visitDoors(updatedDoors, i);
  }
  return updatedDoors.join('');
}

module.exports = hundredDoors;
