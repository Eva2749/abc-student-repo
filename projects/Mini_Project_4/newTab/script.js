chrome.storage.sync.get(['NEW_TAB_TEXT'], function(result) {
  console.log(result['NEW_TAB_TEXT']);
  let myInput = result['NEW_TAB_TEXT'];

  let text=document.getElementById("text");
  text.innerHTML = myInput;
  
});
