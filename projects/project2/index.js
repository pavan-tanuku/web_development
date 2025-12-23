let inputEl = document.getElementById("input-btn");

function displayNumber(btn) {
    // display only digits
    let btnEl = Number(btn.innerText);
    if(btnEl >= 0 && btnEl <= 9) {
        inputEl.value += btn.innerText;
    } else {
        console.log("It's NaN");
        const lastDigit = inputEl.value[inputEl.value.length - 1];
        // converting the last digit into number
        const lastDigitCasting = Number(lastDigit);
        if(lastDigit !== "" && (lastDigitCasting >= 0 && lastDigitCasting <= 9)) {
            inputEl.value += btn.innerText;
        }
    }
}

// clear the display
function clearDisplay() {
    inputEl.value = "";
}