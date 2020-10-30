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
let score = 0;
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuestion];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    const answerEls = document.querySelectorAll('.answer');
    let answer = undefined;
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id; 
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    console.log(answer);
    if(answer) {
        if(answer === quizData[currentQuestion].correct){
            score++;
        }
        currentQuestion++;
        if(currentQuestion < quizData.length) {
            loadQuiz();
        }
        else{
            //TODO: show results
            alert('FIM DO QUIZ!!!');
        }
    }   
});
