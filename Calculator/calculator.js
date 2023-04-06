let currentInput = document.querySelector("#currentInput");
let answerScreen = document.querySelector("#answerScreen");


//getting values from buttons to display
function number(value) {
    currentInput.innerHTML += value
}

// to calculate
function calc() {
    let result =  eval(currentInput.innerHTML);
    answerScreen.innerHTML = result;
    
}

// to clear display screen
function clearDisplay(){
    document.getElementById("currentInput").innerHTML = "";
    answerScreen.innerHTML = 0;
}
   



