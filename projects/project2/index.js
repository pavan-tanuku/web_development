let inputEl = document.getElementById("input-btn");

function displayNumber(btn) {
    // display only digits
    let btnEl = Number(btn.innerText);
    if(btnEl >= 0 && btnEl <= 9) {
        inputEl.value += btn.innerText;
    } else {
        console.log("It's NaN");
        
    }
}

function clearDisplay() {
    inputEl.value = "";
}