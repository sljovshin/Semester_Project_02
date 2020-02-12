// initialize world

defineRooms();
drawBackground(context);


// spawn player
function game() {
  window.scroll({
    top: player.y,
    behavior: 'smooth'
  });
  context.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
  drawBackground(context);
  drawBoss();
  playerLocationDetection(); 
  determinFloor();
  drawPlayer();
  playerMove();
  drawRoom(gateoverlap, 367, 0, 33, 250);
  
  requestAnimationFrame(game);
}


game();

//detect player location in world



