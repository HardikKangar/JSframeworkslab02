// Importing the other JavaScript file that contains the functions
const { printWelcomeMessage, convertMeasurement, doMathOperation, advancedFunction } = require('./utilities');

// Calling the functions from the utilities file

// Calling the printWelcomeMessage function with parameters "Hardik" and "Kangar"
printWelcomeMessage("Hardik", "Kangar");

// Calling the convertMeasurement function with parameters 32 (value), "Fahrenheit" (fromUnit), and "Celsius" (toUnit)
console.log("Conversion Result:", convertMeasurement(32, "Fahrenheit", "Celsius"));

// Calling the doMathOperation function with parameters 5 (firstNum), 3 (secondNum), and '-' (operator)
console.log("Math Operation Result:", doMathOperation(5, 3, '-'));

// Calling the advancedFunction to get a result
console.log("Advanced Function Result:", advancedFunction());
