// DOM references
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const display = document.getElementById("display-screen");
const equalTo = document.querySelector(".equals");
const AC = document.querySelector(".AC");

// variables
let isDisplayEmpty = true;
let value1 = 0;
let value2 = 0;
let totalValue = 0;
let selectedOperator = "";

// event listeners

digits.forEach((digit) => {
    digit.addEventListener("click", () => {
        const digitValue = digit.dataset.value;

        if (isDisplayEmpty) {
            display.value = digitValue;
            isDisplayEmpty = false;
        } else {
            // display.value = display.value + digitValue;
            display.value += digitValue;
        }
    })
})

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        isDisplayEmpty = true;
        value1 = parseInt(display.value);
        selectedOperator = operator.dataset.value;

        console.log(value1);
        console.log(selectedOperator);
    })
})

equalTo.addEventListener("click", () => {
    value2 = parseInt(display.value);

    if (selectedOperator == "+") {
        totalValue = value1 + value2;
    } else if (selectedOperator == "-") {
        totalValue = value1 - value2;
    } else if (selectedOperator == "*") {
        totalValue = value1 * value2;
    } else {
        totalValue = value1 / value2;
    }

    display.value = totalValue;
    isDisplayEmpty = true;
})

AC.addEventListener("click", () => {
    isDisplayEmpty = true;
    display.value = "0";
})