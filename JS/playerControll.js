let dice;
const diceRoll = () => {
    dice = Math.floor((Math.random()*5 + 1)) * 400;
}


function rollDice() {
    diceRoll();
    playerMover();
    console.log("dice roll is: " + dice/400);
    setTimeout(()=> {
        wentDown = false;
        wentUp = false;
    }, 1500)
}

let moved = 0;

function playerMover() {
    moved = 0;
    playerDoneMoving = false;
    moving = true;
    currentX = player.x;
    console.log();
    move();
}

function move() {
    console.log(dice);
    console.log(moved);
    
    

    if(player.x > 1450 && playerDoneMoving === false) {
        player.x = 1440;
        player.y += 250;
        moved -= 200;
        window.scroll({
            top: player.y,
            behavior: 'smooth'
          });
    }

    if(player.x < 150 && playerDoneMoving === false) {
        player.x = 160;
        player.y += 250;
        moved -= 200;
        window.scroll({
            top: player.y,
            behavior: 'smooth'
          });
    }

    if(player.x > 1400 && player. y > 3000) {
        moving = false;
        playerDoneMoving = true;
        cancelAnimationFrame(move);
        return;
    }

    moved += player.vx;
    if(moved > dice) {
        console.log(moved > dice);
        moving = false;
        playerDoneMoving = true;
        cancelAnimationFrame(move);
        return;
    }
    requestAnimationFrame(move);
}
/*
const playerMover = (length) => {
    playerDoneMoving = false;
    currentX = player.x;
    
    let move = setInterval(()=> {
        moving = true;
        console.log(moving);
        
        if(moved > length * 1000) {
            moving = false;
            playerDoneMoving = true;
            clearInterval(move);
            moved = 0;
        }


        if(player.x > 1450 && playerDoneMoving === false) {
            player.x = 1440;
            player.y += 250;
            window.scroll({
                top: player.y,
                behavior: 'smooth'
              });
        }
        if(player.x < 150 && playerDoneMoving === false) {
            player.x = 160;
            player.y += 250;
            window.scroll({
                top: player.y,
                behavior: 'smooth'
              });
        }
        if(player.x > 1400 && player. y > 3000) {
            moving = false
        }
        moved += 100;
    }, 100)

}

*/


/**
 *         if (player.x > 1200 && player.x < 1400) {
            player.y += 250;
        } else if (player.x > 150 && player.x < 250 ) {
            player.y += 250;
        }
 */

/*
let dir = 1;
let c = 0;
function direction() {
     if (c === 2) {
        if(dir === 1) {
            player.y = player.y + 250;
            dir = -1;
         } else {
            dir = 1;
        }  
    }
    c++
    
    return dir;
}   

*/
/*
console.log('moving');
for (let i = 0; i < rooms.length; i++) {
    if (player.x > rooms[i].x && player.x < rooms[i].xX && player.y > rooms[i].y && player.y < rooms[i].yY) {  
        console.log("room: "+rooms[i].roomNum);
                            
        if (rooms[i].roomNum % 4 === 0) {
            player.y = player.y + 250;
        }
     }     
}       
player.x = player.x + (400 * direction());
*/



//if(Math.floor(player.x / 400) + 1 % 4 === 0) {
//} 