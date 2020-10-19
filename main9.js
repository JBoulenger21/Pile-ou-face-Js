document.addEventListener("DOMContentLoaded", (event) => {
  window.addEventListener("resize", detectOrientation) ;
  detectOrientation() ;
});

function detectOrientation(){
    let orientation = window.screen.orientation.angle;
    if (orientation ===0){
      document.getElementById('rotateScreen').style.display = "block";
    } else {
      document.getElementById('rotateScreen').style.display = "none";
    }
    if (orientation === 90){
      document.getElementById('displayContent').style.display = "block";
    } else {
      document.getElementById('displayContent').style.display = "none";
    }
}
