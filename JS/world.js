
let screen = document.getElementById('main')
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

let hall = document.getElementById('hallway');
let halldoor = document.getElementById('hallwayDoor');
let hallup = document.getElementById('hallwayUp');
let halldown = document.getElementById('hallwayDown');

let rooms= [];



const randomRoom = () => {
    return Math.floor(Math.random()*100);
};
function drawRoom(room, x, y, roomWidth, roomHeight) {
    return context.drawImage(room, x, y, roomWidth, roomHeight);
}




function drawBackground(context) {
    const roomWidth = 400;
    const roomHeight = 250;
    let roomsCount = 53;
    const doors = [4,10,19,28,34,41,48,51]
    let x = 0;
    let y = 0;
    
    for (let i = 0; i < roomsCount; i++) {  
        context.drawImage(hall, x, y, roomWidth, roomHeight);
        doors.forEach(room => {
            if(i === room - 1) {
                drawRoom(halldoor, x, y, roomWidth, roomHeight);
            }
        })

        x = x + roomWidth;      
        if (x >= 4 * roomWidth) {
            y = y + roomHeight;
            x = 0;
        }
    }
}

function defineRooms() {
    let x = 0;
    let y = 0;
    const width = 400;
    const height = 250;
    let xX = x + width;
    let yY = y + height;
    let roomsCount = 52;

    for (let i = 0; i < roomsCount; i++) {
        rooms.push({
            roomNum: i + 1,
            x: x,
            y: y,
            xX: xX,
            yY: yY
        })

        
        x = xX;
        xX = xX + (width); 

        if (x > 4 * width) {
            y = yY;
            yY = yY +(height);
            x = 0;
            xX = x + width
        }
    }

}



defineRooms();



