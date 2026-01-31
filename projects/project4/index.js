const dspEl = document.getElementById("dsp");
const showEye = document.getElementById("eye-show");
const hideEye = document.getElementById("eye-hide");

function generatePassword() {
    const upperCaseAlphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const lowerCaseAlphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '_'];
    let password = [];

    // taking the minimum requirements.
    const capitalIndex = Math.floor(Math.random() * upperCaseAlphabets.length);
    password.push(upperCaseAlphabets[capitalIndex]);
    const lowerIndex = Math.floor(Math.random() * lowerCaseAlphabets.length);
    password.push(lowerCaseAlphabets[lowerIndex]);
    const numIndex = Math.floor(Math.random() * numbers.length);
    password.push(numbers[numIndex]);
    const symbolIndex = Math.floor(Math.random() * symbols.length);
    password.push(symbols[symbolIndex]);

    // Generating complete password to the required length
    const alphaNumeric = [...upperCaseAlphabets, ...lowerCaseAlphabets, ...numbers];
    for (let i = 0; i < 8; i++) {
        const indexIt = Math.floor(Math.random() * alphaNumeric.length);
        password.push(alphaNumeric[indexIt]);
    }

    // shuffle the password
    shufflePassword(password);
    // converting the array to string using join()
    let finalPasswordString = password.join("");
    // return password;    
    dspEl.value = finalPasswordString;
}

// Shuffle function
function shufflePassword(password) {
    for (let i = password.length - 1; i > 0; i--) {
        // getting the index to shuffle the index
        let shuffleIndex = Math.floor(Math.random() * (i + 1));
        // swapping the array
        [password[i], password[shuffleIndex]] = [password[shuffleIndex], password[i]];
    }
    return password;
}

/* password toggle Feature */

// Show password
showEye.addEventListener("click", function () {
    // udpating the input type to "text"
    dspEl.type = "text";
    // hiding the show icon
    showEye.style.display = "none";
    // showing the hide icon
    hideEye.style.display = "inline";
});

// Hide password
hideEye.addEventListener("click", function () {
    // updating the input type to "password"
    dspEl.type = "password";
    // showing the show icon
    showEye.style.display = "inline";
    // hiding the hide icon
    hideEye.style.display= "none";
});