let bubbles = document.getElementsByClassName("bubble");
let fishodd = document.getElementsByClassName("fishodd");
let fisheven = document.getElementsByClassName("fisheven");
let previewodd = document.getElementsByClassName("previewodd");
let previeweven = document.getElementsByClassName("previeweven");

let counterodd = 0;
let countereven = 0;

for (let i = 0; i < bubbles.length; i++) {
  bubbles[i].addEventListener("click",()=>{
    bubbles[i].style.display = "none";
    setTimeout(()=>{
      bubbles[i].style.display = "block";
    },5000)
  })
}

setInterval(()=>{
  counterodd += 0.25;
  for (let i = 0; i < fishodd.length; i++) {
      let fishoddtop = fishodd[i].offsetTop;
      fishoddtop = fishoddtop + 2*Math.sin(counterodd);
      fishodd[i].style.top = fishoddtop + "px";
  }
},100)

setTimeout(()=>{
  setInterval(()=>{
    countereven += 0.25;
    for (let i = 0; i < fisheven.length; i++) {
        let fisheventop = fisheven[i].offsetTop;
        fisheventop = fisheventop + 2*Math.sin(countereven);
        fisheven[i].style.top = fisheventop + "px";
    }
  },100)
},1000)

for (let i = 0; i < previewodd.length; i++) {
  fishodd[i].addEventListener("mouseover",()=>{
    previewodd[i].style.animationName = "popup";
    previewodd[i].style.opacity = "1";
  })
  fishodd[i].addEventListener("mouseout",()=>{
    previewodd[i].style.animationName = "disappear";
    previewodd[i].style.opacity = "0";
  })
}

for (let i = 0; i < previeweven.length; i++) {
  fisheven[i].addEventListener("mouseover",()=>{
    previeweven[i].style.animationName = "popup";
    previeweven[i].style.opacity = "1";
  })
  fisheven[i].addEventListener("mouseout",()=>{
    previeweven[i].style.animationName = "disappear";
    previeweven[i].style.opacity = "0";
  })
}

let bigProjects = document.getElementsByClassName("bigProject");
let bigProjectsPreviews =  document.getElementsByClassName("bigProjectsPreview");

for (let i = 0; i < bigProjects.length; i++) {
  bigProjects[i].addEventListener("mouseover",()=>{
    console.log("mouseover");
    bigProjectsPreviews[i].style.display = "block";
  })
  bigProjects[i].addEventListener("mouseout",()=>{
    console.log("mouseout");
    bigProjectsPreviews[i].style.display = "none";
  })
}
