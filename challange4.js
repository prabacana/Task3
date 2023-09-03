let break_void = " ";
let break_section = "======================================================================================";


//Calculator using arrow

let break_calculator = "===================================CALCULATOR ARROW===================================";

const calculator = (input1, input2, operation) => {
    if (typeof input1 !== "number" || typeof input2 !== "number") {
        return "Input not accepted, please input a number"
    };

    if (operation == "+") {
        return input1 + input2
    } else if (operation == "-") {
        return input1 - input2
    } else if (operation == "/") {
        return input1 / input2
    } else if (operation == "*") {
        return input1 * input2
    };
};

let input1 = 10;
let input2 = 5;
let operation = "+"

let calculator_result = calculator(input1, input2, operation);

console.log(break_void);
console.log(break_calculator);
console.log(input1 + " " + operation + " " + input2 + " = " + calculator_result + " ===> Calculator result");
console.log(break_section);
console.log(break_void);


//Temperature using arrow

let break_temp_arrow = "==================================TEMPERATURE ARROW===================================";

const op_temperature_arrow = (tempCelcius_arrow) => (tempCelcius_arrow * 9/5) + 32;

let celcius_arrow = 54;
let fahrenheit_arrow = op_temperature_arrow(celcius_arrow);

console.log(break_void);
console.log(break_temp_arrow);
console.log(celcius_arrow + " °C ===> " + fahrenheit_arrow + " °F");
console.log(break_section);
console.log(break_void);


//Temperature using currying

let break_temp_curry = "=================================TEMPERATURE CURRYING=================================";

let convert_parameter_curry = 1.8 // because of (X celcius * 9) / 5, since X is still unknown as a placeholder in process the value will be treated same as 1
let celcius_curry = 54
let fahrenheit_curry = 32

const op_temperature_curry = (tempCelcius_arrow) => {
    return function (x) {
        return function (y) {
            return tempCelcius_arrow * x + y
        };
    };
};

console.log(break_void);
console.log(break_temp_curry);
console.log(celcius_curry + " °C ===> " + op_temperature_curry(celcius_curry)(convert_parameter_curry)(fahrenheit_curry) + " °F")
console.log(break_section);
console.log(break_void);

