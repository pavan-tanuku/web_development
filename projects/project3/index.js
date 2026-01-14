const winnerEl = document.querySelector("#winner");
const displays = document.querySelectorAll(".dsp");
let isGameOver = false;

// main logic 
function score(btn) {
    // we are get the closest .card from the parameter: btn, by using the closest()
    const cardEl = btn.closest(".card");
    // we are getting the display from that card by using the quesrSelector()
    const dspEl = cardEl.querySelector(".dsp");
    let currentScore = Number(dspEl.value); // converting into number.
    let points = Number(btn.innerText);
    switch (points) {
        case 1:
            if (currentScore < 21 && !isGameOver) {
                currentScore += points;
            }
            break;
        case 2:
            if (currentScore < 21 && !isGameOver) {
                currentScore += points;
            }
            break;
        case 3:
            if (currentScore < 21 && !isGameOver) {
                currentScore += points;
            }
            break;
        default:
            console.log("Not a valid Increment!");
    }
    dspEl.value = currentScore;
    // stop the game and announcing the game winner.
    if (currentScore >= 21) {
        isGameOver = true;
        // team winner will be announced as the winner and it will displayed. 
        // No buttons will be worked except the "New Game"
        let teamTitleEl = cardEl.querySelector(".team-title");
        let teamTitle = teamTitleEl.innerText;
        winnerEl.innerHTML = `The winner is: ${teamTitle}`;
    }
}

// new game functionality
function newGame() {
    // updating the all displayes to `0`
    displays.forEach(display => {
        display.value = 0;
    })
    // hiding the winner 
    winnerEl.innerHTML = "";
    // telling the game is not over
    isGameOver = false
}