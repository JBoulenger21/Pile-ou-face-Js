window.onscroll = function() { scrollIndicator() } ;

function scrollIndicator() {
  let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  let elementHeight = document.documentElement.clientHeight;
  let scrollHeight = document.documentElement.scrollHeight;
  let value = scrollHeight-elementHeight;
  let percent = (scrollTop/value)*100;
  document.getElementById('bar').style.width = percent + "%";
}
