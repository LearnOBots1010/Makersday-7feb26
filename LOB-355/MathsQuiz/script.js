const numInput = document.getElementById("numQuestions");
const quizType = document.getElementById("quizType");
const difficulty = document.getElementById("difficulty");
const generateBtn = document.getElementById("generateBtn");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");
const finalScoreEl = document.getElementById("finalScore");

// Max questions mapping
const maxQuestionsMap = {
  algebra: { easy: 20, medium: 15, hard: 10 },
  fractions: { easy: 15, medium: 10, hard: 8 },
  decimals: { easy: 15, medium: 12, hard: 10 },
};

// Simple example question generator
function generateQuestion(type, difficulty) {
  let a = Math.floor(Math.random() * 20) + 1;
  let b = Math.floor(Math.random() * 20) + 1;

  if (difficulty === "medium") {
    a *= 2; b *= 2;
  } else if (difficulty === "hard") {
    a *= 3; b *= 3;
  }

  let question = "";
  let answer;
  let options = [];

  if (type === "algebra") {
    // Solve a*x + b = a*b + b
    answer = b; // x = b
    question = `${a}x + ${b} = ${a * answer + b}, solve for x`;

    // Create 4 options around the correct answer
    options = [
      answer,
      answer + Math.floor(Math.random() * 5) + 1,
      Math.max(answer - (Math.floor(Math.random() * 5) + 1), 1),
      answer + Math.floor(Math.random() * 3) + 2
    ].sort(() => Math.random() - 0.5); // shuffle

  } else if (type === "fractions") {
    answer = (a / b).toFixed(2);
    question = `Simplify ${a}/${b} (2 decimal places)`;

    options = [
      answer,
      (a / (b + 1)).toFixed(2),
      ((a + 1) / b).toFixed(2),
      ((a + 2) / (b + 2)).toFixed(2)
    ].sort(() => Math.random() - 0.5);

  } else if (type === "decimals") {
    answer = ((a/10) + (b/10)).toFixed(2);
    question = `Add ${ (a/10).toFixed(1) } + ${ (b/10).toFixed(1) }`;

    options = [
      answer,
      ((a/10) - (b/10)).toFixed(2),
      ((a/10) + (b/10) + 1).toFixed(2),
      ((a/10) + (b/10) - 1).toFixed(2)
    ].sort(() => Math.random() - 0.5);
  }

  return { question, options, answer };
}


// Update max questions dynamically
function updateMaxQuestions() {
  const type = quizType.value;
  const level = difficulty.value;
  const max = maxQuestionsMap[type][level];

  numInput.max = max;

  if (parseInt(numInput.value) > max) {
    numInput.value = max;
  }
}

quizType.addEventListener("change", updateMaxQuestions);
difficulty.addEventListener("change", updateMaxQuestions);

numInput.addEventListener("input", () => {
  const max = parseInt(numInput.max);
  const min = parseInt(numInput.min) || 1;
  let value = parseInt(numInput.value);
  if (isNaN(value) || value < min) numInput.value = min;
  else if (value > max) numInput.value = max;
});

updateMaxQuestions();

// Quiz logic
let currentQuestionIndex = 0;
let quizData = [];
let score = 0;

function loadQuestion() {
  if (currentQuestionIndex >= quizData.length) {
    questionEl.textContent = "Quiz Completed!";
    optionsEl.innerHTML = "";
    finalScoreEl.textContent = `Your Score: ${score} / ${quizData.length}`;
    return;
  }

  const q = quizData[currentQuestionIndex];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.classList.add("option-btn");
    btn.textContent = opt;
    btn.addEventListener("click", () => checkAnswer(opt));
    optionsEl.appendChild(btn);
  });

  resultEl.textContent = "";
}

function checkAnswer(selected) {
  const q = quizData[currentQuestionIndex];
  if (selected == q.answer) {
    score++;
    resultEl.textContent = "Correct!";
  } else {
    resultEl.textContent = `Wrong! Correct: ${q.answer}`;
  }

  currentQuestionIndex++;
  setTimeout(loadQuestion, 1000);
}

generateBtn.addEventListener("click", () => {
  const type = quizType.value;
  const level = difficulty.value;
  const numQuestions = parseInt(numInput.value);

  quizData = [];
  score = 0;
  currentQuestionIndex = 0;
  finalScoreEl.textContent = "";

  for (let i = 0; i < numQuestions; i++) {
    quizData.push(generateQuestion(type, level));
  }

  loadQuestion();
});
