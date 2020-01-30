function openDoor(i) {
    if(rooms[i].roomNum === 4) {
        drawRoom(halldown, rooms[i].x, rooms[i].y, 400, 250);        
     }
}




function playerLocationDetection() {
        
    console.log(player.y);
    
    for (let i = 0; i < rooms.length; i++) {
        if (player.x > rooms[i].x && player.x < rooms[i].xX && player.y > rooms[i].y && player.y < rooms[i].yY) {
            openDoor(i);                      
            /*if (rooms[i].roomNum % 4 === 0) {
                player.y = player.y + 250;
            }*/
         }     
    }
    requestAnimationFrame(playerLocationDetection);
}