let scores, currentScore, activePlayer, gamePlaying;

function init() {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.getElementById('score-1').textContent = '0';
  document.getElementById('score-2').textContent = '0';
  document.getElementById('current-1').textContent = 'Current: 0';
  document.getElementById('current-2').textContent = 'Current: 0';
  document.getElementById('dice').style.display = 'none';
  

  document.getElementById('player-1').classList.add('active');
  document.getElementById('player-2').classList.remove('active');
}

function switchPlayer() {
  document.getElementById(`current-${activePlayer + 1}`).textContent = 'Current: 0';
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  document.getElementById('player-1').classList.toggle('active');
  document.getElementById('player-2').classList.toggle('active');
}

// Roll Dice Function 
document.getElementById('roll-dice').addEventListener('click', function () {
  if (gamePlaying) {
    const dice = Math.floor(Math.random() * 6) + 1;
    const diceDOM = document.getElementById('dice');
    diceDOM.style.display = 'block';
    diceDOM.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current-${activePlayer + 1}`).textContent = `Current: ${currentScore}`;
    } else {
      switchPlayer();
    }
  }
});

//Hold score function 
document.getElementById('hold-score').addEventListener('click', function () {
  if (gamePlaying) {
    scores[activePlayer] += currentScore;

    document.getElementById(`score-${activePlayer + 1}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      gamePlaying = false;
      document.getElementById('dice').style.display = 'none';
      document.getElementById(`player-${activePlayer + 1}`).classList.add('winner');
    } else {
      switchPlayer();
    }
  }
});

document.getElementById('new-game').addEventListener('click', init);

init();
