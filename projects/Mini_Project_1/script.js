
// var cumulative = 0;
var range = document.getElementById("appleFall");
var warn = document.getElementById("warn");
// var applesFall = [];
var sky = document.getElementById("sky");

var fallPlace = document.getElementById("fall");

var array1 = [];
var array2 = [];

var count1 = true;
var count2 = true;
var record;

var five = document.getElementById("five");
five.addEventListener("click",fiveApples);

var ten = document.getElementById("ten");
ten.addEventListener("click",tenApples);

var thirty = document.getElementById("thirty");
thirty.addEventListener("click",thirtyApples);

var showLine = document.getElementsByClassName("delay")[0];
var appleFall = document.getElementById("appleFall");

function showButtons(){
  five.style.display =  "block";
  ten.style.display = "block";
  thirty.style.display = "block";
}

function show(){
  showLine.style.display = "block";
}

function loadLine(){
  setTimeout(show, 3000);
  setTimeout(showButtons,7000);
}



function fiveApples(){
  if (record === false){
  for (i=0;i<array2.length;i++){
   array2[i].remove();
  }
 }

  if (count1 === true){
  for (i=0;i<5;i++){
      var apple = document.createElement("img");
      apple.src = "images/apple.png";
      apple.style.position = "relative";
      apple.style.left = Math.random()*100 + "px";
      apple.style.top = Math.random()*100 + "px";
      apple.style.width= 50+Math.random()*100 + "px";
      fallPlace.appendChild(apple);
      console.log("there're 5 apples created");
      array1.push(apple);
      console.log(array1);
     }
     count1 = false;
   }
     record = true;
     count2 = true;
 }



 function tenApples(){
   if (record === true){
   for (i=0;i<array1.length;i++){
    array1[i].remove();
   }
  }

   if (count2 === true){
   for (i=0;i<10;i++){
       var apple = document.createElement("img");
       apple.src = "images/apple.png";
       apple.style.position = "relative";
       apple.style.left = Math.random()*100 + "px";
       apple.style.top = Math.random()*100 + "px";
       apple.style.width= 50+Math.random()*100 + "px";
       fallPlace.appendChild(apple);
       console.log("there're 10 apples created");
       array2.push(apple);
       console.log(array2);
      }
      count2 = false;
    }
      record = false;
      count1 = true;
  }


   function thirtyApples(){
     setTimeout(function(){
       var text = document.createElement("p");
       var node = document.createTextNode("Not enough?Let's create an apple rainfall!");
         text.appendChild(node);//https://www.w3schools.com/js/js_htmldom_nodes.asp
         text.className = "typing typing-item text3";
         document.body.appendChild(text);
     },1500)

      setTimeout(function(){
        appleFall.style.display = "block";
      },3000)
     warn.style.display = "block";
       for (i=0;i<array1.length;i++){
        array1[i].remove();
       }
     for (i=0;i<array2.length;i++){
      array2[i].remove();
     }
    }


let randomWidth;
let randomSpeed;


console.log("hello");

function letApplesFall(num){

  for(let i=0; i<num; i++){

    if (range.value < 5){
      remove = 8000;
      randomSpeed = 1+Math.random()*7;
    } else if (range.value < 10){
      remove = 6000;
      randomSpeed = 1+Math.random()*5;
    }else if (range.value < 15){
      randomSpeed = 1+Math.random()*3;
    }else {
      remove = 4000;
      randomSpeed = 1+Math.random()*2;
    }

      let fallApple = document.createElement("img");
      fallApple.src = "images/apple.png";
      fallApple.className = "apple";

      let randomX = Math.random()*1400; //500 really should be the window width
      fallApple.style.left =randomX + "px";
      // randomSpeed = 1+Math.random()*6; //500 really should be the window width
      fallApple.style.animationDuration =randomSpeed + "s";

      sky.appendChild(fallApple);

      setTimeout(function(){
        fallApple.remove();
      }, remove);

    }
  }

  if (range.value > 0){
  }else if (range.value < 5){
    gap = 200;
  } else if (range.value < 10){
    gap = 100;
  }else if (range.value < 15){
    gap = 50;
  }else {
    gap = 10;
  }

  setInterval(function(){
    //what's the range value?
    letApplesFall(range.value);}, gap)



//below is the previos attempt
// function growApples(){
//   var x = document.getElementById("create").value;
//   cumulative = cumulative + parseInt(x);//with the help of Jingtian
//
//   var notify = document.getElementById("notify");
//   notify.style.display = "block";
//   var number = document.getElementById("number");
//
//   if (cumulative<=26){
//   for (i=0;i<x;i++){
//     var apple = document.createElement("img");
//     apple.src = "images/apple.png";
//     apple.style.position = "relative";
//     apple.style.left = Math.random()*100 + "px";
//     apple.style.top = Math.random()*100 + "px";
//     apple.style.width= Math.random()*150 + "px";
//     fallPlace.appendChild(apple);
//     console.log("there're " + x + " apples created");
//   }
//
//
//   // var text = document.createElement("p");
//   // var node = document.createTextNode("You've grown" +x+"apples");
//   // text.appendChild(node);
//   // https://www.w3schools.com/js/js_htmldom_nodes.asp
//
//   }  else {
//     warn.style.display = "block";
//     notify.innerHTML = "Control the number under 26!"
//     cumulative = 26;
//     console.log("hi");
//   }

//   number.innerHTML = cumulative;
//
// }


 // range.addEventListener("input",()=>{
 //   for (i=0;i<range.value;i++){
 //     var fallApple = document.createElement("img");
 //     fallApple.src = "images/apple.png";
 //
 //     applesFall.push(fallApple);//https://stackoverflow.com/questions/351409/how-to-append-something-to-an-javascript
 //     fallApple.style.position = "relative";
 //     fallApple.style.left = Math.random()*100 + "px";
 //     fallApple.style.top = Math.random()*100 + "px";
 //     fallApple.style.width= Math.random()*150 + "px";
 //     console.log(applesFall);
 //     sky.appendChild(fallApple);
 //   }
//
