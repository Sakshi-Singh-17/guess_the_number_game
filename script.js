let secret;
let maxTurns;
let turnsLeft;
let currentPlayer = 1;
let player1Score = 0;
let player2Score = 0;
let gameActive = false;

function startGame(difficulty) {

    secret = Math.floor(Math.random() * 50) + 1;
    console.log("Secret (for testing):", secret);

    maxTurns = difficulty === 'easy' ? 10 : 5;
    turnsLeft = maxTurns;
    currentPlayer = 1;
    gameActive = true;

    document.getElementById('modeSelection').style.display = 'none';
    document.getElementById('gameArea').style.display = 'block';
    document.getElementById('resetBtn').style.display = 'none';


    document.getElementById('guessInput').disabled = false;
    document.getElementById('guessInput').value = '';
    document.getElementById('message').className = 'message';
    document.getElementById('message').textContent = '';

    updateTurnDisplay();
    updateTurnsLeft();
}

function updateTurnDisplay() {
    const turnElement = document.getElementById('playerTurn');
    turnElement.textContent = `Player ${currentPlayer}'s Turn`;

    turnElement.style.background = currentPlayer === 1 
        ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
}

function updateTurnsLeft() {
    document.getElementById('turnsLeft').textContent = `Turns remaining: ${turnsLeft}`;
}

function makeGuess() {
    if (!gameActive) return;

    const guessInput = document.getElementById('guessInput');
    const guess = parseInt(guessInput.value);
    const messageElement = document.getElementById('message');

    if (isNaN(guess) || guess < 1 || guess > 50) {
        messageElement.textContent = 'Please enter a number between 1 and 50';
        messageElement.className = 'message too-large';
        return;
    }

    if (guess === secret) {
        messageElement.textContent = `🎉 Player ${currentPlayer} wins! The number was ${secret}`;
        messageElement.className = 'message correct';

        if (currentPlayer === 1) {
            player1Score++;
            document.getElementById('player1Score').textContent = player1Score;

        } else {
            player2Score++;
            document.getElementById('player2Score').textContent = player2Score;
        }

        gameActive = false;
        document.getElementById('guessInput').disabled = true;
        document.getElementById('resetBtn').style.display = 'block';
    } else if (guess < secret) {
        messageElement.textContent = '📉 Too Small! Try a higher number.';
        messageElement.className = 'message too-small';
        nextTurn();
    } else {
        messageElement.textContent = '📈 Too Large! Try a lower number.';
        messageElement.className = 'message too-large';
        nextTurn();
    }

    guessInput.value = '';
    guessInput.focus();
}

function nextTurn() {
    turnsLeft--;
    updateTurnsLeft();

    if (turnsLeft === 0) {
        const messageElement = document.getElementById('message');
        messageElement.textContent = `😔 Game Over! The number was ${secret}`;
        messageElement.className = 'message too-large';
        gameActive = false;
        document.getElementById('guessInput').disabled = true;
        document.getElementById('resetBtn').style.display = 'block';
    } 
    else {
        currentPlayer = currentPlayer === 1 ? 2 : 1;
        updateTurnDisplay();
    }
}

function resetGame() {

    document.getElementById('modeSelection').style.display = 'block';
    document.getElementById('gameArea').style.display = 'none';
}

