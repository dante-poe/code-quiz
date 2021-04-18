var startPage = document.querySelector('.start-page')
var questionPage = document.querySelector('.question-page')
var highScorePage = document.querySelector('.high-score-page')
var startButton = document.querySelector('.start-button')
var timerEl = document.querySelector('.timer')
var timeRemaining = 5;

function startQuiz (){
    startPage.setAttribute('style', 'display: none;');
    questionPage.removeAttribute('style');
    var countdown = setInterval(function(){
        timeRemaining--;
        timerEl.textContent = 'Time Remaining ' + timeRemaining + ' Seconds';
        if (timeRemaining <= 0){
            timeRemaining = 0;
            timerEl.textContent = 'No Time Remaining';
            clearInterval(countdown);
            //this is where you would call the function that's responsible for taking you to the high scores page//
            startPage.setAttribute('style', 'display: none;');
            questionPage.setAttribute('style', 'display: none;');
            highScorePage.removeAttribute('style');
            
        }
    },1000)
    

}

startButton.addEventListener('click', startQuiz);

function displayScores (){
    startPage.setAttribute('style')

}












