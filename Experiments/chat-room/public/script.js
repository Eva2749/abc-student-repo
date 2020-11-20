console.log("hi this is chatroom js");

//https://socket.io/get-started/chat/
 let socket = io();
 let namebox = document.getElementById('name');
 let chatbox = document.getElementById('chat');
 let messagebox = document.getElementById('message');
 let sendbutton = document.getElementById('send');

sendbutton.addEventListener('click', ()=>{
  console.log("clicked");
  let name = namebox.value;
  //name trim wipes out spaces
  if(name.trim() == ""){
    name = "匿名";
    namebox.vaue = "";
  }
  // console.log("name is " + name);

  let message = messagebox.value.trim();
  console.log(message);
  if(message != ""){
    //send name and message to server
    let data = {name:name, message:message}
    console.log(data);
    socket.emit('message',data)

  }
  //clear the message box when the message is sent
   messagebox.value = "";
})

 socket.on('incoming',(data)=>{
   console.log(data);
   let name = data.name;
   let message = data.message;

   let li = document.createElement("li");
   let p = document.createElement("p");
   p.innerHTML = "<span class = 'sender'>" + name + ":</span> " + message;
   li.appendChild(p);
   chatbox.appendChild(li);
   chatbox.scrollTop = chatbox.scrollHeight;
 })


 //https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
 // Execute a function when the user releases a key on the keyboard
 message.addEventListener("keyup", function(event) {
   // Number 13 is the "Enter" key on the keyboard
   if (event.keyCode === 13) {
     // Cancel the default action, if needed
     // event.preventDefault();
     // Trigger the button element with a click
     sendbutton.click();
   }
 });
