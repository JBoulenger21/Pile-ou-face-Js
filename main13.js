const buttonCopy = document.getElementById("buttonCopy") ;

buttonCopy.addEventListener("click", function() {
     document.getElementById('copyText').select();
     document.execCommand("copy");
});
