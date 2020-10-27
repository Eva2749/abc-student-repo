let button = document.getElementById("button");
let valueDisplay = document.getElementById("value");

let currentValue = 0;

button.onlick = ()=>{
  currentValue+=1;
  valueDisplay.innerHTML = currentValue;

  chrome.runtime.sendMessage({type:"increasedValue"})

}

//get current value from background script
chrome.runtime.sendMessage({type:"getCurrentValue"},function(response){
  console.log("response is", response);
  currentValue = response.value;
  valueDisplay.innerHTML = currentValue;
});
