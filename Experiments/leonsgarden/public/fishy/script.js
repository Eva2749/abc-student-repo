console.log("this is fishy page");

let button = document.getElementById("button");
let secretInput = document.getElementById("secret");

button.addEventListener("click", ()=> {
  let secret = secretInput.value;
  window.location.href = "/secret?word=" + secret;
})
