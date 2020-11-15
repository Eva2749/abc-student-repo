console.log("this is server js");

//https://expressjs.com/en/starter/hello-world.html
//equivalent to include a library: requess express
const express = require('express') //get express code from node_modules (where it was installed)
const app = express()
const port = 3000

//every time requested, check if the folder exists
app.use(express.static('public'))

//"/" route
app.get('/', (req, res) => {
  console.log(req.query);
  // console.log("Someone requests /");
  // res.send('Hello World!') // shown on the browser
  res.sendFile(__dirname + '/public/index.html');
  //dirname is a variable that holds the absolute path of the project
})

app.get('/public', (req, res) => {
  let time = req.query.time;
  if(time == "day"){
    res.send('Hi this is day')
  }else if(time == "night"){
    res.send("Time to sleep!")
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
