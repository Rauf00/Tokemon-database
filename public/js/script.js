// var bb = document.getElementById("button1");
// bb.onclick = function(){
//     window.alert("HHHEEEEELLLLLPPPP!!!");
// }

//
// document.getElementById("button1").addEventListener('click', function(){
//     document.getElementById("para").innerHTML = "FIRST PARAGRAPH!!";
//     console.log("you've clicked me!");
// });
//
// document.getElementById("in").addEventListener('keypress', process_key);
//
// function process_key(ev){
//   console.log(ev.keyCode);
// }

// demonstrating callback functions in JS
var inter = setInterval(sayHello,0);

function sayHello(){
  console.log("hello!");
}

console.log("world");

// demonstrating serialization of JSON objects

var clientObject = {name:"Bobby Chan", age: 25};
var userStr = JSON.stringify(userObj);

// send to server

var serverObject = JSON.parse(userStr);
serverObject["name"]; // Bobby Chan
