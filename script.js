let game = document.getElementById('game')
let startDiv = document.getElementById('start')
let strBtn = document.getElementById('strBtn')
let lose = document.getElementById('lose')


let quiz = [
    {
        question : '22 + 58',
        answer : '80'
    },

    {
        question : '37 x 3',
        answer : '111'
    },

    {
        question : '52 x 13',
        answer : '676'
    },

    {
        question : '1265 + 745',
        answer : '2010'
    },

    {
        question : '3345 - 489',
        answer : '2856'
    },

    {
        question : '321 + 654 + 987',
        answer : '1962'
    },

    {
        question : '202 + 518',
        answer : '720'
    },
    {
        question : '258 / 43',
        answer : '6'
    },

    {
        question : '11 x 78',
        answer : '858'
    },

    {
        question : '119 x 3 / 7',
        answer : '51'
    }
]

// start
function start(){
    startDiv.style.display = 'none'
    game.style.display = 'flex'
    lose.style.display = 'none'
    setQuestion()
    timer()
}
strBtn.addEventListener('click', start)


let myanswer = document.getElementById('myanswer')
let numbers = document.getElementsByClassName('number')
let question = document.getElementById('equation')
myanswer.textContent = ''
let i = 0

//scoring variables
let scoreDiv = document.getElementById('currentScore')
let score = 0
scoreDiv.textContent = 'Your Score : ' + score
let highestScoreDiv = document.getElementById('highestScore')
let highestScore = 0
highestScoreDiv.textContent = 'Highest Score : ' + highestScore
//win
function win(){
    if(i>= quiz.length){
        game.innerHTML = '<div id="win">Congratulaions you Won</div>'
    }
}

//set question
function setQuestion(){
    question.textContent = quiz[i].question
    scoreDiv.textContent = 'Your Score : ' + score
    startSec = 20  
}

//append
for(let i=0;i<numbers.length;i++){
    numbers[i].addEventListener('click', function(){
        myanswer.textContent += numbers[i].innerHTML
    })
}


//chek answer
let next = document.getElementById('nxt')
let wrongMessage = document.getElementById('rng')
function checkAnswer(){
    if(myanswer.textContent == quiz[i].answer){
        wrongMessage.textContent = ''
        clear()
        i++
        setQuestion()
        score++
        scoreDiv.textContent = 'Your Score : ' + score
        startSec = 21
    }else{
        clear()
        wrongMessage.textContent = 'Wrong Answer!!! Try Again'
    }
}
next.addEventListener('click', checkAnswer)



//clear
let del = document.getElementById('del')
function clear(){
    myanswer.textContent = ''
}
del.addEventListener('click', clear)



//restart
let restart = document.getElementById('rst')
restart.addEventListener('click', start)

function loseFun(){
    game.style.display = 'none'
    lose.style.display = 'flex'
}

//timer
let timeDiv = document.getElementById('timer')
let startSec = 20
timeDiv.innerHTML = 'Time Left : ' + '<p id="tl">'+startSec+'</p>'
let timeLeft;
function timer(){
    timeLeft = setInterval(() => {
        if(startSec == 0){
            loseFun()
            return;

        }
        startSec = startSec - 1
        timeDiv.innerHTML = 'Time Left : ' + '<p id="tl">'+startSec+'</p>'
    }, 1000)
}

