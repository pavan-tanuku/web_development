let inputEl = document.getElementById("input-btn");

function displayNumber(btn) {
    // checking the function is working or NOT
    console.log("Clicked: " + btn && btn.innerText);
    // display only digits
    let btnEl = Number(btn.innerText);
    if(btnEl >= 0 && btnEl <= 9) {
        inputEl.value += btn.innerText;
    } else if(btn.innerText !== "="){
        const lastDigit = inputEl.value[inputEl.value.length - 1];
        // converting the last digit into number
        const lastDigitCasting = Number(lastDigit);
        if(lastDigit !== "" && (lastDigitCasting >= 0 && lastDigitCasting <= 9)) {
            inputEl.value += btn.innerText;
        }
    } else {
        // evaluation 
        console.log("evaluation working");
        const lastDigit = inputEl.value[inputEl.value.length - 1];
        const lastDigitCasting = Number(lastDigit);
        if(btn.innerText === "=" && lastDigitCasting !== "" && (lastDigitCasting >= 0 && lastDigitCasting <= 9)) {
            let result = inputEl.value;
            // computing the entire input string by javascript inbuilt function
            result = eval(result);
            // replacing the input string with the result.
            inputEl.value = result;
        }
    }
}

// clear the display
function clearDisplay() {
    inputEl.value = "";
}