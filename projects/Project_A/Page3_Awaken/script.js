let alive = document.getElementById("alive");
let body = document.body;

//audio
let robotVoice = document.getElementById("robotVoice");
let aliveVoice = document.getElementById("aliveVoice");
let calculating = document.getElementById("calculating");

function playAudio(){
  setTimeout(()=>{
    robotVoice.play();
  },1000)
}

alive.addEventListener("click", openWindow);
alive.onmouseover = ()=>{
  aliveVoice.play();
  alive.style.fontSize = "70px";
}

alive.onmouseout = ()=>{
  alive.style.fontSize = "50px";
}

function openWindow(){
  calculating.play();
  body.style.animationName = "blinking";
  setTimeout(()=>{
    window.open("../Page4_Eyes/index.html","_self");
  },2000)
}

//apply css animation to the alive
//https://freefrontend.com/css-text-animations/

setTimeout(()=>{
  alive.style.display = "inline-block";
},10050)



// //select the content
// let content = document.getElementById("content");
// //select the text inside the box
// let text = content.innerHTML;
// //turn the string text into an array
// let letters = text.split("");
// //create a new array using map and span every letter
// let letterSpans = letters.map((letter)=>{ return "<span>"+letter+"</span>"});
// //turn the array into a string
// content.innerHTML = letterSpans.join("");
//
// console.log(content);
// //select them in order to modify later
// let spanTags = content.getElementsByTagName("span");
//
// function letterFall(){
//   console.log("hi");
//   for (var i = 0; i < spanTags.length; i++) {
//     spanTags[i].className = "text";
//     spanTags[i].style.animationName = "fall";
//   }
// }
