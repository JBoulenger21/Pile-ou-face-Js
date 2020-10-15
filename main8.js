window.onscroll = slideDown;

function slideDown() {
     let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
     console.log(scrollTop);
     if (scrollTop>=100){
       document.getElementById('navbar').style.top = "0px";
     }
     if (scrollTop<100){
       document.getElementById('navbar').style.top = "-56px";
     }
}
