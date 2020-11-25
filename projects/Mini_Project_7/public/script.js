console.log("this is js");

let socket = io();


let userName = document.getElementById('username');
let confirmName = document.getElementById('confirmname');
let namebox = document.getElementById('namebox');
let name;
// let fileInput = document.getElementById('fileInput');
let nameStatement = document.getElementById('nameStatement');

let contentwritten =  document.getElementById('contentarea');
let content;

let emojis = document.getElementsByClassName('emoji');
let moodbox = document.getElementById('moodbox');
let mood;
let moodNow =  document.getElementById('moodNow');

let moods = ["Happy","Sad","Bored","Angry","Confused"]
let postedMood =  document.getElementById('currentmood');

let postButton = document.getElementById('post');
let postbox = document.getElementsByClassName('postbox')[0];


let moodConfirm = false;
let nameConfirm = false;

let likesIcon = document.getElementById('likesIcon');

let likesClicked = true;
let likesAppear = false;

let newLikes = [];
let newLikesNum = [];

let likesCountArray = [];

// namebox.addEventListener('keyup',()=>{
//   // Number 13 is the "Enter" key on the keyboard
//   if (event.keyCode === 13) {
//     if(namebox.value !== ''){
//       userName.innerHTML = namebox.value;
//       name = namebox.value;
//       namebox.value = '';
//       namebox.placeholder = "change your name"
//       nameConfirm = true;
//       nameStatement.innerHTML = "Your name is <span id='typedName'></span>";
//       let typedName = document.getElementById('typedName');
//       typedName.innerHTML = name;
//     } else if (namebox.value == ''){
//       alert("Please tell us your name!")
//     }
//   }
// })


//confirm mood
for (let i = 0; i < emojis.length; i++) {
  emojis[i].addEventListener('click',()=>{
    moodConfirm = true;
    moodbox.innerHTML = moods[i];
    moodNow.style.display = "block";
    mood = moodbox.innerHTML;
  })
}


// make a random ID
// from: https://gist.github.com/gordonbrander/2230317
function getNewId() {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return '_' + Math.random().toString(36).substr(2, 9);
};


//post name, mood and content
postButton.addEventListener('click',()=>{

  console.log("nameConfirm: " + nameConfirm + " moodConfirm: " + moodConfirm);
  //make sure that user has submitted the three information needed
  // if(nameConfirm == true && contentwritten.value.trim() !== '' && moodConfirm == true){
    if (namebox.value.trim()!== ''&& contentwritten.value.trim() !== ''&& moodConfirm == true) {
      console.log("info complete!");
      // moodConfirm = false;
      // nameConfirm = false;
      content = contentwritten.value;

      name = namebox.value;

      let data = {id: getNewId(), name:name, mood:mood, content:content, likes:0}
      console.log(data);

      socket.emit('message',data)
      content = '';

    } else if (namebox.value.trim()== ''){
      alert("Please pick a name :) ")
    } else if (contentwritten.value == ''){
      alert("Please say something :)")
    } else if (moodConfirm == false){
      alert("Please choose a mood :)")
    }

})



