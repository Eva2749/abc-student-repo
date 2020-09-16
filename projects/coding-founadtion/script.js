


function create(){
  var x=document.getElementById("myText").value;
  document.getElementById("number").innerHTML = "You have just created " + x + " squares!";
  //to record the input value and let the user know how many squares has just been created
  for (var i = 0;i < x;i++){
    var el = document.createElement("div");
    var red = Math.random() * 255;
    var green = Math.random() * 255;
    var blue = Math.random() * 255;
    el.style.backgroundColor = "rgb("+ red +","+ green +","+ blue +")";
    //to vary the color of the new div
    el.style.width = "80px";
    el.style.height = "80px";
    el.style.margin = "10px";
    // el.style.position = "relative";
    // el.style.top = "250px";
    // el.style.left = 100 + i*100+ "px";
    //A quick note: the codes above conflict with flexbox function because the position is specified
    document.getElementById("container2").appendChild(el);
    //this is to make new elements appear on the browser
  }
}
