const player = document.getElementById('player');
const moveSize = 24;
var playerWalk = 0;

document.addEventListener('keydown', function(event) {
  if (event.code == 'ArrowUp') {
    playerWalk = playerWalk + 1;
    if (playerWalk%2 == 0){
      player.style.backgroundImage = "url(img/backmvt.png)";
    } else{
      player.style.backgroundImage = "url(img/back.png)";
    }
    player.style.top = (player.offsetTop - moveSize) + "px";
  } else if (event.code == 'ArrowRight') {
    playerWalk = playerWalk + 1;
    if (playerWalk%2 == 0){
      player.style.backgroundImage = "url(img/rightmvt.png)";
    } else{
    player.style.backgroundImage = "url(img/right.png)";
    }
    player.style.left = (player.offsetLeft + moveSize) + "px";
  } else if (event.code == 'ArrowDown') {
    playerWalk = playerWalk + 1;
    if (playerWalk%2 == 0){
      player.style.backgroundImage = "url(img/facemvt.png)";
    } else{
      player.style.backgroundImage = "url(img/face.png)";
    }
    player.style.top = (player.offsetTop + moveSize) + "px";
  } else if (event.code == 'ArrowLeft') {
    playerWalk = playerWalk + 1;
    if (playerWalk%2 == 0){
      player.style.backgroundImage = "url(img/leftmvt.png)";
    } else {
      player.style.backgroundImage = "url(img/left.png)";
    }
    player.style.left = (player.offsetLeft - moveSize) + "px";
  }
});
