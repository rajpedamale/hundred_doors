'use strict';

const open = '@';
const closed = '#';

function visitDoors(updatedDoors){
  return updatedDoors.map(
    (door, doorNumber) => {
      return door===closed?open:closed;
    }
  );
}

function hundredDoors(doors, visitCount=0) {
  let updatedDoors = [...doors];
  for(let i=1; i<=visitCount; i++){
    updatedDoors = visitDoors(updatedDoors);
  }
  return updatedDoors.join('');
}

module.exports = hundredDoors;
