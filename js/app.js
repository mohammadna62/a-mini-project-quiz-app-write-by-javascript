const questions = [
  {
    id: 1,
    title: "سازنده جاوا اسکریپت کیست؟",
    options: ["استیو جابز", "برندان ایچ", "ایلان ماسک"],
    answer: "برندان ایچ",
  },
  {
    id: 2,
    title: "کتاب Clean Code از کیست؟",
    options: ["آنکل باب (رابرت مارتین)", "استیو جابز", "برندان ایچ"],
    answer: "آنکل باب (رابرت مارتین)",
  },
  {
    id: 3,
    title: "جاوا اسکریپت در چه سالی ساخته شد؟",
    options: ["1995", "1997", "2000"],
    answer: "1995",
  },
  {
    id: 4,
    title: "فامیلای مادری خوبن یا پدری؟",
    options: ["پدری", "مادری", "هر دو"],
    answer: "مادری",
  },
  {
    id: 5,
    title: "ری‌اکت کتابخونه کدوم زبان هست؟",
    options: ["پایتون", "جاوا", "جاوا اسکریپت"],
    answer: "جاوا اسکریپت",
  },
];
const questionTitle = document.querySelector(".question");
const questionsOptionsContainer = document.querySelector(".questions");
const currentQuestionElem = document.querySelector(".current");
const totalQuestionsElem = document.querySelector(".total");
const nextQuestionsBtn = document.querySelector(".next");
const resultButton = document.querySelector(".result-button");
const modalScreen = document.querySelector(".modal-screen");
const finalResultText = document.querySelector(".final-result");
const resultStatus = document.querySelector(".result");
const closeXBtn = document.querySelector(".close-x-btn");
const closeElem = document.querySelector(".close");
const continueElem = document.querySelector(".continue");
let score = 0;
let currentQuestionIndex = 0;
closeXBtn.addEventListener("click", hideResultModal);
closeElem.addEventListener("click", hideResultModal);
continueElem.addEventListener("click", hideResultModal);

nextQuestionsBtn.addEventListener("click", function () {
  checkAnswer();
  currentQuestionIndex++;
  let lengthObj = questions.length;

  if (lengthObj <= currentQuestionIndex + 1) {
    nextQuestionsBtn.classList.add("hidden");
    resultButton.classList.remove("hidden");
  }
  showQuestion();
});
resultButton.addEventListener("click", function () {
  checkAnswer();
  showScore();
});

function setActiveOnOption() {
  const options = document.querySelectorAll(".option");

  options.forEach(function (option) {
    option.addEventListener("click", function (event) {
      const selectedOption = document.querySelector(".selected");

      if (selectedOption) {
        selectedOption.classList.remove("selected");
      }

      option.classList.add("selected");
    });
  });
}
function checkAnswer() {
  const question = questions[currentQuestionIndex];
  const answerOptions = document.querySelectorAll(".answer-option");

  answerOptions.forEach(function (answerOption) {
    if (answerOption.checked && answerOption.value === question.answer) {
      score++;
    }
  });
}
function showResultModal() {
  modalScreen.classList.remove("hidden");
}
function hideResultModal() {
  modalScreen.classList.add("hidden");
}
function showScore() {
  finalResultText.innerHTML = `شما تونستید ${score} پاسخ صحیح از ${questions.length} سوال بدید.`;

  if (score > 3) {
    resultStatus.classList.add("good");
    resultStatus.innerHTML = "خوب";
  } else {
    resultStatus.classList.add("bad");
    resultStatus.innerHTML = "بد";
  }

  showResultModal();
}

function showQuestion() {
  const question = questions[currentQuestionIndex];
  questionTitle.innerHTML = question.title;
  currentQuestionElem.innerHTML = currentQuestionIndex + 1;
  let lengthObj = questions.length;
  totalQuestionsElem.innerHTML = lengthObj;
  questionsOptionsContainer.innerHTML = "";
  question.options.forEach(function (option) {
    const randomId = Math.floor(Math.random() * 1000);
    questionsOptionsContainer.insertAdjacentHTML(
      "beforeend",
      `
       <article class="quest option">
          <input type="radio" name="questbox" value ="${option}"class="answer-option" id="quest-${randomId}" />
          <label for="quest-${randomId}" class="answer-title">${option}</label>
        </article>
       
        `,
    );
  });
  setActiveOnOption();
}
