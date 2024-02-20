// First Function
function printWelcomeMessage(firstName, lastName) {
    // Prints a welcome message with the provided first and last name
    console.log(`Welcome ${firstName} ${lastName} to Georgian@ILAC College`);
}

// Second Function
function convertMeasurement(value, fromUnit, toUnit) {
    // Converts a measurement from one unit to another
    switch(fromUnit.toLowerCase()) {
        case "celsius":
            // Celsius to Fahrenheit conversion
            return (value * 9/5) + 32;
        case "fahrenheit":
            // Fahrenheit to Celsius conversion
            return (value - 32) * 5/9;
    }
}

// Third Function
function doMathOperation(...args) {
    // Performs a mathematical operation based on the operator provided
    const [firstNum, secondNum, operator] = args;
    switch(operator) {
        case '+':
            return firstNum + secondNum; // Addition
        case '-':
            return firstNum - secondNum; // Subtraction
        case '*':
            return firstNum * secondNum; // Multiplication
        case '/':
            return firstNum / secondNum; // Division
    }
}

// Fourth Function (Example of an advanced function)
function advancedFunction() {
    // Generates a random number between 1 and 100
    return Math.floor(Math.random() * 100) + 1;
}

// Exporting the functions to be used in other files
module.exports = {
    printWelcomeMessage,
    convertMeasurement,
    doMathOperation,
    advancedFunction
};
