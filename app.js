const player1Score = document.querySelector('.player-1');
const player1Button = document.querySelector('.p1');

const player2Score = document.querySelector('.player-2');
const player2Button = document.querySelector('.p2');

const scoreLimit = document.querySelector('.rounds');
const reset = document.querySelector('.reset');

//Increase Player 1 Score
player1Button.addEventListener('click', () => {
    let currentScore = getScoreValue(player1Score);
    currentScore += 1;
    player1Score.innerText = currentScore;
    isWinner(currentScore, 1);
})

//Increase Player 2 Score
player2Button.addEventListener('click', () => {
    let currentScore = getScoreValue(player2Score);
    currentScore += 1;
    player2Score.innerText = currentScore;
    isWinner(currentScore, 2);
})

//convert <span> innerText to number value
function getScoreValue(score) {
    let p1value = parseInt(score.innerText);
    return p1value;
}

//convert input to number value
function getScoreLimit() {
    let num = parseInt(scoreLimit.value)
    return num;
}

reset.addEventListener('click', () => {
    resetScore();
})

function resetScore() {
    player1Score.innerText = '0';
    player2Score.innerText = '0';
}

//Ran once player score === score limit
function isWinner(score, player){
    if(score === getScoreLimit()){
        setTimeout(() => {  alert(`Player ${player} wins`); }, 170);
        setTimeout(() => {  resetScore(); }, 2000);
    }
}