const check = document.getElementById("check") ;

check.addEventListener("click", function() {
    let year = document.getElementById("year").value ;
    if ((year%4==0) && ((year%100!=0) || (year%400==0))) {
      document.getElementById('result').innerHTML = year+" is a leap year.";
    } else{
      document.getElementById('result').innerHTML = year+" is not a leap year.";
    }
});
