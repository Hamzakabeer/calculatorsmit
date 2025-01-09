const display = document.getElementById('display');

function append(value) {
    const operators = ['+', '-', '*', '/', '%', '^2', '√', '1/'];
    const lastChar = display.innerText[display.innerText.length - 1];


    if (display.innerText === '0' && !operators.includes(value)) {
        display.innerText = value;
    }
   
    else if (operators.includes(value) && operators.includes(lastChar)) {
        display.innerText = display.innerText.slice(0, -1) + value;
    } else {
        display.innerText += value;
    }
}

function clearEntry() {
    display.innerText = '0';
}

function clearAll() {
    display.innerText = '0';
}

function backspace() {
    if (display.innerText.length === 1) {
        display.innerText = '0';
    } else {
        display.innerText = display.innerText.slice(0, -1);
    }
}

function calculate() {
    try {
        display.innerText = eval(display.innerText);
    } catch (error) {
        display.innerText = 'Error';
    }
}
