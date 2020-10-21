console.log("this is content script");
let paragraph = document.getElementsByTagName("p");

//create an array of true/false
let intervalHasStarted = [];
for (var i = 0; i < paragraph.length; i++) {
  intervalHasStarted.push(false);
}

console.log(paragraph);

console.log(intervalHasStarted)

// listening for messages:
chrome.runtime.onMessage.addListener(gotMessage);

// funtion to execute when any message arrives
function gotMessage(request, sender, sendResponse){
  // request includes the actual message
  console.log(request);
  console.log("hi");

  let inputValue = request;
  console.log(inputValue);

//lessons here! Difference between var and let https://www.javascripttutorial.net/es6/difference-between-var-and-let/
//var is global but let only exists in the function
  for (let i = 0; i < paragraph.length; i++) {
    let p = paragraph[i];

    //addEventListener includes a to-do list so it can perform multiple functions at once;
    //in this case, the new input runs together with previous input
    //https://medium.com/@annapeterson89/addeventlistener-vs-onclick-which-one-should-you-draft-into-your-fantasy-football-team-16ea9ae71ee0

    // p.addEventListener("mouseover",()=>{
    //   console.log("mouse is over");
    //
    //  setInterval(()=>{
    //    p.innerHTML = inputValue;
    //    let r = Math.random()*255;
    //    let g = Math.random()*255;
    //    let b = Math.random()*255;
    //
    //    p.style.color = "rgb("+r+","+g+","+b+")";
    //  },500)
    // let index = i

   console.log(i);
    //difference between onmouseover and mouseover addEventListener
    //https://medium.com/@annapeterson89/addeventlistener-vs-onclick-which-one-should-you-draft-into-your-fantasy-football-team-16ea9ae71ee0
    p.onmouseover = () => {
      // console.log("mouse is over");
      p.innerHTML = inputValue;

      //create an array of true/false;0/1 to control an array element (paragraphs here)
      // if(corespondin value is 0){}
      if (intervalHasStarted[i] == false) {
        console.log("startinginterval")
        setInterval(() => {
          console.log("lalala");
          let r = Math.random() * 255;
          let g = Math.random() * 255;
          let b = Math.random() * 255;
          p.style.color = "rgb(" + r + "," + g + "," + b + ")";
        }, 500)

        //set it to true so that it could only exist once
        intervalHasStarted[i] = true;
      }

    };

    }

    }
