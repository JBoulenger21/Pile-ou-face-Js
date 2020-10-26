document.getElementById("input").addEventListener("keyup", function(event) {
  let caps = event.getModifierState("CapsLock");
  if (caps){
    document.getElementById('warning').style.display = "block";
  } else{
    document.getElementById('warning').style.display = "none";
  }
});
