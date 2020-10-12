//send text to it
let myText = localStorage.getItem("myText");
let text = document.getElementById("text");
let eyesContainer = document.getElementById("eyesContainer");

text.innerHTML = "I like " + myText + "! Now I'm energetic :). Thank you!";

//display eyesContainer
function display(){
  //play audio
  let happyVoice = document.getElementById("happy");
  happyVoice.play();

  setTimeout(()=>{
    eyesContainer.style.opacity = "1";
  },14000)
}

//eyeball movement
let wholeContainer = document.getElementById("wholeContainer");
let eyeballs = document.getElementsByClassName("ball");

wholeContainer.addEventListener("mousemove", function(event) {

let x = event.clientX * 100 / window.innerWidth;
let y = event.clientY * 100 / window.innerHeight;

for (var i = 0; i < 2; i++) {
  eyeballs[i].style.left = x*0.9 + "%";
  eyeballs[i].style.top = y*0.36 + "%";
  eyeballs[i].style.transform = `translate(${-x},${-y})`;
 }
})


range.addEventListener("input",starsManipulate)
//create stars when there's not enough

function starsManipulate(){

  //manipulate stars in the starsContainer
  let range = document.getElementById("range");
  let squaresContainer = document.getElementById("squaresContainer")

  let rangeValue = range.value;
  let stars = document.getElementsByClassName("squares");
  // let starsNumber = stars.length;
  // let starsArray = [];
  let starsNumber = stars.length;

  // console.log(starsNumber);

  if (starsNumber < rangeValue){
    for (var i = 0; i < (rangeValue - starsNumber); i++) {
      let square = document.createElement("div");
      square.style.width = "40px";
      square.style.height = "40px";
      square.style.backgroundColor = "yellow";
      square.style.position = "absolute";
      square.style.bottom = Math.random()*90 + "%";
      square.style.left = Math.random()*90 + "%";
      square.className= "squares";
      square.style.animationDuration = 1 + Math.random()*3 + "s";

      //assign random color
      let r = Math.random()*255;
      let g = Math.random()*255;
      let b = Math.random()*255;
      square.style.backgroundColor = "rgb("+r+","+g+","+b+")";
      squaresContainer.appendChild(square);
      // starsArray.push(square);
     }
     //delete stars when there're extra
   } else if (starsNumber > rangeValue){
     //remove additional stars
     let gap = starsNumber - rangeValue;
     for (var i = gap-1 ; i>=0; i--) {
       squaresContainer.removeChild(stars[i]);
     }
   }

   //when clicking change the layout of the whole stars
   //a question here: how to change the particular position of a square? i.e. how to spefify the square I'm clicking on?
   for (var i = 0; i < stars.length; i++) {
     stars[i].addEventListener("click", changePosition)
   }

   console.log(stars);

   function changePosition(){
     let starAudio = document.getElementById("starAudio");
     starAudio.play();
     for (var i = 0; i < stars.length; i++) {
       stars[i].style.left = Math.random()*90 + "%";
       stars[i].style.top = Math.random()*90 + "%";
     }
   }
 }

 //the google icon
 let google = document.getElementsByClassName("google");
 for (var i = 0; i < google.length; i++) {
   google[i].addEventListener("click", openGoogle);
 }

function openGoogle(){

  let wholeContainer = document.getElementById("wholeContainer");
  wholeContainer.remove();

  //show text in typewritter effects
  let line1 = document.getElementById ("line1");
  let line2 = document.getElementById ("line2");
  let line3 = document.getElementById ("line3");
  let line4 = document.getElementById ("line4");
  let line5 = document.getElementById ("line5");
  let line6 = document.getElementById ("line6");
  let line7 = document.getElementById ("line7");

  line1.style.animationName = "type1";
  line2.style.animationName = "type2";
  line3.style.animationName = "type2";
  line4.style.animationName = "type2";
  line5.style.animationName = "type2";
  line6.style.animationName = "type2";
  line7.style.animationName = "type2";


  //I'm a happy & sad computer
  let sad = document.getElementById("sadComputer");
  setTimeout(()=>{
    sad.play();
  },10000)

  //countdown
  let countDown = document.getElementById("countDown");
  let background = document.getElementById("background");
  let midground = document.getElementById("midground");
  let foreground = document.getElementById("foreground");
  let body = document.body;

  setTimeout(()=>{
    countDown.play();
    background.remove();
    midground.remove();
    foreground.remove();
    body.style.animationName = "blinking";
    // body.style.animationName = "blinking";
  },23000)

  //open google
  setTimeout(()=>{
    //need the http or it will assume it as a local file
    window.open("http://google.com","_self");
  },28000)

  // starry background
  let sky = document.getElementsByClassName("starry");
  for (var i = 0; i < sky.length; i++) {
    sky[i].style.animationName = "STAR-MOVE";
  }
}
