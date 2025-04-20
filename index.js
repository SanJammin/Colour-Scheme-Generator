const colourPicker = document.getElementById("colour-picker");
const schemeSelection = document.getElementById("scheme-selection");
const getColourScheme = document.getElementById("get-colour-scheme");
const lightAndDarkMode = document.getElementById("light-and-dark-mode");
const originalColour = document.getElementById("original-colour");
const originalCode = document.getElementById("original-code");
const colourTwo = document.getElementById("colour-two");
const codeTwo = document.getElementById("code-two");
const colourThree = document.getElementById("colour-three");
const codeThree = document.getElementById("code-three");
const colourFour = document.getElementById("colour-four");
const codeFour = document.getElementById("code-four");
const colourFive = document.getElementById("colour-Five");
const codeFive = document.getElementById("code-Five");

colourPicker.addEventListener("input", () => {
    originalColour.style.backgroundColor = colourPicker.value;
    originalCode.textContent = colourPicker.value;
});