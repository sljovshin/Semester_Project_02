let up = false;
let down = false;
let left = false;
let right = false;
let playerDoneMoving = false;
let moving = false;
let wentDown = false;
let wentUp = false;
let direction;

function drawIdle(char, x, y, charW, CharH) {
    return context.drawImage(char, x, y, charW, CharH);
}
function drawWalk(char, shift, sY,sW, sH, x, y, charW, CharH) {
    return context.drawImage(char, shift, sY,sW, sH, x, y, charW, CharH);
}


let player = {
    left: document.getElementById('jonSnowL'),
    right: document.getElementById('jonSnowR'),
    x: 168,
    y: 90,
    height: 110,
    width: 76,
    color: 'green',
    vx: 5,
    vy: 6,
    hitpoints: 3,
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'w') {       
        up = true;
    } 
    if(event.key === 'a') {
        left = true;        
    } 
    if(event.key === 'd') {
        right = true;        
    } 
    if(event.key === 's') {
        down = true;
    }  
});
document.addEventListener('keyup', (event) => {
    if (event.key === 'w') {
        up = false;
    } 
    if(event.key === 'a') {
        left = false;        
    } 
    if(event.key === 'd') {
        right = false;        
    } 
    if(event.key === 's') {
        down = false;
    }
});

function playerMove() {
    if (up && moving){
        player.y -= player.vy;
    }
    if (right && moving){
        player.x += player.vx;
        
    }
    if (down && moving){
        player.y += player.vy;
    }
    if (left && moving){
        player.x -= player.vx;
    }
}

function determinDirection() {
    for (let i = 0; i < levels.length; i++) {
        if (player.y > levels[i].y && player.y < levels[i].yY) {
            if (levels[i].level % 2 === 1) {
                left = false;
                right = true;
            } else {
                right = false;
                left = true;
            }
        }
    } 
}

let lastDir = player.right;
function drawPlayer() {
    
    context.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
    drawBackground(context);
    playerLocationDetection(); 
    if (left) {
        drawIdle(player.left, player.x, player.y, player.width, player.height)
        lastDir = player.left;
    } else if (right) {
        drawIdle(player.right, player.x, player.y, player.width, player.height)
        lastDir = player.right;
    } else {
        drawIdle(lastDir, player.x, player.y, player.width, player.height)
    }
    
    playerMove();
    drawRoom(gateoverlap, 367, 0, 33, 250);
    determinDirection();
    
    requestAnimationFrame(drawPlayer);
}
