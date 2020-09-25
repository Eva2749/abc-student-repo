//select
let button = document.getElementById("button");
console.log(button);

let sw = window.screen.width;

button.addEventListener("click",openManyWindows);

function openWindow(){
  console.log("Now a window should open");
  //https://www.w3schools.com/jsref/met_win_open.asp
  let randomX = Math.random()*(sw-400)
  let newWindow = window.open("popup.html","","width=200,height=100,left = "+randomX+",top = "+randomX+"");

  let randomTime = 5000 + Math.random()*4000;
  setTimeout(function(){
    newWindow.close();
    console.log("Now the window is closed");
  },5000);
}

function openManyWindows(){
  for (let i=0; i<5;i++){
    openWindow();
  }
}
