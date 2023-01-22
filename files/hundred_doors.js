'use strict';

const open = '@';
const closed = '#';

function visitDoors(visitCount){
  return doors.map((door, doorNumber) => door===closed?open:closed);
}
function hundredDoors(doors, visitCount=0) {
  let updatedDoors = [...doors];
  for(let i=1; i<=visitCount; i++){
    updatedDoors = visitDoors(i);      
  }
  return updatedDoors.join('');
}

module.exports = hundredDoors;
