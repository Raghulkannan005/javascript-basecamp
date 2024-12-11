document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let operator = '';
    let previousInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.textContent;

            if (value === 'C') {
                currentInput = '';
                operator = '';
                previousInput = '';
                display.value = '';
            } else if (value === '=') {
                if (currentInput && previousInput && operator) {
                    try {
                        currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
                        display.value = currentInput;
                        operator = '';
                        previousInput = '';
                    } catch (error) {
                        display.value = 'Error';
                        currentInput = '';
                        operator = '';
                        previousInput = '';
                    }
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput) {
                    operator = value;
                    previousInput = currentInput;
                    currentInput = '';
                }
            } else {
                currentInput += value;
                display.value = currentInput;
            }
        });
    });
});