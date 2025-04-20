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
const colourFive = document.getElementById("colour-five");
const codeFive = document.getElementById("code-five");
const colourDivs = [originalColour, colourTwo, colourThree, colourFour, colourFive];
const codeDivs = [originalCode,codeTwo, codeThree, codeFour, codeFive];
const colourAndCode = document.querySelectorAll(".colour-and-code");

colourAndCode.forEach(copy => {
    copy.addEventListener("click", () => {
        const hex = copy.querySelector(".code").textContent;
        navigator.clipboard.writeText(hex);
        alert(`Copied: ${hex}`);
    });
});

getColourScheme.addEventListener("click", (e) => {
    e.preventDefault();
    const hex = colourPicker.value.slice(1);
    const mode = schemeSelection.value;
    const url = `https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=4`;

    fetch(url)
        .then(res => res.json())
        .then(colour => {            
            for (let i = 0; i < colourDivs.length; i++) {
                const hexValue = i === 0 ? colourPicker.value.toUpperCase() : colour.colors [i - 1].hex.value;
                colourDivs[i].style.backgroundColor = hexValue;
                codeDivs[i].textContent = hexValue;
            };
        });
});

lightAndDarkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    lightAndDarkMode.textContent =
        lightAndDarkMode.textContent === "Dark Mode" ? "Light Mode" : "Dark Mode";
});