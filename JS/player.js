let up = false;
let down = false;
let left = false;
let right = false;

let player = {
    x: 40,
    y: 170,
    r: 30,
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
    if(event.key === 's') {
        right = true;        
    } 
    if(event.key === 'd') {
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
    if(event.key === 's') {
        right = false;        
    } 
    if(event.key === 'd') {
        down = false;
    }
});

function playerMove() {
    if (up){
        player.y -= player.vy;
    }
    if (right){
        player.y += player.vy;
    }
    if (down){
        player.x += player.vx;
    }
    if (left){
        player.x -= player.vx;
    }
}

function drawPlayer() {
    context.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
    drawBackground(context);
    context.beginPath();
    context.fillStyle = player.color;
    context.arc(player.x, player.y, player.r, 0 , 2 * Math.PI);
    context.fill();
    context.closePath();
    playerMove();
       
    requestAnimationFrame(drawPlayer);
}
