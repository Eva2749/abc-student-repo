console.log("hi this is background js");

//set initial value of four seasons
let seasonClicks = {
  "spring": 0,
  "summer": 0,
  "autumn": 0,
  "winter": 0
};


//store the increased seasons clicks value to storage
const setClicks = () => {
  chrome.storage.local.set(seasonClicks, function() {
    console.log("setting current clicks to local storage");
    console.log(seasonClicks);
  });
}

const getClicks = () => {
  chrome.storage.local.get(seasonClicks, function(result) {
    console.log("getting clicks from local storage");
    console.log(result.spring + "," + result.summer + "," + result.autumn + "," + result.winter);
    seasonClicks = result;
    console.log(seasonClicks);
  })
}

const getFavoriteSeason = (clicks) => {
  //convert object to array
  //https://www.javascripttutorial.net/object/convert-an-object-to-an-array-in-javascript/#:~:text=To%20convert%20an%20object%20to%20an%20array%20you%20use%20one,entries()%20.
  let tempArray = Object.entries(clicks);

  //https://stackoverflow.com/questions/4020796/finding-the-max-value-of-an-attribute-in-an-array-of-objects
  const max = tempArray.reduce((prev, current) =>
    (prev[1] > current[1]) ? prev : current
  );
  return {
    "season": max[0],
    "clicks": max[1]
  }
};

// get clicks from local storage when chrome starts up
getClicks();

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  seasonClicks[message.type]++;
  console.log(message.type, seasonClicks[message.type]);
  // let seasonClicksArray = seasonClicks[message.type]
  setClicks();
  let favoriteSeason = getFavoriteSeason(seasonClicks);
  console.log(favoriteSeason);
  sendResponse(favoriteSeason);
});






//   //create an array of season click values
//   let seasonClick = new Array();
//   seasonClick.push(springClick, summerClick, autumnClick, winterClick);
//   console.log(seasonClick);
//
//   //create an array that contains the season strings (name)
//   // let season = ["Spring", "Summer", "Autumn", "Winter"];
//
//   let favouriteSeason;
//   let clickNumber = 0;
//
//   //find the highest number clicked and the favourite season
//   //https://stackoverflow.com/questions/16095301/finding-highest-values-amongst-javascript-letiables
//   for (let i = 0; i < seasonClick.length; i++) {
//     if (seasonClick[i] > clickNumber) {
//       clickNumber = seasonClick[i];
//       favouriteSeason = season[i];
//     }
//     console.log(clickNumber, favouriteSeason);
//   }
//   sendResponse({
//     season: favouriteSeason
//   });
//
// })
