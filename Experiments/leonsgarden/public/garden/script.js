console.log("garden yaya");
let garden = document.getElementById("garden");

let lookButton = document.getElementById('look');
let giftInput = document.getElementById('gift');
let sendGift =  document.getElementById('sendGift');

sendGift.addEventListener('click',()=>{
  let gift = giftInput.value;
  fetch('/gift?gift=' + gift);
  giftInput.value = "";
})

// function receivedAllGifts(data){
//   console.log(data);
// }

// function decode(data){
//   return data.json();
// }
function placeGift(gift){
  let p = document.createElement('p');
  p.innerHTML = gift;
  p.style.position = "absolute";
  p.style.left = Math.random()*window.innerWidth + "px";
  p.style.top = Math.random()*window.innerHeight + "px";
  garden.appendChild(p);
}

function placeGifts(gifts){
  garden.innerHTML = "";
  gifts.forEach(placeGift);
  // for (let i = 0; i < gifts.length; i++) {
  //   placeGift(gifts[i]);
  // }
}

lookButton.addEventListener("click", ()=>{
  console.log("getting gifts");
  fetch('/getGifts')
   .then(data => data.json()) //this is to find the json response from server
   .then(data => {
     console.log("decoded:", data);
     let gifts = data.content;
     placeGifts(gifts);
   }); // could find the json now!
})
