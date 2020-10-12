let container = document.getElementById("container");
// querySelector only selects the first input,instead use querySelectorall
// let myText = document.querySelector("textInput");
let form = document.querySelector("form");
let textInput = document.getElementById("textInput");
let myText = document.querySelectorAll(".input")[1];

let mousedown = false;
let mousemove = false;

//eyeballs movement
let eyeballs = document.getElementsByClassName("ball");

//addEventListener:mousemove mouseup mousedown
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onmousedown_addeventlistener
container.addEventListener("mousedown", function(event) {
  mousedown = true;
  console.log("mouse is down, mousedown=", mousedown);
  addstars1(event);
})

// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onmousedown
container.addEventListener("mouseup", () => {
  mousedown = false;
  console.log("mouse is up, mousedown=", mousedown);
})


//mousemove event
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onmousemove_addeventlistener
container.addEventListener("mousemove", function(event) {
  //play audio
  let starAudio = document.getElementById("starAudio");
  starAudio.play();
  mousemove = true;
  // if (mousedown === true && mousemove === true) {
  //   console.log("ready to add stars!");
  //   //if use function, you need a name for that; that's why the ()=> is convenient!
  //   addstars1(event);
  //   // console.log("event could happen now");
  // } else
  if (mousedown === false && mousemove === true) {
    addstars2(event);
  }

  //eyeball move event
  // get the percentage of the cursor position and translate it into percentage in which eyes move accordingly to the mouse percentage
  let x = event.clientX * 100 / window.innerWidth + "%";
  let y = event.clientY * 100 / window.innerHeight + "%";
  //eventX(Y) gets the horizontal(vertical)
  // console.log(x, y);

  for (var i = 0; i < 2; i++) {
    eyeballs[i].style.left = x;
    eyeballs[i].style.top = y;
    eyeballs[i].style.transform = `translate(${-x},${-y})`;
  }

  //input fade in and value change event
  setTimeout(() => {
    fadein();
  }, 2000)

  // setTimeout(() => {
  //   input.value = "Keyboard, give me something to eat!";
  // }, 10000)

  setTimeout(()=>{
    input.style.display = "none";
    textInput.style.display = "block";
  },13000)

  // setTimeout(() => {
  //   form.reset();
  // },12000)
  //can't use here as the value would be overwritten when mouse move again
  // setTimeout(() => {
  //   input.value = "Type in something";
  // }, 16000)
})


//create stars on screen WITHOUT remove function
function addstars1(event) {
  var x = event.clientX;
  var y = event.clientY;
  let stars = document.createElement("img");
  stars.src = "../images/star.gif";
  stars.style.position = "absolute";
  stars.style.left = (x - 5) + "px";
  stars.style.top = (y - 5) + "px";
  stars.style.width = "40px";
  stars.style.height = "auto";
  stars.className = "starsCollection";
  container.appendChild(stars);
  console.log("hi");
}


//create stars on screen with remove function
function addstars2(event) {
  var x = event.clientX;
  var y = event.clientY;
  let stars = document.createElement("img");
  stars.src = "../images/star.gif";
  stars.style.position = "absolute";
  stars.style.left = (x - 5) + "px";
  stars.style.top = (y - 5) + "px";
  stars.style.width = "40px";
  stars.style.height = "auto";
  stars.className = "starsCollection";
  container.appendChild(stars);

  //remove stars
  setTimeout(() => {
    stars.remove();
  }, 500)
}



//make the input to fade in
//https://www.geeksforgeeks.org/how-to-add-fade-in-effect-using-pure-javascript/
function fadein() {
  setInterval(() => {
    let opacity = Number(window.getComputedStyle(input).getPropertyValue("opacity"));
    if (opacity < 1) {
      opacity = opacity + 0.005;
      input.style.opacity = opacity;
    } else {
      clearInterval(0);
    }
  }, 200)
}


// input happened, type in things
// for it to eat

//essentially fail because there are two inputs inside the form
form.addEventListener("submit", typeIn);

function typeIn() {
  //cancel the default action so that it will occur only when you enter
  event.preventDefault();
  //will go to the next page
  let newWindow = window.open("../Page5_Squares/index.html", "_self");

  //from https://www.youtube.com/watch?v=mq6vlYmh_AE
  //Send value to the next Page
  localStorage.setItem("myText",myText.value);
  window.document.location = "../Page5_Squares/index.html";
  // newWindow.getElementById("text").innerHTML = "hey";
  // window.open("../Page5_Squares/index.html?inputtext" + input.value, "_self")；
 }


//https://www.kirupa.com/html5/press_and_hold.htm
// let pressHoldEvent = new CustomEvent("pressHold");
//
// container.addEventListener("pressHold",function(event) {
//   myFunction4(event);
// })

// //when mouse is moving

// let mousePressed = false;

//when mouse is pressed/down
// function myFunction2(e) {
//    mousePressed = true;
//    console.log(mousePressed);
// }
