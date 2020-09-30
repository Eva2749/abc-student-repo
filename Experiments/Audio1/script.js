let on = document.getElementById("on");
let off = document.getElementById("off");

let context = new AudioContext();
console.log(context);

let oscillator = context.createOscillator();
oscillator.type = "triangle";
oscillator.frequency.value = 440;

let gain = context.createGain();
let oscillatorStarted = false;

oscillator.connect(gain);
gain.connect(context.destination);

on.addEventListener("click", ()=>{
  if (oscillatorStarted = false){
    oscillator.start(0);
    gain.gain.value = 1;
    oscillatorStarted = true;
  }
})

off.addEventListener("click", ()=>{
  // oscillator.stop(0);
  gain.gain.value = 0;
})
