let currentInput = '0';
let operator = null;
let prevInput = '0';

function updateDisplay() {
    document.getElementById('display').innerText = currentInput;
}

function appendNumber(number) {
    if (currentInput === '0' || currentInput === '-0') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    operator = null;
    prevInput = '0';
    updateDisplay();
}

function setOperator(op) {
    if (operator !== null) {
        calculate();
        prevInput = currentInput;
        currentInput = '0';
    }
    operator = op;
}

function calculate() {
    let result;
    const prev = parseFloat(prevInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = null;
    prevInput = '0';
    updateDisplay();
}

updateDisplay();
