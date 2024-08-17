let display = document.getElementById('display');
let expression = '';

function append(char) {
    if (char === '=') {
        try {
            expression = eval(expression);
            display.value = expression;
        } catch (e) {
            display.value = 'Error';
        }
    } else if (char === 'C') {
        expression = '';
        display.value = '';
    } else {
        expression += char;
        display.value = expression;
    }
}

function clearDisplay() {
    expression = '';
    display.value = '';
}
