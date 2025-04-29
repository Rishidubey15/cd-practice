const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (button.classList.contains('operator')) {
      if (currentInput === '') return;
      operator = value;
      previousInput = currentInput;
      currentInput = '';
    } else if (button.classList.contains('equal')) {
      if (currentInput === '' || previousInput === '') return;
      currentInput = calculate(previousInput, currentInput, operator);
      display.value = currentInput;
      previousInput = '';
      operator = '';
    } else if (button.classList.contains('clear')) {
      currentInput = '';
      previousInput = '';
      operator = '';
      display.value = '';
    } else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});

function calculate(a, b, op) {
  a = parseFloat(a);
  b = parseFloat(b);
  switch(op) {
    case '+': return (a + b).toString();
    case '-': return (a - b).toString();
    case '*': return (a * b).toString();
    case '/': return b !== 0 ? (a / b).toString() : 'Error';
    default: return '';
  }
}
