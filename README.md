# Tic-Tac-Toe Game
A classic two-player Tic-Tac-Toe game with clean UI and smooth gameplay.

# Features
* Two-Player Mode - Play with friends on the same device
* Win Detection - Automatically detects winning combinations
* Draw Detection - Recognizes when game ends in a draw
* Reset Options - New Game and Reset Game buttons
* Colorful Design - Vibrant pink theme with yellow title
* Responsive Layout - Works on all screen sizes
* Interactive UI - Hover effects and visual feedback

# Live Demo
https://TahirAhmad88.github.io/TicTacToe_Game/

# How to Play
1. Player O goes first (auto-selected)
2. Click any empty box to place your mark
3. Players alternate turns automatically
4. First to get 3 in a row wins
5. Click New Game or Reset Game to start over

# Screenshots
<img width="1348" height="461" alt="image" src="https://github.com/user-attachments/assets/22b0f9b5-ea28-48ec-9d11-7b474dc273df" />
<img width="1348" height="589" alt="image" src="https://github.com/user-attachments/assets/fd419935-9197-4598-aa28-435695e12a3d" />
<img width="1353" height="586" alt="image" src="https://github.com/user-attachments/assets/3562114c-a53b-4570-bb93-8d3eb8ff3019" />

Tic-Tac-Toe Game Interface

# Project Structure
text
TicTacToe_Game/
├── index.html          # Main HTML file
├── style.css           # Styling and animations
├── script.js           # Game logic
└── README.md           # Documentation

# Technologies Used
1. HTML5 - Structure
2. CSS3 - Styling, animations, responsive design
3. JavaScript - Game logic, DOM manipulation, event handling

# Game Logic
# Win Patterns
   8 possible winning combinations:
* 3 rows
* 3 columns
* 2 diagonals

# Features
* Turn tracking (Player O starts)
* Box disabling after click
* Win/Draw detection
*Message display for results
*Game reset functionality

# Customization
Change Colors
text
/* In style.css */
body { background-color: #ed2596; } /* Change background */
.box { color: #b0413e; } /* Change X/O color */
h1 { color: rgba(255, 255, 44, 0.958); } /* Change title color */

# Change Board Size
text
.game {
    height: 60vmin;
    width: 60vmin;
}

.box {
    height: 18vmin;
    width: 18vmin;
}

# Installation
1. Clone the repository
git clone https://github.com/TahirAhmad88/TicTacToe_Game.git

2. Navigate to project
cd TicTacToe_Game

3. Open index.html in your browser

# Author
Tahir Ahmad

GitHub: @TahirAhmad88

Star this repository if you like it!
