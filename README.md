# 🎯 Number Guessing Game

A fun and interactive **2-Player Number Guessing Game** built using **HTML, CSS, and Vanilla JavaScript**.

Players take turns trying to guess a randomly generated number between **1 and 50**. The game provides instant feedback after every guess and keeps track of both players' scores.

🔗 **Live Demo:** https://guess-the-number-game-gules-nine.vercel.app/

---

## 📌 About the Project

The **Number Guessing Game** is a browser-based mini-game designed to practice and demonstrate core frontend development concepts.

The game includes:

* 🎮 Two-player gameplay
* 🎚️ Easy and Hard difficulty modes
* 🔢 Random number generation
* 🔄 Automatic player turn switching
* 📊 Individual player scores
* 💡 Higher/lower hints
* ⚠️ Input validation
* 🔢 Turn counter
* 🔁 Play Again functionality
* 📱 Responsive user interface

---

## 🎮 How to Play

1. Open the game.
2. Select a difficulty level:

   * **Easy** → 10 turns
   * **Hard** → 5 turns
3. Player 1 starts the game.
4. Enter a number between **1 and 50**.
5. Click **Guess**.
6. The game will tell you whether your guess is:

   * 📉 Too small
   * 📈 Too large
   * 🎉 Correct
7. If the guess is incorrect, the turn automatically switches to the other player.
8. The player who guesses the secret number wins the round.
9. If all turns are used without finding the number, the game ends.
10. Click **Play Again** to start a new round.

---

## ✨ Features

### 🎚️ Difficulty Levels

The game provides two difficulty levels:

| Difficulty | Turns |
| ---------- | ----- |
| 🟢 Easy    | 10    |
| 🔴 Hard    | 5     |

The number of available turns changes according to the selected difficulty.

### 👥 2-Player Gameplay

Players take turns guessing the randomly generated number.

The interface clearly displays whose turn it is.

### 🔢 Random Number Generation

At the beginning of every game, JavaScript generates a random number between **1 and 50**.

```javascript
secret = Math.floor(Math.random() * 50) + 1;
```

This makes every round different.

### 📊 Score Tracking

The game maintains separate scores for both players.

* Player 1 score
* Player 2 score

The score increases when the corresponding player correctly guesses the number.

### 💡 Smart Feedback

The game provides useful feedback after every valid guess:

* 📉 **Too Small!** → Try a higher number.
* 📈 **Too Large!** → Try a lower number.
* 🎉 **Correct!** → The player wins.

### ⚠️ Input Validation

The game checks whether the entered value is a valid number between **1 and 50**.

Invalid inputs are rejected with an appropriate message.

### 🔄 Automatic Turn Switching

After an incorrect guess, the game automatically changes the current player.

```javascript
currentPlayer = currentPlayer === 1 ? 2 : 1;
```

### 🔁 Play Again

After winning or running out of turns, players can start another round using the **Play Again** button.

---

## 🛠️ Technologies Used

### Frontend

* **HTML5** — Structure of the game
* **CSS3** — Styling, layout, gradients, buttons, and responsive design
* **JavaScript (Vanilla JS)** — Game logic, DOM manipulation, random number generation, validation, scoring, and turn management

---

## 📂 Project Structure

```text
guess_the_number_game/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

Contains the structure of the game interface, including:

* Difficulty selection
* Score board
* Player turn display
* Guess input
* Guess button
* Game messages
* Play Again button

### `style.css`

Handles the visual appearance of the game, including:

* Layout
* Colors
* Gradients
* Buttons
* Score board
* Game messages
* Responsive styling

### `script.js`

Contains the complete game logic, including:

* Random number generation
* Difficulty selection
* Turn management
* Guess validation
* Score calculation
* Player switching
* Game-over handling
* Game reset

---

## 🧠 Key JavaScript Concepts Practiced

This project helped practice several important JavaScript concepts:

* Variables and state management
* Functions
* Conditional statements
* Ternary operators
* `Math.random()`
* `Math.floor()`
* `parseInt()`
* DOM manipulation
* `getElementById()`
* `textContent`
* `.value`
* `.disabled`
* Event handling
* Template literals
* Input validation
* Game-state management

---

## 🚀 Getting Started

You don't need any framework or external dependency to run this project.

### 1. Clone the repository

```bash
git clone https://github.com/Sakshi-Singh-17/guess_the_number_game.git
```

### 2. Open the project

```bash
cd guess_the_number_game
```

### 3. Run the game

Open `index.html` in your web browser.

You can also use **VS Code + Live Server** for easier development.

---

## 🎯 Learning Objectives

This project was created to strengthen practical understanding of:

* Frontend fundamentals
* JavaScript logic building
* DOM manipulation
* User input handling
* Conditional logic
* Game-state management
* Interactive UI development
* Responsive web design

---

## 🔮 Future Improvements

Possible future enhancements include:

* 🏆 High-score / leaderboard system
* 🎨 More difficulty levels
* ⏱️ Countdown timer
* 🔊 Sound effects
* 📱 Improved mobile experience
* 📈 Game statistics
* 🎮 Multiple rounds
* 🌙 Theme switcher
* 🧠 More advanced game modes

---

## 👩‍💻 Author

**Sakshi Singh**

BTech CSE (AI & ML) Student | Aspiring Data Analyst

GitHub: [Sakshi-Singh-17](https://github.com/Sakshi-Singh-17)

---

## ⭐ Support

If you found this project useful or interesting, consider giving the repository a ⭐ on GitHub!

---

### 📄 License

This project is open-source and available for learning and educational purposes.
