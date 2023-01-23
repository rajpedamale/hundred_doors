'use strict';

const open = '@';
const closed = '#';

function flipDoor(door){
  return door===closed?open:closed;
}

function updateDoor(door, doorNumber) {
  return (doorNumber + 1)%visit === 0 ? flipDoor(door) : door;
}

function visitDoors(updatedDoors, visit){
  return updatedDoors.map(updateDoor);
}

function hundredDoors(doors, visitCount=0) {
  let updatedDoors = [...doors];
  for(let i=1; i<=visitCount; i++){
    updatedDoors = visitDoors(updatedDoors, i);
  }
  return updatedDoors.join('');
}

module.exports = hundredDoors;
