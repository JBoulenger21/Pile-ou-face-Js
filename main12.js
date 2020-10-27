var progressBar = document.getElementById('progressBar');
var alertBar = document.getElementById('alertBar');

document.getElementById('btn').addEventListener('click', function() {
  let $i = 0;
  setInterval(progress,20);
  function progress(){
    if($i == 100){
      clearInterval();
      // progressBar.style.display = 'none';
      // alertBar.style.display = 'block';
      setInterval(disp, 2000);
    } else {
    // alertBar.style.display = 'none';
    // progressBar.style.display = 'block';
    $i++;
    console.log($i);
    progressBar.style.width = $i + '%';
    progressBar.innerHTML = $i + '%';
  }}
});
function disp(){
  clearInterval();
  $y = 0;
  $y++;
  if ($y=100){
  progressBar.style.display = 'none';
  document.getElementById('imgdisp').style.display = 'block';
}
}
