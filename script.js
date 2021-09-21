// welcome message Animation
var message = "<h1>Hey There👋</h1><h2>Welcome to My world.</h2><h2>Explore it in your own way...</h2><h2>And if you like it,</h2><h2>I can create one for you as well😁</h2>";
var temp = "";
var div = document.querySelector(".welcome");
var index = 0;

function welcome(){
    if(index >= message.length) {
        clearInterval(interval);
        div.innerHTML = temp;
        return;
    }
        temp += message[index];
        div.innerHTML = temp+"|";
        index++; 
}

let interval = setInterval(welcome,25);

//project gallery
var arr = ["https://vishal6969.github.io/Game-Zone",
"https://vishal6969.github.io/Paint",
"https://vishal6969.github.io/rgb-game",
"https://vishal6969.github.io/To-Do-List",
"https://vishal6969.github.io/canvas_clock"];

var frame = document.querySelector("iframe");
var index1 = 0;

//function to set url of frames
function urlSetter(i) {
    if(i < 0 || i >= arr.length) {
        return;
    }
    frame.src = "";
    frame.src = arr[i];
    index1 = i;
}
urlSetter(index1);

//functions to manipulate frames
function left() {
    urlSetter(index1-1);
}

function right() {
    urlSetter(index1+1);
}

//function to prevent default operations
document.querySelector("#btn1").addEventListener("mousedown",function(e){
    e.preventDefault();
});
document.querySelector("#btn2").addEventListener("mousedown",function(e){
    e.preventDefault();
});
