const quizData = [
    {
        question: "Deprem çantasında bulunması gerekmeyen şey hangisidir?",
        a: "El feneri",
        b: "Yiyecek",
        c: "Bilgisayar",
        d: "Önemli belge fotokopileri",
        correct: "c",
    },
    {
        question: "Deprem anında ne yapmalıyız?",
        a: "Çök kapan tutun hareketi",
        b: "Merdivenlere yönelmek",
        c: "Asansöre binmek",
        d: "Balkondan aşağıya atlamaya çalışmak",
        correct: "a",
    },
    {
        question: "Deprem sonrasında ne yapmamalıyız?",
        a: "İlk 72 saatte,acil ihtiyaçlarınızı saklayabileceğiniz bir afet çantası hazırlamak",
        b: "Elektrik, gaz ve su vanalarını kapatmak",
        c: "Acil durum çantanızı yanınıza alarak toplanma bölgesine gitmek",
        d: "Eve girip eşyalarımızı almaya çalışmak",
        correct: "d",
    },
    {
        question: "Yer kabuğundaki dalgalanmaları hangi aletle ölçeriz?",
        a: "Termometre",
        b: "Sismometre",
        c: "Cetvel",
        d: "Ampermetre",
        correct: "b",
    },
    {
        question: "Aşağıdakilerden hangisi deprem öncesinde yapılabilecek uygulamalardan biri değildir?",
        a: "Deprem çantası hazırlamak",
        b: "Mobilyaları sabitlemek",
        c: "Toplanma noktasında beklemek",
        d: "Depreme dayanıklı ev satın almak",
        correct: "c",
    },
    {
        question: "Aşağıdaki illerden hangisinde deprem riski daha fazladır?",
        a: "Hatay",
        b: "Niğde",
        c: "Karaman",
        d: "Konya",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `<h2> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ${score}/${quizData.length} soruyu doğru cevapladın</h2>
            
            <button id="back" onclick="window.location.href = 'test.html';">Geri Dön</button>
            `
        }
    }
})