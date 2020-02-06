// initialize world

defineRooms();
drawBackground(context);
window.scroll({
    top: player.y,
    behavior: 'smooth'
  });

// spawn player
function game() {
    
  context.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
  drawBackground(context);
  drawBoss();
  playerLocationDetection(); 
  drawPlayer();
  playerMove();
  drawRoom(gateoverlap, 367, 0, 33, 250);
  determinDirection();
  
  requestAnimationFrame(game);
}
game();

//detect player location in world



