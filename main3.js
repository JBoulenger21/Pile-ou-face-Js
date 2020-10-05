const convert = document.getElementById("convert");
const convert2 = document.getElementById("convert2");
const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const daysInYear = 365;
var array = {'seconds':1,'minutes':60,'hours':3600,'days':86400, 'years':31536000};

convert.addEventListener("click", function() {
    let numberOfYears = document.getElementById("numberOfYears").value;
    let numberOfDays = numberOfYears * daysInYear;
    document.getElementById('resultDays').innerHTML = numberOfDays+" days";
    let numberOfHours = numberOfDays * hoursInDay;
    document.getElementById('resultHours').innerHTML = numberOfHours+" hours";
    let numberOfMinutes = numberOfDays * minutesInHour;
    document.getElementById('resultMinutes').innerHTML = numberOfMinutes+" minutes";
    let numberOfSeconds = numberOfMinutes * secondsInMinute;
    document.getElementById('resultSeconds').innerHTML = numberOfSeconds+" seconds";
});

convert2.addEventListener("click", function(){
  let unitChosen = document.getElementById('unitChosen').value;
  let unitChosenFinal = document.getElementById('unitChosenFinal').value;
  let numberChosen = document.getElementById('numberChosen').value;
  let tempSecond = numberChosen * array[unitChosen];
  let result = tempSecond / array[unitChosenFinal];
  document.getElementById('resultValue').innerHTML = result+' '+unitChosenFinal;
});
