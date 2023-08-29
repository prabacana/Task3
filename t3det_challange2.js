let break_void = " ";
let break_section = "======================================================================================";


//String first section

let break_string = "========================================STRING========================================";

function mutationName(name) {
    let mutation_upper = name.toUpperCase();
    let mutation_lower = name.toLowerCase();
    let mutation_firstChar = name.substring(0, 1);
    let mutation_sliceChar = name.slice(0, 4);
    let mutation_merging = name + " Love Javascript";

    return {
        mutation_upper,
        mutation_lower,
        mutation_firstChar,
        mutation_sliceChar,
        mutation_merging
    };
}

let baseName = "Bayu Aji Pamungkas";
let mutationResult = mutationName(baseName);

console.log(break_void);
console.log(break_string);
console.log(baseName + " ===> Base value");
console.log(mutationResult.length + " ===> Length");
console.log(mutationResult.mutation_upper + " ===> To upper");
console.log(mutationResult.mutation_lower + " ===> To lower");
console.log(mutationResult.mutation_firstChar + " ===> Taking first character");
console.log(mutationResult.mutation_sliceChar + " ===> Slicing character");
console.log(mutationResult.mutation_merging + " ===> Adding string");
console.log(break_section);
console.log(break_void);


//Data type manipulation

let break_string2 = "=================================DATA MANIPULATION====================================";

function mutationBio(age, height){
    let mutationToNumber = parseInt(age);
    let mutationToFloat = parseFloat(height);

    return {
        mutationToNumber,
        mutationToFloat
    }
}

let age = "25";
let height ="175";
let mutatedBio = mutationBio(age, height);

console.log(break_void);
console.log(break_string2);
console.log(age + " " + typeof age + " ===> Base value");
console.log(mutatedBio.mutationToNumber + " " + typeof mutatedBio.mutationToNumber + " ===> Change type to number");
console.log(height + " " + typeof height + " ===> Base value");
console.log(mutatedBio.mutationToFloat + " "  + typeof mutatedBio.mutationToFloat + " ===> Change type to float");
console.log(break_section);
console.log(break_void);


//Data type check

let break_type = "===================================DATA TYPE CHECK====================================";

console.log(break_void);
console.log(break_type);

function check_dataType(paradox){
    console.log(typeof paradox + " ===> Data type");
}

let data = undefined;
check_dataType(data);

console.log(break_section);
console.log(break_void);


//Addition and subtraction

let break_addition_subtraction = "===============================ADDITION AND SUBTRACTION===============================";

function op_addSub(num1, num2) {
    let addition = num1 + num2;
    let subtraction = num1 - num2;

    return {
        addResult: addition,
        subResult: subtraction
    };
}

let num1 = 10;
let num2 = 5;

let result_addSub = op_addSub(num1, num2);

console.log(break_void);
console.log(break_addition_subtraction);
console.log(num1 + " " + "+" + " " + num2 + " " + "=" + " " + result_addSub.addResult + " ===> Addition");
console.log(num1 + " " + "-" + " " + num2 + " " + "=" + " " + result_addSub.subResult + " ===> Subtraction");
console.log(break_section);
console.log(break_void);


//Multiplication and division

let break_multiplication_division = "==============================MULTIPLICATION AND DIVTSION=============================";

function op_mutDiv(num3, num4) {
    let multiplication = num3 * num4;
    let division = num3 / num4;

    return {
        multResult: multiplication,
        divResult: division
    };
}

let num3 = 6;
let num4 = 2;

let result_multDiv = op_mutDiv(num3, num4);

console.log(break_void);
console.log(break_multiplication_division);
console.log(num3 + " " + "*" + " " + num4 + " " + "=" + " " + result_multDiv.multResult + " ===> Multiplication");
console.log(num3 + " " + "/" + " " + num4 + " " + "=" + " " + result_multDiv.divResult + " ===> Division");
console.log(break_section);
console.log(break_void);


//Exponent

let break_exponent = "=======================================EXPONENT=======================================";

function op_exponent(base_number, exponent_number) {
    return Math.pow(base_number, exponent_number);
}

let num5 = 3;
let num6 = 4;

let result_expo = op_exponent(num5, num6);

console.log(break_void);
console.log(break_exponent);
console.log(num5 + " " + "to the power of " + num6 + " is " + result_expo + " ===> Exponent");
console.log(break_section);
console.log(break_void);


//Average array

let break_average =  "=======================================AVERAGE========================================";

let num_array = [5, 8, 2];

let sum = 0;
for (let i = 0; i < num_array.length; i++) {
    sum += num_array[i];
}

let average = sum / num_array.length;

function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    
    let average = sum / numbers.length;
    
    return average;
}

let num_array = [5, 8, 2];

let average = calculateAverage(num_array);

console.log(break_void);
console.log(break_average);
console.log("( " + num_array[0] + " + " +num_array[1] + " + " + num_array[2] + " )" + " / " + num_array.length + " = " + average + " ===> Average array");
console.log(break_section);
console.log(break_void);


//Odd and even

let break_odd_even = "====================================ODD AND EVEN======================================";

let num7 = 7

console.log(break_void);
console.log(break_odd_even);
if (num7 % 2 === 0) {
    console.log(num7 + " ===> Even number.");
} else {
    console.log(num7 + " ===> Odd number.");
}
console.log(break_section);
console.log(break_void);


//Random

let break_rand = "=======================================RANDOM=========================================";

let num_rand_min = 1
let num_rand_max = 5
let num_rand = Math.random() * (num_rand_max - num_rand_min) + num_rand_min;


console.log(break_void);
console.log(break_rand);
console.log(num_rand + " ===> Random number");
console.log(break_section);
console.log(break_void);

