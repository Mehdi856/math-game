let game = document.getElementById('game')
let startDiv = document.getElementById('start')
let strBtn = document.getElementById('strBtn')


let quiz = [
    {
        question : '22 + 58',
        a : '57',
        b : '80',
        c : '89',
        d : '78',
        answer : '80'
    },

    {
        question : '37 x 3',
        a : '111',
        b : '93',
        c : '104',
        d : '121',
        answer : '111'
    },

    {
        question : '52 x 13',
        a : '513',
        b : '689',
        c : '676',
        d : '706',
        answer : '676'
    },

    {
        question : '1265 + 745',
        a : '2010',
        b : '2023',
        c : '1989',
        d : '2012',
        answer : '2010'
    },

    {
        question : '3345 - 489',
        a : '2896',
        b : '3002',
        c : '2789',
        d : '2856',
        answer : '2856'
    },

    {
        question : '321 + 654 + 987',
        a : '1962',
        b : '1952',
        c : '1987',
        d : '2001',
        answer : '1962'
    },

    {
        question : '22 + 58',
        a : '57',
        b : '80',
        c : '89',
        d : '78',
        answer : '80'
    },
    /*{},
    {},
    {}*/
]
/*
let p = document.getElementById('p')
console.log(p.textContent == quiz[0].answer)*/

let score = 0
let highestScore = 0
let equation = document.getElementById('equation')
let optionOne = document.getElementById('option1')
let optionTwo = document.getElementById('option2')
let optionThree = document.getElementById('option3')
let optionFour = document.getElementById('option4')
let options = document.getElementsByClassName('ops')

function quizGame(){
    startDiv.style.display = 'none'
    game.style.display = 'flex'
    
        equation.textContent = quiz[i].question
        optionOne.textContent = quiz[i].a
        optionTwo.textContent = quiz[i].b
        optionThree.textContent = quiz[i].c
        optionFour.textContent = quiz[i].d
        Array.from(options).forEach(element => {
            element.addEventListener('click', function(){
                /*if(element.textContent == quiz[i].answer){
                    score += 1
                }else{
                    game.innerHTML = 'You lost Nigger'
                    i = quiz.length
                }*/
                console.log(quiz[i].answer)
            })
        })
}
    


strBtn.addEventListener('click', quizGame)