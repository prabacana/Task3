let break_void = " ";
let break_section = "======================================================================================";


//Calculator using function

let break_calculator = "======================================CALCULATOR======================================";

let input1 = 10;
let input2 = 5;
let operation = "+"

function calculator(input1, input2, operation) {
    if (typeof input1 !== "number" || typeof input2 !== "number") {
        return "Input not accepted, please input a number"
    }

    if (operation == "+") {
        return input1 + input2
    } else if (operation == "-") {
        return input1 - input2
    } else if (operation == "/") {
        return input1 / input2
    } else if (operation == "*") {
        return input1 * input2
    }
}

let calculator_result = calculator(input1, input2, operation);


console.log(break_void);
console.log(break_calculator);
console.log(input1 + " " + operation + " " + input2 + " = " + calculator_result + " ===> Calculator result");
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

