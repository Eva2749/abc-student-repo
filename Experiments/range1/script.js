let range = document.getElementById("myRange");
let valueElement = document.getElementById("ValueElement");

range.addEventListener("input",inputHappened);

function inputHappened(){
  console.log("input happened",range.value);
  valueElement.innerHTML = range.value;
  valueElement.style.left = range.value +"px";
}

function changeHappened(){
  console.log("change happened", range.value);
  valueElement.innerHTML = range.value;
}

range.addEventListener("change", changeHappened)
//dont actually need change here, but could see the difference in console log about the function
//input generates as we slide along it while change only take value when users stop at a certain point
