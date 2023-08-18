const convertBtn = document.getElementById("convertBtn");
const celsiusInput = document.getElementById("celsius");
const resultDisplay = document.getElementById("result");

convertBtn.addEventListener("click", () => {
    const celsiusValue = parseFloat(celsiusInput.value);
    
    if (!isNaN(celsiusValue)) {
        const fahrenheitValue = (celsiusValue * 9/5) + 32;
        resultDisplay.textContent = `${celsiusValue}°C is ${fahrenheitValue.toFixed(2)}°F`;
    } else {
        resultDisplay.textContent = "Please enter a valid number.";
    }
});
