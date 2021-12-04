const player1Score = document.querySelector('.player-1');
const player1Button = document.querySelector('.p1');

const player2Score = document.querySelector('.player-2');
const player2Button = document.querySelector('.p2');

const reset = document.querySelector('.reset')

//Increase Player 1 Score
player1Button.addEventListener('click', () => {
    let currentScore = getScoreValue(player1Score);
    currentScore += 1;
    player1Score.innerText = currentScore;
})

//Increase Player 2 Score
player2Button.addEventListener('click', () => {
    let currentScore = getScoreValue(player2Score);
    currentScore += 1;
    player2Score.innerText = currentScore;
})

//convert <span> innerText to number value
function getScoreValue(score) {
    let p1value = parseInt(score.innerText);
    return p1value;
}

reset.addEventListener('click', () => {
    player1Score.innerText = '0';
    player2Score.innerText = '0';
})
