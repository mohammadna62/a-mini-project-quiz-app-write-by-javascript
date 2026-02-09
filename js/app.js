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

let score = 0;
let currentQuestionIndex = 0;
function showQuestion() {
  const question = questions[currentQuestionIndex];
  questionTitle.innerHTML = question.title;
  currentQuestionElem.innerHTML = currentQuestionIndex + 1;
  let lengthObj = [...questions].length;
  totalQuestionsElem.innerHTML = lengthObj;
  questionsOptionsContainer.innerHTML = "";
  question.options.forEach(function (option) {
    const randomId = Math.floor(Math.random() * 1000);
    questionsOptionsContainer.insertAdjacentHTML(
      "beforeend",
      `
       <article class="quest option">
          <input type="radio" name="questbox" id="quest-${randomId}" />
          <label for="quest-${randomId}" class="answer-title">${option}</label>
        </article>
       
        `,
    );
  });
  setActiveOnOption();
}
nextQuestionsBtn.addEventListener("click", function () {
  checkAnswer();
  currentQuestionIndex++;
  let lengthObj = [...questions].length;
  console.log("lengthObj", lengthObj);
  console.log("currentQuestionIndex", currentQuestionIndex);

  if (lengthObj <= currentQuestionIndex + 1) {
    nextQuestionsBtn.classList.add("hidden");
  }
  showQuestion();
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


function checkAnswer() {}
