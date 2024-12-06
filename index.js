

// document.addEventListener("DOMContentLoaded", () => {
//   function beginQuiz() {
//     guidePopup();
//     loadQuestions();
//     lockInButtons();
//     nextQuestion();
//   }
// });

function guidePopup() {

}

  // document.querySelector(".popup-div").style.display = "none";
// TEMP INVISIBLE

// declared array of ready-to-use questions meant to be looped through and appended to each corresponding fieldset .p
const proceedBtn = document.querySelector("#popup-confirm #proceed-btn");
proceedBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".popup-div").style.display = "none";
});


let fieldsetNodes = document.querySelectorAll("fieldset .question"); //question paragraphs <p>
let fieldsetArray = Array.from(fieldsetNodes);

const questions = [
  "Is JavaScript a case-sensitive language?", // answer: "Yes"
  "Can JavaScript be used for both frontend and backend development?", // answer: "Yes"
  "Does JavaScript support classes?", // answer: "Yes"
  "Is JavaScript the same as Java?", // answer: "No"
  "Can you declare a variable in JavaScript using the keyword 'var'?", // answer: "Yes"
  "Do all JavaScript functions have to return a value?", // answer: "No"
  "Is 'undefined' a reserved keyword in JavaScript?", // answer: "Yes"
  "Can JavaScript run outside of a web browser?", // answer: "Yes"
  "Does JavaScript support strict typing like TypeScript?", // answer: "No"
  "Is 'const' used to declare variables that can be reassigned?", // answer: "No",
  ];

  questions.forEach((question, index) => {
    fieldsetArray[index].innerText = question;
    index++;
    console.log(question, index);
  });

function loadQuestions() {

}

let lockInBtn = document.querySelectorAll("fieldset .lockIn-btn");
  let lockinBtns = Array.from(lockInBtn);

lockinBtns.forEach((button, index) => {
  button.innerText = "Lock in answer";

  button.addEventListener("click", (e) => {
    e.preventDefault();
    button.disabled = true;
    button.innerText = "Locked in";
    button.style.color = "grey";
    button.style.fontStyle = "italic";
    console.log("question " + (index + 1) + " locked in");
    // nextQuestion(button.closest("fieldset"));
  });
});

function lockInButtons() {
  
}

function lockAnswer(button) {
  let currentQ = button.closest("li");
  let selectedAnswer = currentQ.querySelector("input[type='radio']:checked");

  if (!selectedAnswer) {
    return;
  }
}

// function quizFormStyling() {}

let listObjects = document.querySelectorAll("li fieldset");
let listArray = Array.from(listObjects);
console.log(listObjects, listArray);

// listArray.forEach((fieldset, index) => {});

function nextQuestion(element) {
  element.style.backgroundColor = "#aaa"; // Lock the question with a new color
  element.querySelectorAll("input");
  element.forEach((input) => (input.disabled = true));
}


let quizForm = document.querySelector("#quiz-form");
quizForm.style.backgroundColor = "#334";

fieldsetArray.forEach((fieldset, index) => {});



// console.log(questions);

function nextQuestion(element) {
  element.style.backgroundColor = "#333"
}

// let questions = document.getElementsByClassName("p .question")
// let questions = document.querySelectorAll("p .question")
// questions.forEach((question) => {

// })

// question.innerText = "fråga # ";

// function lockAnswer() {

// }

// function submitQuiz() {

// }
