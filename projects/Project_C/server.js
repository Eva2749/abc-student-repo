let express = require('express');
let app = express();
let http = require('http').createServer(app);
let io = require('socket.io')(http);

let userCount = 0;
let firebase = require('firebase');
// Initialize Firebase

// "/index.html"
app.use(express.static('public'))


//connection to the database
let firebaseConfig = {
    apiKey: "AIzaSyAchvhSZ69lsBio90gHXePFgfLfg3MFXJY",
    authDomain: "abc-project-c.firebaseapp.com",
    databaseURL: "https://abc-project-c.firebaseio.com",
    projectId: "abc-project-c",
    storageBucket: "abc-project-c.appspot.com",
    messagingSenderId: "873084013315",
    appId: "1:873084013315:web:9bbc46046ee102e7efb736",
    measurementId: "G-HGKKHMGZVV"
  };

  let firebaseapp = firebase.initializeApp(firebaseConfig);
  let database = firebaseapp.database();


  let messagelistref = database.ref('messages');


io.on('connection', (socket) => {
  userCount += 1;
  console.log( userCount + " user connected");
  io.emit('new-user-count', {count: userCount});

  socket.on('disconnect', () => {
    console.log('user disconnected');
    userCount -= 1;
    io.emit('new-user-count', {count: userCount});
  });

  //get messages from the messages box
  socket.on('message-from-one', (data) => {
    //save the message to the database
    messagelistref.push(data);
    console.log("message list is", data);
    io.emit('message-to-all', data);
  })


  //get all archived messages from the database and send them to the person just connected
  messagelistref.once('value').then((snapshot)=>{
    console.log("database value is ",snapshot.val());
    let messagelist = snapshot.val();
    socket.emit('messages-incoming',messagelist);
  })
});



http.listen(3000, () => {
  console.log('listening on *:3000');
});
