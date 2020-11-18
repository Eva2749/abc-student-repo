console.log("this is script for the math world");

//assign an user ID
let id = Math.round( Math.random() * 1000000000 );
console.log("id=", id);

let input = document.getElementById("input");
let confirm = document.getElementById("confirm");
let result = document.getElementById("result");
let questions = document.getElementById("questions");
let inputs = document.getElementById("inputs");
let replaceInput = document.getElementById("replaceInput");
let showResult =  document.getElementById("showResult");

let buttonClicked = 0;

let correctNum = document.getElementById("correctNumber");
let correctAns = document.getElementById("correctAnswers");


confirm.addEventListener("click", ()=>{

  buttonClicked +=1;

  if (buttonClicked == 1){
    //function1 send value to server
    //set answer as a local variable so that it sends value to server before gets updated ("")
    checkAnswer();
    //function2 jump to the next question
    input.value = "";
    questions.innerHTML = "Q1. 13 26 _ 25 15 24"
  } else if (buttonClicked == 2){
    checkAnswer();
    input.value = "";
    questions.innerHTML = "Q2. 3 5 9 15 _ 33"
  } else if (buttonClicked == 3){
    checkAnswer();
    input.value = "";
    questions.innerHTML = "Q3. -4 3 _ 12 -6 2"
  } else if (buttonClicked == 4){
    checkAnswer();
    input.value = "";
    questions.innerHTML = "Q4. 7 9 -1 5 _ 4"
  } else if (buttonClicked == 5){
    checkAnswer();
    inputs.style.display = "none"
    replaceInput.style.display = "block";
  }

})

  function checkAnswer(){
    let answer = input.value;
    console.log(answer);
    let url = '/answers?questionId=1&answer=' + answer + "&id=" + id
    fetch(url)
    .then(data => data.json())
    .then(data =>{
      console.log("decoded:", data);
      let result = data.result;
      console.log(result);
     })
    }

   result.addEventListener("click", ()=>{
     console.log("see the result");
     fetch('/getResults')
    .then(data => data.json())
    .then(data => {
      console.log("correct answer collection: ", data);
      let correctAnswers = Object.keys(data);
      //https://www.encodedna.com/javascript/practice-ground/default.htm?pg=object_keys_method_in_javascript
      //showing array objects using js
      let correctNumber = correctAnswers.length;
      console.log("You've got " + correctNumber + " correct answers");

      correctNum.innerHTML = correctNumber ;
      correctAns.innerHTML =  "Question " +  Object.keys(correctAnswers).join(",");

    })

    showResult.style.display = "block";
  })
