// DOM references
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const numberDisplay = document.getElementById("display-screen");
const expressionDisplay = document.getElementById("expression-screen");
const equalTo = document.querySelector(".equals");
const AC = document.querySelector(".AC");

// variables
let isDisplayEmpty = true;
let value1 = 0;
let value2 = 0;
let totalValue = 0;
let selectedOperator = "";
let expression = "";

// event listeners

digits.forEach((digit) => {
    digit.addEventListener("click", () => {
        const digitValue = digit.dataset.value;

        if (isDisplayEmpty) {
            numberDisplay.value = digitValue;
            isDisplayEmpty = false;
            // expressionDisplay.value = "";
        } else {
            // display.value = display.value + digitValue;
            numberDisplay.value += digitValue;
        }
    })
})

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        isDisplayEmpty = true;
        value1 = parseInt(numberDisplay.value);
        selectedOperator = operator.dataset.value;
        expressionDisplay.value = value1.toString() + " " + selectedOperator;

        console.log(value1);
        console.log(selectedOperator);
    })
})

equalTo.addEventListener("click", () => {
    value2 = parseInt(numberDisplay.value);
    expressionDisplay.value = expressionDisplay.value + " " + value2.toString() + " " + "=";
    if (selectedOperator == "+") {
        totalValue = value1 + value2;
    } else if (selectedOperator == "-") {
        totalValue = value1 - value2;
    } else if (selectedOperator == "*") {
        totalValue = value1 * value2;
    } else {
        totalValue = value1 / value2;
    }

    numberDisplay.value = totalValue;
    isDisplayEmpty = true;
})

AC.addEventListener("click", () => {
    isDisplayEmpty = true;
    expressionDisplay.value = "";
    numberDisplay.value = "0";
})