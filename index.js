

// declared array of ready-to-use questions meant to be looped through and appended to each corresponding fieldset .p
const questions = [ 
"Is JavaScript a case-sensitive language?", // answer: "Yes"
"Can JavaScript be used for both frontend and backend development?",// answer: "Yes"
"Does JavaScript support classes?",// answer: "Yes"
"Is JavaScript the same as Java?",// answer: "No"
"Can you declare a variable in JavaScript using the keyword 'var'?", // answer: "Yes"
"Do all JavaScript functions have to return a value?",  // answer: "No"
"Is 'undefined' a reserved keyword in JavaScript?",  // answer: "Yes"
"Can JavaScript run outside of a web browser?", // answer: "Yes"
"Does JavaScript support strict typing like TypeScript?", // answer: "No"
"Is 'const' used to declare variables that can be reassigned?", // answer: "No",
];

let fieldsetNodes = document.querySelectorAll("fieldset .question");
let fieldsetArray = Array.from(fieldsetNodes);

let lockInBtn = document.querySelectorAll("fieldset .lockIn-btn");
let lockinBtns = Array.from(lockInBtn);
console.log(lockInBtn, lockinBtns);

questions.forEach((question, index) => {
  // console.log(index+1, question);
  let everyq = (index+1, question);
  console.log(everyq);
})


let quizForm = document.querySelector("#quiz-form")
quizForm.style.backgroundColor = "#334"

fieldsetArray.forEach((fieldset,index) => {

  // let li = document.querySelector("li");
  // li.innerText = fieldset.fieldset + "bajs";
  // li.append();

})
// fieldsetArray.forEach((fieldset, index) => {
//   console.log('fråga nr #' + (index + 1) + ':', );

// })
function nextQuestion(element) {

}

// console.log(questions);


// function nextQuestion(element) {
//   element.style.backgroundColor = "#333"
// }

// let questions = document.getElementsByClassName("p .question")
// let questions = document.querySelectorAll("p .question")
// questions.forEach((question) => {

// })


// question.innerText = "fråga # ";


// function lockAnswer() {
  
// }

// function submitQuiz() {
  
// }