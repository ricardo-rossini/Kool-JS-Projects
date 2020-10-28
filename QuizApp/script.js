const quizData = [
    {
        question: 'Qual a cidades mais ao Sul do Brasil?',
        a: 'Oiapoque',
        b: 'Sao Paulo',
        c: 'Chui',
        d: "Pelotas",
        correct: 'c'
    },

    {
        question: 'Como e conhecido o melhor amigo do detetive Sherlock Holmes?',
        a: 'Samuel',
        b: 'Watson',
        c: 'Percy',
        d: 'Lestrad',
        correct: 'b'
    },

    {
        question: 'Qual o peixe mais consumido no Brasil?',
        a: 'tilapia',
        b: 'sardinha',
        c: 'pescado',
        d: 'namorado',
        correct: 'a'
    },

    {
        question: 'Qual a velocidade do som?',
        a: '1432km/h',
        b: '2341km/h',
        c: '1342km/h',
        d: '1234km/h',
        correct: 'd'
    },

    {
        question:'Qual personagem de Mauricio de oua eh o dono do Bidu?',
        a: 'Cebolinha',
        b: 'Franjinha',
        c: 'Magali',
        d: 'Monica',
        correct: 'b'
    }
];

let currentQuestion = 0;
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuestion];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    currentQuestion++;
}