socket.on('incoming',(data)=>{

  console.log(data);
  let postedName = data.name;
  let postedMood = data.mood;
  let postedContent = data.content;
  let postedID = data.id;

  // let userinfobox = document.getElementsByClassName('users')[0];
  // let postedinfobox = document.getElementsByClassName('posts')[0];
  let contentContainer = document.createElement('div');
  contentContainer.className = "contentContainer";

  let userdiv = document.createElement('div');
  let userp = document.createElement('p');

  let contentdiv = document.createElement('div');
  let contentp = document.createElement('p');

  userdiv.className = 'userinfobox';
  userp.innerHTML = "<span id='currentmood'>" + postedMood + "</span> " + "<span id='userpostedName'>" + postedName + "</span>";
  userdiv.appendChild(userp);
  contentContainer.appendChild(userdiv);

  contentdiv.className = "postedinfobox";
  contentp.id = "postedContent";
  contentp.innerHTML = postedContent;
  contentdiv.appendChild(contentp);
  contentContainer.appendChild(contentdiv);
  postbox.appendChild(contentContainer);


  let likesBox = document.createElement('div');
  let newlikesNumber = document.createElement('p');
  let newlikesIcon = document.createElement('img');

  newlikesNumber.id = postedID + "_count";

  newlikesNumber.innerHTML = "0";

  likesBox.className = 'likesBox';
  // newlikesNumber.id = 'likes';
  newlikesNumber.style.fontSize = "12px";
  newlikesNumber.style.float = "right";
  newlikesNumber.style.margin = "0";
  newlikesNumber.style.display = "inline-block";

  newlikesIcon.id = 'likesIcon';
  newlikesIcon.src= "good.png";
  likesBox.appendChild(newlikesNumber);
  likesBox.appendChild(newlikesIcon);
  postbox.appendChild(likesBox);

 likesBox.addEventListener("click", ()=>{
   // if(likesAppear == false){
     socket.emit('iLiked',postedID)
     // likesAppear = true;
   // }
   // console.log("liked message", postedID)
 })

})



//https://gist.github.com/companje/b95e735650f1cd2e2a41

   // function b64(e){
   //    let t="";var n=new Uint8Array(e);
   //    let r=n.byteLength;
   //    for(let i=0;i<r;i++){
   //      t+=String.fromCharCode(n[i])
   //    }
   //    return window.btoa(t)
   //  }

    // window.addEventListener('load', ()=>{

    // socket.on('imageConversionByClient', function(data) {
    //   if (likesAppear == true) {
    //     console.log("image data: " , data);
    //
    //     let likesBox = document.createElement('div');
    //     let newlikesNumber = document.createElement('p');
    //     let newlikesIcon = document.createElement('img');
    //
    //     likesBox.className = 'likesBox';
    //     newlikesNumber.id = 'likes';
    //     newlikesNumber.style.fontSize = "12px";
    //
    //     newlikesIcon.id = 'likesIcon';
    //     newlikesIcon.setAttribute("src","data:image/png;base64,"+b64(data.buffer));
    //
    //     //push it to an array so that I can control each of those created elements
    //     newLikesNum.push(newlikesNumber)
    //     console.log(newLikesNum);
    //     newLikes.push(newlikesIcon);
    //     console.log(newLikes);
    //
    //     likesBox.appendChild(newlikesNumber);
    //     likesBox.appendChild(newlikesIcon);
    //     postbox.appendChild(likesBox);
    //
    //     for (let i = 0; i < newLikes.length; i++) {
    //       newLikes[i].addEventListener('click',()=>{
    //         if(likesClicked === true){
    //           let likesCount = 0;
    //           likesCountArray.push(likesCount);
    //
    //           for (let i = 0; i < likesCountArray.length; i++) {
    //             likesCountArray[i]+=1;
    //           }
    //
    //           console.log(likesCountArray);
    //           socket.emit('likes',likesCountArray)
    //           // likesClicked = false;
    //         }
    //       })
    //     }
    //
    //
    //   }
    //
    // })

    // socket.on('likesComing',(likesCountArray)=>{
    //   console.log(likesCountArray);
    //   for (let i = 0; i < newLikesNum.length; i++) {
    //     newLikesNum[i].innerHTML = likesCountArray[i];
    //   }
    // })

    socket.on('someoneLiked', (postedID)=>{
      console.log("simeones likes", postedID);
      let element = document.getElementById(postedID+"_count");
      if(element!=undefined){
        let currentValue =  Number(element.innerHTML);
        element.innerHTML = currentValue+1;
      }
    })

// $(document).ready(()=> {
//
//

//https://github.com/mervick/emojionearea
//https://www.youtube.com/watch?v=3JrBdurwlXo
// $(document).ready(function() {
//    $("contentarea").emojioneArea({
//      pickerPosition:"bottom"
//    });
//  });

// https://www.coursera.org/lecture/duke-programming-web/upload-and-display-an-image-w74TW
