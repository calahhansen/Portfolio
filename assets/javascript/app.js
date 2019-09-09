console.log("js check")
var i = 0;
var txt = '- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -';
var speed = 50;

function straightStitch() {
  if (i < txt.length) {
    document.getElementById("sewing line").innerHTML += txt.charAt(i);
    i++;
    setTimeout(straightStitch, speed);
  }
}