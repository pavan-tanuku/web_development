# The Basketball Game Points Table (Scoreboard App)

A beginner-friendly JavaScript project that simulates a simple game points table.
Each team can score points using predefined buttons, and the first team to reach
or cross the maximum score wins the game.

This project focuses on understanding **DOM traversal, event handling, and game state management**.

---

## Project Overview

- Two teams compete by scoring points
- Each team has buttons to add `+1`, `+2`, or `+3` points
- Scores update instantly on button clicks
- The game stops automatically when a team wins
- A **New Game** button resets the game

---

## Game Rules

- Both teams start with a score of `0`
- Teams can score points using `+1`, `+2`, or `+3` buttons
- The game continues until one team reaches **21 or more**
- The first team to reach or cross `21` is declared the winner
- Once the game is over, score buttons stop working
- Clicking **New Game** resets:
  - both team scores
  - winner message
  - game state

---

## Constraints Applied

- Scores are updated **only through JavaScript**
- Manual typing in score fields is disabled using `readonly`
- DOM elements are selected **relative to the clicked button**
- Game state is controlled using a boolean flag (`isGameOver`)
- No hardcoded team IDs are used for logic

---

## Technologies Used

- **HTML** – Structure
- **CSS** – Layout and styling
- **JavaScript** – Game logic and DOM manipulation

---

## What I Learned

- Difference between `querySelector` and `querySelectorAll`
- How `closest()` works for upward DOM traversal
- Selecting elements based on context instead of hardcoding
- Managing application state using a boolean flag
- Resetting multiple DOM elements correctly
- Using `readonly` inputs for display-only values

---

## Future Improvements (Optional)

- Disable buttons visually after the game ends
- Highlight the winning team
- Add animations for score updates
- Make the max score configurable

---

## How to Run
- Clone or download the repository
- Open the `main.html` file in a web browser

---

This project was stopped intentionally after achieving the learning goals,
without over-engineering or unnecessary refactoring.

