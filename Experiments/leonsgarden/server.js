const express = require('express')
const app = express()
const port = 3000
//the number should above 3000
const secret = "paperclip";

let gifts =[];

app.use(express.static('public'))

app.get('/secret', (req,res)=>{
  let query = req.query;
  let guess = query.word;
  if(guess == secret){
    console.log("let them go into the garden");
    // res.sendFile(__dirname + '/public/garden/index.html')
    //public is not static now
    //https://expressjs.com/en/api.html#res.redirect
    res.redirect('/garden');
  }else {
    console.log("something is fishy");
    res.redirect('/fishy');
  }
})

app.get('/gift',(req,res)=>{
  let gift = req.query.gift;
  console.log("received:", gift);
  gifts.push(gift);
  console.log("all the things I have", gifts);
  console.log("------");
})

app.get('/getGifts',(req,res)=>{
  console.log("someone asks for gifts");
  res.json({content:gifts,sender:"the garden gods"});
  // res.send(gifts);
})


// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html')
// })
//
// app.get('/script.js', (req,res)=>{
//   res.sendFile(__dirname + '/script.js')
// })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
