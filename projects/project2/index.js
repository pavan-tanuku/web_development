let inputEl = document.getElementById("input-btn");
const decimalEl = document.getElementById("decimal");

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
            
            // Infinity and NaN are NOT data types, They are special numeric values in JavaScript
            
            // Infinit => any_number / 0
            // do not make Infinity as "Infinity" because "Infinity" is a string. 
            if(result === Infinity) { 
                inputEl.value = "Can't divide with zero";
                // do not make the NaN as "NaN" because "NaN" is a string
                // check only isNaN() method
            } else if(Number.isNaN(result)) {
                // NaN => 0/0
                inputEl.value = "Cant divide zero with zero";
            } else {
                inputEl.value = result;
            }
        }
    }
    // logic for decimal
    const lastChar = Number(inputEl.value[inputEl.value.length - 1]);
    let inputStr = inputEl.value;
    let index = 0;
    // getting the index of operator before the last number
    for(let i = inputStr.length-1; i >= 0; i--) {
        if((inputStr[i] === "+") || (inputStr[i] === "-") || (inputStr[i] === "*") || (inputStr[i] === "/")) {
            index = i;
            break;
        }        
    }
    // append the decimal to the input field
    // In the below condition when we remove the (btn.innerText === "."), 
    // then this will be applicable automatically when the last digit is a number
    if(inputStr !== "" && btn.innerText === "." && (lastChar >= 0 && lastChar <= 9)) {
        const lastNumber = inputStr.slice(index + 1, inputStr.length); // you can remove the ending index
        // append decimal when the last number has no decimal
        // eg: 23.7 + 23 => here 23 is the last number
        if(!lastNumber.includes(".")) {
            inputEl.value += ".";
        }
    }
}

// clear the display
function clearDisplay() {
    inputEl.value = "";
}