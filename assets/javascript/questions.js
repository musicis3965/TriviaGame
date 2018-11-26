

document.getElementById("question1").innerHTML =
"<p> this is a test </p> <br> <button class='btn' id='rightAnswer'>Add 1</button><button class='btn' id='wrongAnswer'>wrongso</button>";
// inside the button, put the value, review calculator, click events add a class for right answers, and a class for wrong answers and then click event one for each class
document.getElementById("question2").innerHTML =
"<p> this is a test </p>";
document.getElementById("question3").innerHTML =
"<p> this is a test </p>";
document.getElementById("question4").innerHTML =
"<p> this is a test </p>";
document.getElementById("question5").innerHTML =
"<p> this is a test </p>";
document.getElementById("question6").innerHTML =
"<p> this is a test </p>";
document.getElementById("question7").innerHTML =
"<p> this is a test </p>";
document.getElementById("question8").innerHTML =
"<p> this is a test </p>";


// Initialize Firebase
var config = {
    apiKey: "AIzaSyC65sORI4pcDQAg1-qoClj0SpAXa085Grc",
    authDomain: "trivia-storage-df294.firebaseapp.com",
    databaseURL: "https://trivia-storage-df294.firebaseio.com",
    projectId: "trivia-storage-df294",
    storageBucket: "",
    messagingSenderId: "963886349365"
  };

firebase.initializeApp(config);

var database = firebase.database();

var rightAnswer = 0;
console.log(rightAnswer);
var wrongAnswer = 0;

var rightClick = rightAnswer;
var wrongClick = wrongAnswer;

database.ref().on("value", function(snapshot) {
    console.log(snapshot.val());
    rightClick = snapshot.val().rightCount;
    wrongClick = snapshot.val().wrongCount;
    console.log(rightClick);
    console.log(wrongClick);
    //$("#rightAnswer").text(snapshot.val().rightClick);
    //$("#wrongAnswer").text(snapshot.val().wrongClick);
},
function(errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

$("#rightAnswer").on("click", function() {
      rightAnswer++;
      if (rightAnswer === 9) {
        alert("No one likes a cheater! Make sure you're only clicking each button once!!");
        rightAnswer = 0;
        wrongAnswer = 0;
      }

      database.ref().set({
        rightClick: rightAnswer,
        wrongClick: wrongAnswer
      });

      console.log(rightAnswer);

});

$("#wrongAnswer").on("click", function() {
    wrongAnswer++;
    if (wrongAnswer === 9) {
      alert("Hmmm Make sure you're only clicking each button once!!");
      wrongAnswer = 0;
      rightAnswer = 0;
    }

    database.ref().set({
      rightClick: rightAnswer,
      wrongClick: wrongAnswer
    });

    console.log(rightAnswer);

  });