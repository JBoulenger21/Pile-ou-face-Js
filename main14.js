const balanceIcon = document.getElementById('balanceIcon');

function balanceScale() {
 balanceIcon.innerHTML = "&#xf240";
 setTimeout(function(){balanceIcon.innerHTML = "&#xf241";}, 1000);
 setTimeout(function(){balanceIcon.innerHTML = "&#xf242";}, 2000);
 setTimeout(function(){balanceIcon.innerHTML = "&#xf243";}, 3000);
 setTimeout(function(){balanceIcon.innerHTML = "&#xf244";}, 4000);
}

balanceScale();

setInterval(balanceScale, 5000);
