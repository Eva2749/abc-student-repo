let input = document.querySelector("input");
console.log(input);
let button1 = document.getElementById("button1");


button1.addEventListener("click", () => {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function(tabs) {
    let inputValue = input.value;
    chrome.tabs.sendMessage(tabs[0].id, inputValue);
  });


  //https://developer.chrome.com/apps/storage
  chrome.storage.sync.set({
    NEW_TAB_TEXT: input.value
  }, function() {
    console.log('Input is set to ' + input.value);
  });


})


// let myInput = chrome.storage.sync.get(['myInput']);
//
// console.log(myInput);
