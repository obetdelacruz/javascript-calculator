const numberButtons = document.querySelectorAll(".is-num");
const largeDisplay = document.querySelector(".large-display");
const clearButton = document.querySelector(".is-clear");

let currentInput = "";
let previousInput = "";

numberButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    currentInput += event.target.textContent;
    largeDisplay.textContent = currentInput;
  });
});

clearButton.addEventListener("click", () => {
  currentInput = "0";
  largeDisplay.textContent = currentInput;
});
