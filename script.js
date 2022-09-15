const calculatorDisplay = document.querySelector("h1");
const inputBtns = document.querySelectorAll("button");
const clearBtn = document.getElementById("clear-btn");

let firstValue = 0;
let operatorValue = "";
let awaitingNextValue = false;

function sendNumberValue(number) {
  //   REPLACE CURRENT DISPLAY VALUE IF FIRST VALUE IS ENTERED
  if (awaitingNextValue) {
    calculatorDisplay.textContent = number;
    awaitingNextValue = false;
  } else {
    // IF CURRENT DISPLAY VALUE IS 0, REPLACE IT, IF NOT ADD NUMBER
    const displayValue = calculatorDisplay.textContent;
    calculatorDisplay.textContent =
      displayValue === "0" ? number : displayValue + number;
  }
}

function addDecimal() {
  // IF OPERATOR PRESSED, DON'T ADD DECIMAL
  if (awaitingNextValue) return;
  // IF NO DECIMAL, ADD ONE
  if (!calculatorDisplay.textContent.includes(".")) {
    calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
  }
}

function useOperator(operator) {
  const currentValue = Number(calculatorDisplay.textContent);
  // ASSIGN firstValue IF NO VALUE
  if (!firstValue) {
    firstValue = currentValue;
  } else {
  }
  // READY FOR NEXT VALUE, STORE OPERATOR
  awaitingNextValue = true;
  operatorValue = operator;
  operatorValue = operator;
}

// ADD EVENT LISTENERS FOR NUMBERS, OPERATORS, DECIMAL BUTTONS\
inputBtns.forEach((inputBtn) => {
  if (inputBtn.classList.length === 0) {
    inputBtn.addEventListener("click", () => sendNumberValue(inputBtn.value));
  } else if (inputBtn.classList.contains("operator")) {
    inputBtn.addEventListener("click", () => useOperator(inputBtn.value));
  } else if (inputBtn.classList.contains("decimal")) {
    inputBtn.addEventListener("click", () => addDecimal());
  }
});

// RESET ALL VALUESM DISPLAY
function resetAll() {
  firstValue = 0;
  operatorValue = "";
  awaitingNextValue = false;
  calculatorDisplay.textContent = "0";
}

// EVENT LISTENER
clearBtn.addEventListener("click", resetAll);
