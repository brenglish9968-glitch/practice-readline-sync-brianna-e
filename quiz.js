const readline = require('readline');

// Quiz questions database
const questions = [
  {
    question: "1. Which of the following is NOT a primitive data type in JavaScript?",
    options: ["A) String", "B) Boolean", "C) Object", "D) Undefined"],
    answer: "C"
  },
  {
    question: "2. What is the value of: typeof NaN",
    options: ["A) 'number'", "B) 'NaN'", "C) 'undefined'", "D) 'object'"],
    answer: "A"
  },
  {
    question: "3. What does the expression (5 == '5') evaluate to?",
    options: ["A) false", "B) true", "C) TypeError", "D) NaN"],
    answer: "B"
  },
  {
    question: "4. Which operator checks for both value and data type equality?",
    options: ["A) =", "B) ==", "C) ===", "D) !="],
    answer: "C"
  },
  {
    question: "5. What is the result of the expression: '10' + 5",
    options: ["A) 15", "B) 105", "C) TypeError", "D) NaN"],
    answer: "B"
  },
  {
    question: "6. Which value is considered 'falsy' in JavaScript?",
    options: ["A) [] (Empty array)", "B) '0' (String with zero)", "C) 0 (Number zero)", "D) {} (Empty object)"],
    answer: "C"
  },
  {
    question: "7. What is the result of the logical expression: true || false",
    options: ["A) true", "B) false", "C) undefined", "D) null"],
    answer: "A"
  }
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
  if (currentQuestionIndex < questions.length) {
    const currentQuestion = questions[currentQuestionIndex];
    console.log(`\n${currentQuestion.question}`);
    currentQuestion.options.forEach(option => console.log(option));
    
    rl.question('\nYour answer (A, B, C, or D): ', handleAnswer);
  } else {
    finishQuiz();
  }
}

function handleAnswer(input) {
  const cleanInput = input.trim().toUpperCase();
  const currentQuestion = questions[currentQuestionIndex];

  if (['A', 'B', 'C', 'D'].includes(cleanInput)) {
    if (cleanInput === currentQuestion.answer) {
      console.log(' Correct!');
      score++;
    } else {
      console.log(` Incorrect. The correct answer was ${currentQuestion.answer}.`); 
    }
    currentQuestionIndex++;
    displayQuestion();
  } else {
    console.log(' Invalid input. Please enter A, B, C, or D.');
    displayQuestion();
  }
}

function finishQuiz() {
  console.log('\n--- Quiz Complete! ---');
  console.log(`Your final score: ${score} / ${questions.length}`);
  const percentage = Math.round((score / questions.length) * 100);
  console.log(`Percentage: ${percentage}%`);
  
  if (percentage === 100) {
    console.log('Excellent job! You mastered this module.');
  } else if (percentage >= 70) {
    console.log('Good job! You have a solid grasp of the basics.');
  } else {
    console.log('Consider reviewing the values, types, and operations module material again.');
  }
  
  rl.close();
}

// Start the quiz application
console.log('Welcome to the JavaScript Basics Quiz!');
console.log('Topic: Values, Data Types, and Operations');
displayQuestion();