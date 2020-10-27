let images = document.getElementsByClassName("image");
let body = document.body;
let season = document.getElementById("season");

//create an array of season images
//https://stackoverflow.com/questions/8810927/showing-an-image-from-an-array-of-images-javascript
// let seasons = new Array();
//
// seasons[0] = new Image();
// seasons[0].src = "images/spring.jpg";
//
// seasons[1] = new Image();
// seasons[1].src = "images/summer.jpg";
//
// seasons[2] = new Image();
// seasons[2].src = "images/autumn.jpg";
//
// seasons[3] = new Image();
// seasons[3].src = "images/winter.jpg";

let seasons = ['spring', 'summer', 'autumn', 'winter'];

const setFavoriteSeason = (res) => {
  //respond doesn't work here
  console.log(res);
  season.innerHTML = res.season;
};

for (const season of seasons) {
  let seasonDOM = document.getElementById(season);
  seasonDOM.addEventListener("click", () => {
    chrome.tabs.query({
      active: true,
      currentWindow: true
      //this message sends to the content script
    }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        type: season
      })
    });
  console.log(season);
    //this message send to the backgruond script
    chrome.runtime.sendMessage({
      type: season
    }, setFavoriteSeason);
  })
}
