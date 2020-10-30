const logo = document.getElementById('logo');
let value = 0 ;
function animLogo(){
  if (value<240){
    value++;
    logo.style.height = value + "px";
    logo.style.width = value + "px";
    logo.style.fontSize = value/8 + "px";
  } else {
    logo.style.display = "none";
    clearInterval(time);
  }
  console.log(value);
}

let time = setInterval(animLogo, 15);
