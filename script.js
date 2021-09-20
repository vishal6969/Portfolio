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