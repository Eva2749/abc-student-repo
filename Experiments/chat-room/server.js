
//https://socket.io/get-started/chat/
let express = require('express')
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

//general event listeners for any socket connection
io.on('connection', (socket) => {
  //code here is per connection
  console.log('a user connected',socket.id);

  //for each connection we establish an event listener


  //for when disconnected
  socket.on('disconnect', () => {
   console.log('user disconnected',socket.id);
 });

  socket.on("message",(data)=>{
    console.log(data);
    //https://socket.io/docs/v3/emit-cheatsheet/
    io.emit("incoming", data)
  })


});



http.listen(3300, () => {
  console.log('listening on *:3000');
});
