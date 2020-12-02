// https://www.npmjs.com/package/firebase

let socket = io();
let cube = document.getElementsByClassName('cube')[0];
let messageinfobox = document.getElementsByClassName('messageinfobox')[0];
let messagebox = document.getElementById('messagebox');
let sendButton = document.getElementById('send');
let infobox =  document.getElementsByClassName('infobox')[0];
let messagetitle = document.getElementById('messagetitle');
let historybox =  document.getElementById('historybox');

let clicksNumber = 0;
let messageNum = 0;
let messagesCount = document.getElementById('messagesCount');


cube.addEventListener('click',()=>{
  console.log("clicked");
  clicksNumber+=1;
  if(clicksNumber%2 == 0){
    messageinfobox.style.animationName = "popdown";
    setTimeout(()=>{
      messageinfobox.style.display = "none";
      messageinfobox.style.bottom = "-275px";
      messagetitle.innerHTML = "Leave a message here!";
    },1000)
  } else {
    messageinfobox.style.display = "block";
    messageinfobox.style.animationName = "popup";
    setTimeout(()=>{
      messageinfobox.style.bottom = "0";
    },1000)
  }
})

cube.addEventListener("mouseover",()=>{
  infobox.style.animationName = "openbox";
  setTimeout(()=>{
  infobox.style.opacity = "1";
},1000)
})

cube.addEventListener("mouseout",()=>{
  infobox.style.animationName = "closebox";
  setTimeout(()=>{
  infobox.style.opacity = "0";
},1000)
})

sendButton.addEventListener('click',()=>{
  messageNum+=1;
  messagesCount.innerHTML = messageNum;
  let messages = messagebox.value;
  let data = {messages:messages};
  socket.emit('message-from-one', data);
  messagebox.value = "";
  messagetitle.innerHTML = "Messages successfully stored!";
})

messagebox.addEventListener('keyup',()=>{
  if (event.keyCode === 13) {
    sendButton.click();
  }
})

//got the new messages from the database
socket.on('messages-incoming',(messagelist)=>{
  console.log("Got the data", messagelist);
  let keys = Object.keys(messagelist);
  console.log("The user ID's are", keys);
  for (var i = 0; i < keys.length; i++) {
    let messages = messagelist[keys[i]];
    console.log(messages.messages);
    appendMessage(messages.messages)
  }
})


socket.on('message-to-all', (data)=>{
  appendMessage(data.messages);
})

function appendMessage(message){
    let li = document.createElement("li");
    li.style.margin = "2%";
    let p = document.createElement("p");
    p.innerHTML = message;
    li.appendChild(p);

  // make sure the new messages appear on top of the previous ones:
  // from: https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/prepend
  historybox.prepend(li);
  historybox.scrollTop = 0;
}
