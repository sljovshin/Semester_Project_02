// initialize world

defineRooms();
drawBackground(context);
window.scroll({
    top: player.y,
    behavior: 'smooth'
  });

// spawn player
drawPlayer();

//detect player location in world



