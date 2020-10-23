document.getElementById('checkbox').addEventListener('click', function() {
  let typeInput = document.getElementById('input').type;
  if(typeInput === "password"){
    document.getElementById('input').type = "text";
    document.getElementById('display').innerHTML = "Hide";
  } else {
    document.getElementById('input').type = "password";
    document.getElementById('display').innerHTML = "Show";
  }
});
