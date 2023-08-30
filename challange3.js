let break_void = " ";
let break_section = "======================================================================================";


//Calculator using function

let break_calculator = "======================================CALCULATOR======================================";

function calculator_addition(number1, number2){
    return number1 + number2
}

function calculator_subtraction(number1, number2){
    return number1 - number2
}

function calculator_multiplication(number1, number2){
    return number1 * number2
}

function calculator_division(number1, number2){
    return number1 / number2
}

let num1 = 10;
let num2 = 5;

let additionResult = calculator_addition(num1, num2);
let subtractionResult = calculator_subtraction(num1, num2); 
let multiplicationResult = calculator_multiplication(num1, num2);
let divisonResult = calculator_division(num1, num2);

console.log(break_void);
console.log(break_calculator);
console.log(num1 + " + " + num2 + " = " + additionResult + " ===> Calculator addition");
console.log(num1 + " - " + num2 + " = " + subtractionResult + " ===> Calculator subtraction");
console.log(num1 + " * " + num2 + " = " + multiplicationResult + " ===> Calculator multiplication");
console.log(num1 + " / " + num2 + " = " + divisonResult + " ===> Calculator division")
console.log(break_section);
console.log(break_void);


//Exponent using expression function

let break_exponent = "=======================================EXPONENT=======================================";

const operationExponent = function(base_number, exponent_number) {
    return Math.pow(base_number, exponent_number);
}

let num3 = 3;
let num4 = 4;

let resultExponent = operationExponent(num3, num4);

console.log(break_void);
console.log(break_exponent);
console.log(num3 + " " + "to the power of " + num4 + " is " + resultExponent + " ===> Exponent with expression function");
console.log(break_section);
console.log(break_void);

