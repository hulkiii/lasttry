var i = 0;

var txt1 =
  " Hi Cutie.....!  <<               Now I wan't to say something special to you. <<<                So , Please read everything carefully...!                                                                           > When I saw you for the first time..! <You appear to be something special, and my inner spirit encourages me to speak with you..  <<                                      > Everything about you is so special...!               << I am somewhat nervous Because I haven't said these words to anyone and I won't say to anyone in future...!                                                     > Beyond everything else in this world, I love my parents...!                      <<  You are the only person I love just as much as my parents right now....!";
var speed = 65;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
// function playAudio() {
//   var audio = document.getElementById("myAudio");
//   audio.play();
//   document.getElementById("delayedButton").style.display = "none";
// }

// // Set a timer to automatically trigger the button click after 10 seconds
// setTimeout(function () {
//   playAudio();
// }, 1000);
