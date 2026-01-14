# Basketball Scoreboard Game

## Project Overview
This project is a simple basketball scoreboard game built for practice.
It tracks score for two teams: **HOME** and **GUEST**

The goal of this project is to practice JavaScript fundaments such as:
- State management
- Button-driven logic
- Conditional checks
- Resetting application state

---

## Game Rules

- Both teams start with a score of `0`
- Each team can score points using `+1`, `+2`, or `+3` buttons
- Scores update immediately on buttons click
- The game continues until one of the following occurs:
    - The **New Game** button is clicked
    - Any team reaches the **maximum score limit first**
- Once a team reached the maximum score:
    - No further points can be added
    - A new game must be started to continue

---

## Game Constraints

### Constraint 1: No Negative Scores
- Scores must always start from`0`
- Scores can increase
- No decrement or minus operations are allowed

**Why this constraint exists:**
This ensures the score always stays valid and helps practice controlled state updates.

---

### Constraint 2: Team-Specific Buttons
- HOME buttons affect onlt the HOME score
- GUEST buttons affect only the GUEST score
- Each team must have its own score variable

**Why this constraint exitst:**
This helps practice separation of logic and prevents accidential updates to the wrong team.

---

### Constraint 3: Maximum Score Limit
- A maximum score limit (example: `99`) must be defined 
- If a team reached the limit, further score increments must be ignored
- The score must never exceed the defined limit

**Why this constraint exists:**
This teaches conditional logic and protecting application state.

---

### Constraint 4: New Game Reset
- A **New Game** button must reset both HOME and GIEST scores to `0`
- Scores must not reset automatically
- Page refresh reset is acceptable, but New Game must work properly

**Why this constraint exists:**
This teaches intentional state reset and centralized control of application logic.

---

### Constraint 5: No Advanced Features
- No Timers
- No animations
- No sound effects
- No localStorage or database usage
- No external libraries or frameworks

**Why this constraint exists:**
This keeps the projectfocused on core JavaScript logic without unnecessary complexity.

---

## Tech Stack
- HTML
- CSS
- JavaScript

---

## Learning Outcomes
By completing this project, I am to:
- Understand how multiple counters work independently
- Practice handling button events correctly
- Apply constraints to contraol application behavior
- Improve confidence in writing JavaScript loh=gic

---

## Future Improvements (Optional)
- Highlight the leading team
- Disable buttons when the maximum score is reached
- Improve UI styling

---

## How to Run
- Clone or download the repository
- Open the `main.html` file in a web browser