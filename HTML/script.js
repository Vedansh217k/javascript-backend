document.addEventListener("DOMContentLoaded", () => {
    const body = document.getElementById("calculator-container");

    const container = document.createElement("div");
    container.innerHTML = `
        <h2>Calculator</h2>
        <input id="num1" type="number" placeholder="first number"><br>
        <input id="num2" type="number" placeholder="second number"><br>
        
        <select id="option">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select><br>

        <button id="calcBtn">Calculate</button>
        <p id="result">Result:</p>
    `;

    body.appendChild(container);

    document.getElementById("calcBtn").addEventListener("click", calculate);
});

function calculate() {
    const a = parseFloat(document.getElementById("num1").value);
    const b = parseFloat(document.getElementById("num2").value);
    const option = document.getElementById("option").value;
    const resultElement = document.getElementById("result");
    let result;

    if (isNaN(a) || isNaN(b)) {
        result = "invalid input";
    } else {
        switch (option) {
            case "+":
                result = a + b;
                break;
            case "-":
                result = a - b;
                break;
            case "*":
                result = a * b;
                break;
            case "/":
                result = b === 0 ? "error: Divide by zero" : a / b;
                break;
            default:
                result = "invalid operator";
        }
    }

        resultElement.innerText = `Result: ${a} ${option} ${b} = ${result}`;
}