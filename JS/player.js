let up = false;
let down = false;
let left = false;
let right = false;

function drawIdle(char, x, y, charW, CharH) {
    return context.drawImage(char, x, y, charW, CharH);
}
function drawWalk(char, shift, sY,sW, sH, x, y, charW, CharH) {
    return context.drawImage(char, shift, sY,sW, sH, x, y, charW, CharH);
}


let player = {
    left: document.getElementById('jonSnowL'),
    right: document.getElementById('jonSnowR'),
    x: 40,
    y: 90,
    height: 110,
    width: 75,
    color: 'green',
    vx: 3,
    vy: 3,
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
    if (up){
        //player.y -= player.vy;
    }
    if (right){
        player.x += player.vx;
        
    }
    if (down){
        //player.y += player.vy;
    }
    if (left){
        player.x -= player.vx;
    }
}

var shift = 0;
var totalframes = 2;
var currentFrame = 0;

function drawPlayer() {
    context.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
    drawBackground(context);
    
    if (left) {
        drawIdle(player.left, player.x, player.y, player.width, player.height)
    } else if (right) {
        drawIdle(player.right, player.x, player.y, player.width, player.height)
    } else {
        drawIdle(player.right, player.x, player.y, player.width, player.height)
    }
    
    playerMove();
      
    requestAnimationFrame(drawPlayer);
}
