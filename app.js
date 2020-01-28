console.log('we are live');


const rooms = document.getElementsByClassName('tile');
let roomArray = [...rooms]
console.log(roomArray);


const randomNumber = () => {
  return `tile${Math.floor(Math.random()*44 + 3)}`;
}

const doorRoomGenerator = () => {


  

}

function randomRoomGenerator() {
    const ids = [randomNumber(), randomNumber(), randomNumber(), randomNumber()];
    console.log(ids);
    roomArray.forEach(room => {
      for (let i = 0; i < ids.length; i++) {
        if (room.id == ids[i]) {
          room.classList.add('tileStairsDown');
        }
        
      }
    })
}




randomRoomGenerator();