let button = document.getElementById("button");
let input = document.getElementById("input");

button.addEventListener("click",()=>{
  let answer = input.value;
  console.log(answer);
  window.location.href = "/answer?word=" + answer;
})
