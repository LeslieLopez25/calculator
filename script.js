const calculatorDisplay = document.querySelector("h1");
const inputBtns = document.querySelectorAll("button");
const clearBtn = document.getElementById("clear-btn");

function sendNumberValue(number) {
  // IF CURRENT DISPLAY VALUE IS 0, REPLACE IT, IF NOT ADD NUMBER
  const displayValue = calculatorDisplay.textContent;
  calculatorDisplay.textContent =
    displayValue === "0" ? number : displayValue + number;
}

function addDecimal() {
  // IF NO DECIMAL, ADD ONE
  if (!calculatorDisplay.textContent.includes(".")) {
    calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
  }
}

// ADD EVENT LISTENERS FOR NUMBERS, OPERATORS, DECIMAL BUTTONS\
inputBtns.forEach((inputBtn) => {
  if (inputBtn.classList.length === 0) {
    inputBtn.addEventListener("click", () => sendNumberValue(inputBtn.value));
  } else if (inputBtn.classList.contains("operator")) {
    inputBtn.addEventListener("click", () => sendNumberValue(inputBtn.value));
  } else if (inputBtn.classList.contains("decimal")) {
    inputBtn.addEventListener("click", () => addDecimal());
  }
});

// RESET DISPLAY
function resetAll() {
  calculatorDisplay.textContent = "0";
}

// EVENT LISTENER
clearBtn.addEventListener("click", resetAll);
