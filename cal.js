let displayValue = '';
let calculatorOn = true

function turnOn(){
    calculatorOn = true;
    clearDisplay();
}

function turnOff(){
    calculatorOn=false;
    clearDisplay();
}

function backspace(){
    if(!calculatorOn) return;
        displayValue=displayValue.slice(0,-1)
        updateDisplay()
    
}

function appendnum(value) {
    displayValue += value;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function resultDisplay() {
    try {
        displayValue = eval(displayValue);
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}
