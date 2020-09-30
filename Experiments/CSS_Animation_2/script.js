let button = document.getElementById("button");
let box = document.getElementById("box");
let boxAngle = 0;


button.addEventListener("click",()=>{
  box.style.transform = "rotate("+boxAngle+"deg)";
  boxAngle = boxAngle + 360;
  console.log(boxAngle);
})
