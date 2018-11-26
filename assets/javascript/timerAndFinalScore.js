// loading the qu
document.getElementById("timer").innerHTML = 
"<h1> Time left: <div id='time'></div></h1>" 
;


// This is the timer!! When timer hits 0, it should disappear, along with the questions
// This is the countdown code -----------------------------------------------------
var timeLeft = 15;
var elem = document.getElementById('time');

var timerId = setInterval(countdown, 1000);

// This calls the countdown function to start when the page loads, but pretty sure it was running without this for some reason 
window.onload = countdown();
// This is the function that makes the countdown code work, writing the final score part in html.



function countdown() {
  if (timeLeft == 0) {
    document.getElementById("disappearingQuestions").innerHTML = 
    // remember CA is correct answer, and WA is Incorrect Answer
"<h1> All done!</h1> <br> <p>Correct Answers:</p> <div id='CA'></div> <br> <p>Incorrect Answers:</p> <div id='WA'></div>"
;
    $("#CA").text(rightAnswer);
    $("#WA").text(wrongAnswer);

  } else {
    elem.innerHTML = timeLeft;
    timeLeft--;
  }
}


