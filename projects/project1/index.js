let countDisplay = document.getElementById("count-display");
let count = 0;
function countPeople() {
    count += 1;
    countDisplay.innerText = count;
    console.log(count);
    
}