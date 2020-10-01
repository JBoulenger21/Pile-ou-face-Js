const myBtn = document.getElementById('myBtn');
const myBtn2 = document.getElementById('myBtn2');
const cntClic = document.getElementById('cntClic');
const cntClic2 = document.getElementById('cntClic2');
var nbClic = 0;

myBtn.addEventListener("click", increment);
myBtn2.addEventListener("click", pileOuFace);

function increment(){
  nbClic ++;
  cntClic.innerHTML= "Vous avez cliqué "+nbClic+" fois !";
  console.log("Nombre de clic :"+nbClic);
}

function pileOuFace(){
  let e = ["pile", "face"];
  let result = e[Math.floor(Math.random()*e.length)];
  console.log(e.length);
  cntClic2.innerHTML = result;
}
