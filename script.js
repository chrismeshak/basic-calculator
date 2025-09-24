const outputSpace = document.querySelector('.js-outputSpace');
const numberButtons = document.querySelectorAll('.js-number');
const operatorButtons = document.querySelectorAll('.js-operator');
const extraButtons = document.querySelectorAll('.js-extras');

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    outputSpace.textContent += button.textContent;
  });
});

let firstValue = null;
let operatorValue = null;

operatorButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const buttonValue = button.textContent;

    if (buttonValue === '=') {
      if (firstValue !== null && operatorValue !== null) {
        const secondValue = parseFloat(outputSpace.textContent);

        let result;

        switch (operatorValue) {
          case '+':
            result = firstValue + secondValue;
            break;

          case '-':
            result = firstValue - secondValue;
            break;

          case '*':
            result = firstValue * secondValue;
            break;

          case '/':
            result = firstValue / secondValue;
            break;
        }

        outputSpace.textContent = result;
        firstValue = null;
        operatorValue = null;
      }
    } else {
      firstValue = parseFloat(outputSpace.textContent);
      operatorValue = buttonValue;
      outputSpace.textContent = '';
    }
  });
});

extraButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const buttonValue = button.textContent;

    if (buttonValue === 'AC') {
      firstValue = null;
      operatorValue = null;
      outputSpace.textContent = '';

    } else if (buttonValue === 'x') {
        outputSpace.textContent = outputSpace.textContent.slice(0, -1);
    } else if (buttonValue === '%') {
      
      if (outputSpace.textContent !== '') {
        const currentValue = parseFloat(outputSpace.textContent);
        outputSpace.textContent = currentValue / 100;
      }
    }
  });
});