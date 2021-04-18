var startPage = document.querySelector('.start-page')
var questionPageOne = document.querySelector('.question-page-one')
var questionPageTwo = document.querySelector('.question-page-two')
var questionPageThree = document.querySelector('question-page-three')
var highScorePage = document.querySelector('.high-score-page')
var startButton = document.querySelector('.start-button')
var timerEl = document.querySelector('.timer')
var timeRemaining = 5;


function startQuiz (){
    startPage.setAttribute('style', 'display: none;');
    questionPageOne.removeAttribute('style');
    questionPageOne.setAttribute('style','margin:auto; width:50%; text-align:center;');
    var countdown = setInterval(function(){
        timeRemaining--;
        timerEl.textContent = 'Time Remaining ' + timeRemaining + ' Seconds';
        if (timeRemaining <= 0){
            timeRemaining = 0;
            timerEl.textContent = 'No Time Remaining';
            clearInterval(countdown);
            //this is where you would call the function that's responsible for taking you to the high scores page//
            startPage.setAttribute('style', 'display: none;');
            questionPageOne.setAttribute('style', 'display: none;');
            highScorePage.removeAttribute('style');
            highScorePage.setAttribute('style','margin:auto; width:50%; text-align:center;');
            
        }
    },1000)

    



}

startButton.addEventListener('click', startQuiz);

function displayScores (){
    startPage.setAttribute('style')

}












