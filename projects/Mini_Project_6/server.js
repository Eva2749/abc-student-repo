console.log("this is server js");

const express = require('express')
const app = express()
const port = 3000

const correctAnswer = 6;

let answerCollection = [];
let correctAnswers = ["25", "14","23","-1","-3"];

app.use(express.static('public'))

app.get('/answer',(req,res)=>{
  let query = req.query;
  let answer = query.word;
  if(answer == correctAnswer){
    console.log("Welcome to Math World");
    res.redirect('/correct');
  } else {
    console.log("Oops..This is a wrong answer");
    res.redirect('/wrong')
  }
})

app.get('/answers',(req,res)=>{
  console.log("request:",req.query)
  let answer = req.query.answer;

  // answerCollection = answers[req.query.id]

  //create an ID to record the user
  // if(answerCollection == undefined){
  //   answerCollection = []
  // }
  answerCollection.push(req.query.answer)
  console.log(answerCollection);
  // answers = JSON.parse(answers)
  // answers["answer1"] = answer1;
  // answers = JSON.parse(JSON.stringify(answers))
})

let correctNumbers = [];


app.get('/getResults',(req,res)=>{
  console.log("show the results");
  arraysEqual();//call function
  console.log(correctNumbers);

  //https://stackoverflow.com/questions/31398984/how-to-convert-array-into-json-object
  //res only accepts string and arrays should be converted to a json object
  let jsonObj = {};
  for (let i = 0 ; i < correctNumbers.length; i++) {
      jsonObj["answer" + (i+1)] = correctNumbers[i];
  }
  console.log(jsonObj);
  res.json(jsonObj)
})

//find same values in two arrays
function arraysEqual(){
  for (let i = 0; i < answerCollection.length; i++) {
    for (let j = 0; j < correctAnswers.length; j++) {
      if(answerCollection[i] === correctAnswers[j]){
        correctNumbers.push(answerCollection[i])
      }
    }
  }
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
