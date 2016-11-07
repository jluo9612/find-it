var delay=10000; //1 second

setTimeout(function() {
  //your code to be executed after 1 second
  document.body.style.backgroundImage = "url('../assets/scaryface.png')";
  var snd = new Audio("file.wav"); // buffers automatically when created
  snd.play();
}, delay);


function popUp () {
  document.body.style.background = "url('../assets/scaryface.png')";
  var snd = new Audio("file.wav"); // buffers automatically when created
  snd.play();
}