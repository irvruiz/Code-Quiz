const question = document.querySelector('#question')
const choices = array.from(querySelectorAll('.choice-text'))
const progressText = document.querySelector('#progressText')
const scoreText = document.querySelector('#score')
const progressBarrFull = document.querySelector('#progressBarFull')

let currentQuestion = ()
let acceptingAnswers = true
let questionCounter = 0
let availableQuestions []

let questions = [
    {
        question: "what is JavaScript?"
        choice1: "the code used to structure a web page and it's content"
        choice2: "a programming language that adds interactivity to a website"
        choice3: "the code that styles web content"
    }
    {
        question: "which is used to separate JavaScript statements?"
        choice1: "period"
        choice2: "semicolon"
        choice3: "colon"
    }
    {
        question: "what is JavaScript abbreviated to?"
        choice1: "JS"
        choice2: "J"
        choice3: "JST"
    }
    {
        question: "which HTML element is used to embed JavaScript code?"
        choice1: "<a>"
        choice2: "<link>"
        choice3: "<script>"
    }
    {
        question: "which is a container thay stores a value?"
        choice1: "variable"
        choice2: "function"
        choice3: "string"
    }
]