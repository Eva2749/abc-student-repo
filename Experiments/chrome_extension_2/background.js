console.log("Hi I'm background script");

let currentValue = 10;


chrome.storage.local.get(['counterValue'], function(result) {
  console.log('Value currently is ' + result.counterValue);

  if (result.counterValue === undefined) {
    currentValue = 0；
  }
});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  console.log(message);
  if (message.type === "getCurrentValue") {
    sendResponse({
      type: "currentValue",
      value: currentValue
    })
  } else if (message.type === "increasedValue") {
    currentValue += 1;


    //store the increased value to storage
    chrome.storage.local.set({
      counterValue: currentValue
    }, function() {
      console.log('Value is set to ' + counterValue);
    });
  }
})
