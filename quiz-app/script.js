const quizData = [
  {
    question: 'Who is your best friend?',
    a: 'Zikra',
    b: 'Shamim',
    c: 'Koushik',
    d: 'Surma',
    e: 'Oni',
    correct: 'c'
  },
  {
    question: 'Who is your best player?',
    a: 'Shakib',
    b: 'Mash',
    c: 'Mushi',
    d: 'Tamim',
    e: 'Somu',
    correct: 'b'
  },
  {
    question: 'who is your best football player?',
    a: 'CR7',
    b: 'Messi',
    c: 'Ozil',
    d: 'Ramos',
    e: 'Bell',
    correct: 'a'
  },
  {
    question: 'What is your favorite programming language ?',
    a: 'Java',
    b: 'PHP',
    c: 'Python',
    d: 'React',
    e: 'Javasript',
    correct: 'e'
  }
];

 const quiz = document.getElementById('quiz');
  const answerEls = document.querySelectorAll(".answer");
const questionE1 = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const e_text = document.getElementById('e_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
loadQuiz();
function loadQuiz() {
  deselectAnswer();
  const currentQuizData = quizData[currentQuiz];

   questionE1.innerHTML = currentQuizData.question;
   a_text.innerHTML = currentQuizData.a;
   b_text.innerHTML = currentQuizData.b;
   c_text.innerHTML = currentQuizData.c;
   d_text.innerHTML = currentQuizData.d;
   e_text.innerHTML = currentQuizData.e;

}
function getSelected() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if(answerEl.checked){
       answer = answerEl.id;
    }
  });
return answer;
}
 function deselectAnswer() {
   answerEls.forEach((answerEl) => {
     answerEl.checked = false;
   });
 }
 submitBtn.addEventListener('click', () => {
   //check to see the answer
     const answer = getSelected();
     if(answer) {
       if(answer === quizData[currentQuiz].correct){
         score++;
       }
        currentQuiz++;
       if(currentQuiz < quizData.length){
          loadQuiz();
       } else {
         // tooo: Show result
         quiz.innerHTML =  `<h2>You answere correctly at ${score}/${quizData.length} questions </h2> <button onClick="location.reload()">Reload</button>`
       }
     }
 });
