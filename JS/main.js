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
  determinFloor();
  if (player.x > 1350 && player. y > 3000) {
    drawCharacter(player.victorySprite, player.x, player.y - 67, 90, 177)
  } else {
    drawPlayer();
  }
  playerMove();
  drawRoom(gateoverlap, 367, 0, 33, 250);
  if(player.x > 1400 && player. y > 3000) { 
    
    setTimeout(endGame, 5000);
    return;
  }
  requestAnimationFrame(game);
}

function endGame() {
  location.href = "../victory.html"
}

game();

//detect player location in world



