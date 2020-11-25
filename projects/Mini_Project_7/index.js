//https://socket.io/get-started/chat/
let express = require('express')
var app = express();
var http = require('http').createServer(app);
let fs = require('fs');
let io = require('socket.io')(http);

// let likesCountArray = [];

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

//general event listeners for any socket connection
io.on('connection', (socket) => {
  //code here is per connection
  console.log('a user connected',socket.id);

  //for each connection we establish an (event) listener

  socket.on("message",(data)=>{
    console.log(data);
    //https://socket.io/docs/v3/emit-cheatsheet/
    io.emit("incoming", data)
    //https://gist.github.com/companje/b95e735650f1cd2e2a41
      fs.readFile('good.png', (err, data)=>{
        io.emit('imageConversionByClient', { image: true, buffer: data });
        io.emit('imageConversionByServer', "data:image/png;base64,"+ data.toString("base64"));
      })
  })

  // socket.on('likes',(likesCountArray)=>{
  //   console.log(likesCountArray);
  //   io.emit('likesComing',likesCountArray)
  // })

  socket.on("iLiked",(postedID)=>{
    console.log(postedID);
    io.emit('someoneLiked',postedID);
  })



})




http.listen(3600, () => {
  console.log('listening on *:3600');
})
