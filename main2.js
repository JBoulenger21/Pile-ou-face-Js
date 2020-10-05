// const convert = document.getElementById("convert");
//
// convert.addEventListener("click", function() {
//     let code = document.getElementById("convert").value;
//     let crypted = [];
//     Array.convert.forEach(element => crypted.push(code));
//     console.log(crypted);
//   }
// );
// const convert = document.getElementById("convert");
// var crypted = document.getElementById("crypted");
//
// convert.addEventListener("click", function() {
// let code = document.getElementById("msgToCode").value;
// console.log(code);
// let array = [];
// for (var i = 0; i < code.length; i++) {
// let test = code.charCodeAt(i);
// console.log(test);
// let binary = Number(test.toString(2));
// array.push(binary);
// crypted.innerHTML = array;
// console.log(binary);
// }
// });


const convert = document.getElementById("convert") ;
let input = document.getElementById('msgToCode');
let output = document.getElementById('crypted');

convert.addEventListener("click", function() {
  let result = input.value;
  console.log(text2Binary(result));
  output.innerHTML = text2Binary(result);
});

function text2Binary(string) {
    return string.split('').map(function (char) {
        return char.charCodeAt(0).toString(2);
    }).join(' ');
}
