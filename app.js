// DOM references
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const numberDisplay = document.getElementById("display-screen");
const expressionDisplay = document.getElementById("expression-screen");
const equalTo = document.querySelector(".equals");
const AC = document.querySelector(".AC");

// variables
let isNumberDisplayEmpty = true;
let isExpressionDisplayOn = true;
let value1 = 0;
let value2 = 0;
let totalValue = 0;
let selectedOperator = "";
let expression = "";

// event listeners

digits.forEach((digit) => {
    digit.addEventListener("click", () => {
        // grab the digit value from the dataset of the pressed key!
        const digitValue = digit.dataset.value;
        // set isExpressionDisplayOn to true
        isExpressionDisplayOn = true;

        // if the display has zero replace the zero with the digit value, otherwise append the digit value to the existing number.
        if (isNumberDisplayEmpty) {
            numberDisplay.value = digitValue;
            // on the next 
            isNumberDisplayEmpty = false;
        } else {
            numberDisplay.value += digitValue;
        }
    })
})

operators.forEach((operator) => {
    // add an event listener to every operator
    operator.addEventListener("click", () => {

        // set the isNumberDisplayEmpty to (true) -- get the number display value and convert to a number and store in a variable (value1) -- grab the pressed operator and save in a variable (selectedOperator).
        isNumberDisplayEmpty = true;
        value1 = parseFloat(numberDisplay.value);
        selectedOperator = operator.dataset.value;

        // if isExpressionDisplayOn is true set the expressionDisplay value to the expression of the (value1) and (selectedOperator)
        if (isExpressionDisplayOn) {
            expressionDisplay.value = value1.toString() + " " + selectedOperator;
        }
    })
})

equalTo.addEventListener("click", () => {
    // grab the input current value and save into the variable (value2) 
    value2 = parseFloat(numberDisplay.value);

    // if isExpressionDisplayOn is true set the expressionDisplay value to the expression of the (value1) and (selectedOperator) and (value2)
    if (isExpressionDisplayOn) {
        expressionDisplay.value = expressionDisplay.value + " " + value2.toString() + " " + "=";
    }

    // perfom the calculation based on the selected operator
    if (selectedOperator == "+") {
        totalValue = value1 + value2;
    } else if (selectedOperator == "-") {
        totalValue = value1 - value2;
    } else if (selectedOperator == "*") {
        totalValue = value1 * value2;
    } else {
        totalValue = value1 / value2;
    }

    // set the numberDisplay value to the total value
    numberDisplay.value = totalValue;
    // set the isNumberDisplayEmpty true
    isNumberDisplayEmpty = true;
    // set isExpressionDisplayOn to false 
    isExpressionDisplayOn = false;
})

AC.addEventListener("click", () => {
    isNumberDisplayEmpty = true;
    expressionDisplay.value = "";
    numberDisplay.value = "0";
})