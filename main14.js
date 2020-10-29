const balanceIcon = document.getElementById('balanceIcon');

function balanceScale() {
 balanceIcon.innerHTML = "&#xf240";
 setTimeout(function(){balanceIcon.innerHTML = "&#xf241";}, 500);
 setTimeout(function(){balanceIcon.innerHTML = "&#xf242";}, 1000);
 setTimeout(function(){balanceIcon.innerHTML = "&#xf243";}, 1500);
 setTimeout(function(){balanceIcon.innerHTML = "&#xf244";}, 2000);
}

balanceScale();

setInterval(balanceScale, 2500);
