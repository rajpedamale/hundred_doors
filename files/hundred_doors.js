'use strict';

const open = '@';
const closed = '#';

function flipDoor(door){
  return door===closed?open:closed;
}

function visitDoors(updatedDoors, visit){
  return updatedDoors.map(
    (door, doorNumber) => {
      return (doorNumber + 1)%visit === 0 ? flipDoor(door) : door;
    }
  );
}

function hundredDoors(doors, visitCount=0) {
  let updatedDoors = [...doors];
  for(let i=1; i<=visitCount; i++){
    updatedDoors = visitDoors(updatedDoors, i);
  }
  return updatedDoors.join('');
}

module.exports = hundredDoors;
