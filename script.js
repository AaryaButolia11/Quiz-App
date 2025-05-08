document.addEventListener("DOMContentLoaded", () => {
  // Elements from the DOM
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const questionNumber = document.getElementById("question-number");
  const choicesList = document.getElementById("choices-list");
  const resultContainer = document.getElementById("result-container");
  const scoreDisplay = document.getElementById("score");
  const themeToggleBtn = document.getElementById("theme-toggle-btn");

  // Array of questions for the quiz
  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "Who wrote 'Hamlet'?",
      choices: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
    },
    { question: "What is 2 + 2?", choices: ["3", "4", "5", "6"], answer: "4" },
    {
      question: "What is the largest ocean on Earth?",
      choices: ["Atlantic", "Pacific", "Indian", "Arctic"],
      answer: "Pacific",
    },
    {
      question: "Who discovered gravity?",
      choices: [
        "Albert Einstein",
        "Isaac Newton",
        "Galileo Galilei",
        "Nikola Tesla",
      ],
      answer: "Isaac Newton",
    },
    {
      question: "What is the chemical symbol for water?",
      choices: ["O₂", "H₂O", "CO₂", "N₂"],
      answer: "H₂O",
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      choices: ["China", "South Korea", "Japan", "India"],
      answer: "Japan",
    },
    {
      question: "What is the speed of light?",
      choices: ["299,792 km/s", "300,000 km/s", "150,000 km/s", "400,000 km/s"],
      answer: "299,792 km/s",
    },
    {
      question: "Who was the first President of the United States?",
      choices: [
        "Thomas Jefferson",
        "Abraham Lincoln",
        "George Washington",
        "John Adams",
      ],
      answer: "George Washington",
    },
  ];

  let currentQuestionIndex = 0; // Tracks the current question
  let score = 0; // Tracks the user's score
  let selectedAnswer = ""; // Stores the selected answer for validation

  // Event listeners for the buttons
  startBtn.addEventListener("click", startQuiz);
  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    // If there are more questions, show the next question; else, show the result
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  });
  restartBtn.addEventListener("click", () => {
    // Reset variables and restart the quiz
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add("hidden");
    startQuiz();
  });

  // Toggle light/dark theme
  themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
  });

  /**
   * Shuffles the questions randomly for a new order each time the quiz starts.
   */
  function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Get a random index
      [questions[i], questions[j]] = [questions[j], questions[i]]; // Swap questions
    }
  }

  /**
   * Initializes and starts the quiz.
   * Shuffles the questions and hides the start button.
   */
  function startQuiz() {
    shuffleQuestions(); // Shuffle questions at the start of each quiz
    startBtn.classList.add("hidden"); // Hide the start button
    resultContainer.classList.add("hidden"); // Hide the result container initially
    questionContainer.classList.remove("hidden"); // Show the question container
    showQuestion(); // Display the first question
  }

  /**
   * Displays the current question and its choices.
   */
  function showQuestion() {
    nextBtn.classList.add("hidden"); // Hide the next button until an answer is selected
    questionText.textContent = questions[currentQuestionIndex].question; // Display question text
    questionNumber.textContent = `Question ${currentQuestionIndex + 1} of ${
      questions.length
    }`; // Update question number
    choicesList.innerHTML = ""; // Clear previous choices
    questions[currentQuestionIndex].choices.forEach((choice) => {
      // Create list items for each choice
      const li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", () => selectAnswer(choice, li)); // Add event listener to each choice
      choicesList.appendChild(li); // Add the list item to the choices list
    });
  }

  /**
   * Handles the logic when an answer choice is selected.
   * Highlights the selected choice and checks if it's correct.
   */
  function selectAnswer(choice, li) {
    selectedAnswer = choice; // Store the selected answer

    // Remove selection from all choices and add it to the current selected choice
    const allChoices = choicesList.querySelectorAll("li");
    allChoices.forEach((choice) => choice.classList.remove("selected"));
    li.classList.add("selected");

    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedAnswer === correctAnswer) {
      score++; // Increase the score if the answer is correct
    }

    nextBtn.classList.remove("hidden"); // Show the next button after an answer is selected
  }

  /**
   * Displays the result at the end of the quiz.
   * Shows the user's score and triggers confetti if the score is perfect.
   */
  function showResult() {
    questionContainer.classList.add("hidden"); // Hide the question container
    resultContainer.classList.remove("hidden"); // Show the result container
    scoreDisplay.textContent = `${score} out of ${questions.length}`; // Display the score
    if (score === questions.length) {
      triggerConfetti(); // Trigger confetti animation if the score is perfect
    }
  }

  /**
   * Triggers a confetti animation using the canvas-confetti library when the user gets all questions correct.
   */
  function triggerConfetti() {
    const confetti = document.createElement("script");
    confetti.src =
      "https://cdn.jsdelivr.net/npm/canvas-confetti@1.4.0/dist/confetti.browser.min.js";
    confetti.onload = () => {
      canvasConfetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } }); // Start confetti effect
    };
    document.body.appendChild(confetti); // Append the confetti script to the body
  }
});
