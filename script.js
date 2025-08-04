let display = document.getElementById('display');

function appendNumber(number) {
  if (display.innerText === '0') {
    display.innerText = number;
  } else {
    display.innerText += number;
  }
}

function appendOperator(op) {
  const lastChar = display.innerText.slice(-1);
  if ("+-*/%".includes(lastChar)) return; // Prevent multiple operators
  display.innerText += op;
}

function clearDisplay() {
  display.innerText = '0';
}

function deleteLast() {
  display.innerText = display.innerText.length > 1
    ? display.innerText.slice(0, -1)
    : '0';
}

function calculate() {
  try {
    display.innerText = eval(display.innerText.replace('%', '/100'));
  } catch (e) {
    display.innerText = 'Error';
  }
}
