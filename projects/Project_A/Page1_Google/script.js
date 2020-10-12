let input = document.getElementById("input");
let form = document.getElementById("form");
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_trigger_button_enter
// input.addEventListener("keyup",function(event) {
//   window.open("../Page2_404/index.html", "_self");
//  })

//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onkeyup_addeventlistener
// input.addEventListener("keyup", () => {
//   console.log(event);
//   if (event.keyCode === 13) {
//     console.log(event);
//     // window.open("../Page2_404/index.html", "_self");
//   }
// })

form.addEventListener("submit",()=>{
  // if (event.keyCode === 13) {
  // Cancel the default action
  event.preventDefault();
  console.log("hi");
  window.open("../Page2_404/index.html", "_self");
// }
})

// input.addEventListener("search",()=>{
//   console.log(input);
//   window.open("../Page2_404/index.html", "_self");
// })
