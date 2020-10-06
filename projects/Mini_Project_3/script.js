//label input vars
let soundType = document.getElementsByClassName("type");
let sine = document.getElementById("sine");
let square = document.getElementById("square");
let sawtooth = document.getElementById("sawtooth");
let triangle =  document.getElementById("triangle");

//frequency and volume vars
let frequncy = document.getElementById("frequncy");
let volume = document.getElementById("volume");

//create a square container to put squares in
let squareContainer = document.getElementById("square-container");

//doesn't need array here because the classes of sqaures is already an array
// let type;
// let array = [];

//audio setup
let context = new AudioContext();
let destination = context.destination;

let oscillator = context.createOscillator();
oscillator.frequency.value = 440;

let gain = context.createGain();

oscillator.connect(gain);
gain.connect(destination);

//set this to let audio only happens once
let oscillatorStarted = true;

//volume control along with color control
volume.addEventListener("input", volumeInput);
// volume.addEventListener("change", changeHappened);


function volumeInput(){
  // get value of volumeSlider:
  let sliderValue = volume.value
  // select all sqaures
  let squares = document.getElementsByClassName("squares");
  console.log(squares);
  // get number of squares in squareContainer (the length works here because the squares is already an array here)
  let squaresNumber = squares.length;


  if (oscillatorStarted === true) {
    oscillator.start(0);
    oscillatorStarted = false;
  }

   //set random background color
   var r = 100+ volume.value*100% + Math.random()*200;
   var g = 100 + volume.value*100%+ Math.random()*200;
   var b = 100+ volume.value*100% + Math.random()*200;

   // console.log(r,g,b);

   document.body.style.backgroundColor = "rgb("+ r +","+ g +","+ b +")";
   gain.gain.value = volume.value/100;

　　//Learning here: control the number of squares on screen!
   // if there ae fewer sqaures than volumn value:
   if(squaresNumber < sliderValue){
      // loop the right number of times and creates squesr
      console.log("looping", sliderValue - squaresNumber, "times")
      for (var i = 0; i < (sliderValue - squaresNumber); i++) {
        let square = document.createElement("div");
        square.style.width = "30px";
        square.style.height = "30px";
        square.style.backgroundColor = "black";
        square.style.position = "absolute";
        square.style.bottom = Math.random()*760 + "px";
        square.style.left = Math.random()*1440 + "px";
        square.style.zIndex = "-1";
        square.className= "squares";
        square.style.animationDuration = "5.5s";
        squareContainer.appendChild(square);
      }
      // else if there are more squares than volume value:
    } else if(squaresNumber > sliderValue){
      // delete squae elements in squareContainer
      let gap  = squaresNumber - sliderValue;
      console.log("del", gap)
      //delete from the back to avoid confusion
      for (var i = gap - 1; i >= 0; i--) {
        // console.log(del, i)
        squareContainer.removeChild(squares[i]);
      }
    }
    }


   // for loop doesn't work here: the input triggers function continuously (triggers a loop continuously)
   // //volume control with the created squares
   // for (var i = 0; i < volume.value; i++) {
   //   let square = document.createElement("div");
   //   square.style.width = "30px";
   //   square.style.height = "30px";
   //   square.style.backgroundColor = "black";
   //   square.style.position = "absolute";
   //   square.style.bottom = Math.random()*760 + "px";
   //   square.style.left = Math.random()*1440 + "px";
   //   square.style.zIndex = "-1";
   //   square.className= "squares";
   //   square.style.animationDuration = "5.5s";
   //   array.push(square);
   //   squareContainer.appendChild(square);
   //   // array.splice(0,volume.value);
   // }


   // console.log(volume.value/10 + " squares are created");
//}
   // console.log(volume.value);
   //https://www.javascripttutorial.net/javascript-array-splice/

// console.log(array);

//splice method: remove while creating new squares
// function changeHappened(){
//   console.log("change happened");
// }

//classes always need a loop to give attribute to every element
for (var i = 0; i < soundType.length; i++) {
  soundType[i].addEventListener("input",soundInput);
}

function soundInput(){
  if (oscillatorStarted === true) {
    oscillator.start(0);
    oscillatorStarted = false;
  }
}




//addEventListeners to four sound type input
sine.addEventListener("input",sineInput);
square.addEventListener("input",squareInput);
sawtooth.addEventListener("input",sawtoothInput);
triangle.addEventListener("input",triangleInput);

function sineInput(){
  console.log("hi");
  oscillator.type = "sine";
}


function squareInput(){
  console.log("hi");
  oscillator.type = "square";
}

function sawtoothInput(){
  console.log("hi");
  oscillator.type = "sawtooth";
}

function triangleInput(){
  console.log("hi");
  oscillator.type = "triangle";
}

console.log(oscillator.type);

//cotrol frequency through slider
let minHz = 65;
let maxHz = 1050;
let frequencyValue = frequency.value;

//map the frequency value
function map(value, x1, y1, x2, y2){
  return (value - x1) * (y2 - x2) / (y1 - x1) + x2;
}

let mappedHertz = map(frequencyValue, 0, 100, minHz, maxHz);
console.log("mapped hertz is", mappedHertz)

oscillator.frequency.value = mappedHertz;

frequency.addEventListener("input", ()=>{
  oscillator.frequency.value = map(frequency.value, 0, 100, minHz, maxHz);
  // select the created squares
  let squares = document.getElementsByClassName("squares");
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.animationDuration = (5.5-frequency.value/20) + "s";
  }
})
