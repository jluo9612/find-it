var isFound = false;
var snd = new Audio("file.wav"); // buffers automatically when created

function popUp () {
  isFound = true;
}

while (!isFound) {
    var delay=5000; //5 seconds
      
    setTimeout(function() {
    //your code to be executed after 1 second
    document.body.style.backgroundImage = "url('../assets/scaryface2.jpg')";
    snd.play();
    }, delay);
}

if (isFound) {
  document.body.style.backgroundImage = "url('../assets/scaryface.png')";
  snd.play();
  
}