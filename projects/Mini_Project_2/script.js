let phoneOnDesk = document.getElementById("phoneOnDesk");
let phone = document.getElementById("phone");
let wechat = document.getElementById("wechat");
let weibo = document.getElementById("weibo");
let taobao = document.getElementById("taobao");
let netease = document.getElementById("netease");
let ins = document.getElementById("ins");
let gmail = document.getElementById("gmail");

// let colorChange = document.getElementsByClassName("colorChange");
// console.log(colorChange);

let sw = window.screen.width;
let time = document.getElementById("time");

//click the phone on desk to open it
phoneOnDesk.addEventListener("click", ()=>{
  phone.style.display = "block";
})


//time function, from https://www.w3schools.com/howto/howto_js_countdown.asp
//set the time counting down to
var countDownDate = new Date("Oct 8, 2020 12:00:15").getTime();
let gap = 1000;
var x  = setInterval (countDown, gap);
function countDown(){
  //get today's date and time
  var now = new Date().getTime();
  var distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("time").innerHTML = "Time Left: " + days + "d " + hours + "h "
 + minutes + "m " + seconds + "s ";

 // If the count down is finished, write some text
 if (distance < 0) {
   clearInterval(x);
   document.getElementById("time").innerHTML = "No Time Left! Hand in your homework now!";
 }
}


//Open windows function
wechat.addEventListener("click", openManyWindows1);
weibo.addEventListener("click", openManyWindows2);
taobao.addEventListener("click", openManyWindows3);
netease.addEventListener("click", openManyWindows4);
ins.addEventListener("click", openManyWindows5);
gmail.addEventListener("click", openManyWindows6);

//change time text color
// for (var i=0; i<colorChange.length;i++){
//   colorChange[i].addEventListener("click", changeTextColor);
// }

// let color = false;
//
// function changeTextColor(){
//   color = true;
// }
//
// if (color === true){
//   setTimeout(function(){
//     time.style.animationName = "colorChange";
//     time.style.animationDuration = "0.2s";
//     time.style.animationIterationCount = "6";
//     console.log("warnings");
//   },4000);
//   color = false;
// }


// Open wechat windows

function openManyWindows1(){

  for (let i=0; i<4;i++){
    openWindow1();
  }
}

function openWindow1(){
  console.log("Now a window should open");
  let randomX = Math.random()* (sw-400);
  let randomY = Math.random()* (sw-200);
  console.log(randomX,randomY);
  let wechatOpen = window.open("New_Windows/wechat1.html","_blank","toolbar=yes,scrollbars=yes,resizable=yes,width=200,height=300,left = "+randomX+",top = "+randomX+"");

  // let left = Math*random()*50;
  // let top = Math*random()*20;

  setInterval(()=>{
    wechatOpen.moveBy(0,1);
  },10)


  // wechatOpen.style.animationName = "move";
  //
  // wechatOpen.style.className = "wechatWindow";
  setTimeout(function(){
    wechatOpen.close();
    time.style.animationName = "colorChange1";
    time.style.animationDuration = "0.2s";
    time.style.animationIterationCount = "4";
    console.log("warnings");
    },4000);
}



// Open weibo windows
function openManyWindows2(){
  for (let i=0; i<9;i++){
    openWindow2();
  }
}

function openWindow2(){
  let randomX = Math.random()*(sw-400);
  let randomY = Math.random()*(sw-400);
  console.log(randomX,randomY);

  let weiboOpen = window.open("https://weibo.com/login.php","_blank","width=200,height=200,left = "+randomX+",top = "+randomX+"");

  setInterval(()=>{
    weiboOpen.moveBy(0,-1);
  },10)

  setTimeout(function(){
    weiboOpen.close();
    console.log("Now the weibo is closed");
    time.style.animationName = "colorChange2";
    time.style.animationDuration = "0.2s";
    time.style.animationIterationCount = "4";
    console.log("warnings");
  },6000);
}


//open taobao windows
function openManyWindows3(){
  for (let i=0; i<6;i++){
    openWindow3();
  }
}

function openWindow3(){
  let randomX = Math.random()*(sw-200);
  let randomY = Math.random()*(sw-300);
  console.log(randomX,randomY);

  let taobaoOpen = window.open("https://www.taobao.com/","_blank","width=200,height=200,left = "+randomX+",top = "+randomX+"");

  setInterval(()=>{
    taobaoOpen.moveBy(1,0);
  },10)

  setTimeout(function(){
    taobaoOpen.close();
    console.log("Now the taobao is closed");
    time.style.animationName = "colorChange3";
    time.style.animationDuration = "0.2s";
    time.style.animationIterationCount = "6";
    console.log("warnings");
  },5000);
}

//open netease windows
function openManyWindows4(){
  for (let i=0; i<5;i++){
    openWindow4();
  }
}

function openWindow4(){
  let randomX = Math.random()*(sw-100);
  let randomY = Math.random()*(sw+100);
  console.log(randomX,randomY);

  let neteaseOpen = window.open("https://www.taobao.com/","_blank","width=200,height=200,left = "+randomX+",top = "+randomX+"");

  setInterval(()=>{
    neteaseOpen.moveBy(1,1);
  },10)

  setTimeout(function(){
    neteaseOpen.close();
    console.log("Now the netease is closed");
    time.style.animationName = "colorChange4";
    time.style.animationDuration = "0.2s";
    time.style.animationIterationCount = "4";
    console.log("warnings");
  },4000);
}


//open ins windows
function openManyWindows5(){
  for (let i=0; i<8;i++){
    openWindow5();
  }
}

function openWindow5(){
  let randomX = Math.random()*(sw-100);
  let randomY = Math.random()*(sw-400);
  console.log(randomX,randomY);

  let insOpen = window.open("https://www.instagram.com/?hl=en","_blank","width=200,height=100,left = "+randomX+",top = "+randomX+"");

  setInterval(()=>{
    insOpen.moveBy(1,-1);
  },10)

  setTimeout(function(){
    insOpen.close();
    console.log("Now the ins is closed");
    time.style.animationName = "colorChange5";
    time.style.animationDuration = "0.2s";
    time.style.animationIterationCount = "4";
    console.log("warnings");
  },8000);
}


//open gmail windows
function openManyWindows6(){
  for (let i=0; i<3;i++){
    openWindow6();
  }
}

function openWindow6(){
  let randomX = Math.random()*(sw-300);
  let randomY = Math.random()*(sw-400);
  console.log(randomX,randomY);

  let gmailOpen = window.open("https://mail.google.com/mail/u/0/#inbox","_blank","width=200,height=100,left = "+randomX+",top = "+randomX+"");

  setInterval(()=>{
    gmailOpen.moveBy(0,1);
  },10)

  setTimeout(function(){
    gmailOpen.close();
    console.log("Now the gmail is closed");
    time.style.animationName = "colorChange6";
    time.style.animationDuration = "0.2s";
    time.style.animationIterationCount = "4";
    console.log("warnings");
  },4000);
}
