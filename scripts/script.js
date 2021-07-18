let question = document.querySelector(".question");
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");
let answers = document.querySelectorAll("input");
let optionBox = document.querySelector(".option-box");
let submitBtn = document.querySelector(".submit");
let nextBtn = document.querySelector(".next");
let previousBtn = document.querySelector(".previous");
let quesInfo = document.querySelector(".quesNo");
let timeInfo = document.querySelector(".time");

let index = 0;
let score = 0;

const startingMinutes = quesData.length / 2;
let time = startingMinutes * 60;
setInterval(updateCountdown, 1000);
function updateCountdown() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  timeInfo.innerText = `Time Left : ${minutes} : ${seconds}`;
  time--;

  function fn2() {
    timeInfo.innerText = "";
    quesInfo.innerText = "";
  }

  let mins = startingMinutes * 60 * 1000;
  setTimeout(fn2, mins);
}

function loadQuestion() {
  if (index < quesData.length) {
    question.innerHTML = quesData[index].question;
    option1.innerText = quesData[index].options[0];
    option2.innerText = quesData[index].options[1];
    option3.innerText = quesData[index].options[2];
    option4.innerText = quesData[index].options[3];
    quesInfo.innerText = `Question ${index + 1} of ${quesData.length}`;
  } else if ((index = quesData.length)) {
    question.innerText = " You Scored!";
    question.style.fontWeight = "600";
    question.style.textAlign = "center";
    optionBox.innerHTML = "";
    optionBox.innerText = score;
    optionBox.style.fontWeight = "600";
    optionBox.style.fontSize = "4rem";
    optionBox.style.textAlign = "center";
  }
}

loadQuestion();

function handleNextBtn() {
  index++;
  submitBtn.innerText = `Submit`;
  submitBtn.style.background = "rgb(37, 207, 207)";

  if (index < quesData.length) {
    loadQuestion();
  }

  if (index < quesData.length - 1) {
    nextBtn.innerHTML = `Next <i class="far fa-arrow-alt-circle-right"></i>`;
    nextBtn.style.background = "rgb(37, 207, 207)";
  } else if (index >= quesData.length - 1) {
    nextBtn.innerHTML = `Last`;
    nextBtn.style.background = "rgba(37, 207, 207, 0.5)";
  }

  if (index > 0) {
    previousBtn.innerHTML = `<i class="far fa-arrow-alt-circle-left"></i> Previous`;
    previousBtn.style.background = "rgb(37, 207, 207)";
  } else if (index <= 0) {
    previousBtn.innerHTML = `First`;
    previousBtn.style.background = "rgba(37, 207, 207, 0.5)";
  }
}

function handlePreviousBtn() {
  index--;
  submitBtn.innerText = `Submit`;
  submitBtn.style.background = "rgb(37, 207, 207)";

  if (index >= 0) {
    loadQuestion();
  }

  if (index > 0) {
    previousBtn.innerHTML = `<i class="far fa-arrow-alt-circle-left"></i> Previous`;
    previousBtn.style.background = "rgb(37, 207, 207)";
  } else if (index <= 0) {
    previousBtn.innerHTML = `First`;
    previousBtn.style.background = "rgba(37, 207, 207, 0.5)";
  }

  if (index < quesData.length - 1) {
    nextBtn.innerHTML = `Next <i class="far fa-arrow-alt-circle-right"></i>`;
    nextBtn.style.background = "rgb(37, 207, 207)";
  } else if (index >= quesData.length - 1) {
    nextBtn.innerHTML = `Last`;
    nextBtn.style.background = "rgba(37, 207, 207, 0.5)";
  }
}

function getCheckedAnswer() {
  let id;
  answers.forEach((elem) => {
    if (elem.checked) {
      id = elem.id;
    }
    return id;
  });
  return id;
}

function uncheckAll() {
  answers.forEach((elem) => {
    elem.checked = false;
  });
}

function handleSubmitBtn() {
  const checkedAnswer = getCheckedAnswer();
  if (checkedAnswer === quesData[index].correctAnswer) {
    score++;
  }
  console.log(score);
  submitBtn.innerText = `Submitted`;
  submitBtn.style.background = "rgba(37, 207, 207, 0.5)";

  if (index >= quesData.length - 1) {
    question.innerText = " You Scored!";
    question.style.fontWeight = "600";
    question.style.textAlign = "center";
    optionBox.innerHTML = "";
    optionBox.innerText = score;
    optionBox.style.fontWeight = "600";
    optionBox.style.fontSize = "4rem";
    optionBox.style.textAlign = "center";
    previousBtn.style.display = "none";
    nextBtn.style.display = "none";
    submitBtn.style.display = "none";
  }

  uncheckAll();
}

function fn() {
  question.innerText = " You Scored!";
  question.style.fontWeight = "600";
  question.style.textAlign = "center";
  optionBox.innerHTML = "";
  optionBox.innerText = score;
  optionBox.style.fontWeight = "600";
  optionBox.style.fontSize = "4rem";
  optionBox.style.textAlign = "center";
  previousBtn.style.display = "none";
  nextBtn.style.display = "none";
  submitBtn.style.display = "none";
}

let mins = startingMinutes * 60 * 1000;

setTimeout(fn, mins);

nextBtn.addEventListener("click", handleNextBtn);
previousBtn.addEventListener("click", handlePreviousBtn);
submitBtn.addEventListener("click", handleSubmitBtn);
