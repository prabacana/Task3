let break_void = " ";
let break_section = "======================================================================================";


//String first section

let break_string = "========================================STRING========================================";

let name = "Bayu Aji Pamungkas";

let mutation_upper = name.toUpperCase();
let mutation_lower = name.toLowerCase();
let mutation_firstChar = name.substring(0,1);
let mutation_sliceChar = name.slice(0,4);
let mutation_merging = name + " Love Javascript";

console.log(break_void);
console.log(break_string);
console.log(name + " ===> Base value");
console.log(name.length + " ===> Length");
console.log(mutation_upper + " ===> To upper");
console.log(mutation_lower + " ===> To lower");
console.log(mutation_firstChar + " ===> Taking first character");
console.log(mutation_sliceChar + " ===> Slicing character");
console.log(mutation_merging + " ===> Adding string");
console.log(break_section);
console.log(break_void);


//Data type manipulation

let break_string2 = "=================================DATA MANIPULATION====================================";

let age = "25";;
let heigth = "175";

let mutation_toNumber = parseInt(age);
let mutation_toFloat = parseFloat(heigth);

console.log(break_void);
console.log(break_string2);
console.log(age + " " + typeof age + " ===> Base value");
console.log(mutation_toNumber + " " + typeof mutation_toNumber + " ===> Change type to number");
console.log(heigth + " " + typeof heigth + " ===> Base value");
console.log(mutation_toFloat + " "  + typeof mutation_toFloat + " ===> Change type to float");
console.log(break_section);
console.log(break_void);


//Data type check

let break_type = "===================================DATA TYPE CHECK====================================";

let paradox = undefined;

console.log(break_void);
console.log(break_type);
console.log(typeof paradox + " ===> Data type");
console.log(break_section);
console.log(break_void);


//Addition and subtraction

let break_addition_subtraction = "===============================ADDITION AND SUBTRACTION===============================";

let num1 = 10;
let num2 = 5;

let addition = num1 + num2;
let subtraction = num1 - num2;

console.log(break_void);
console.log(break_addition_subtraction);
console.log(num1 + " " + "+" + " " + num2 + " " + "=" + " " + addition + " ===> Addition");
console.log(num1 + " " + "-" + " " + num2 + " " + "=" + " " + subtraction + " ===> Subtraction");
console.log(break_section);
console.log(break_void);


//Multiplication and division

let break_multiplicaiton_division = "==============================MULTIPLICATION AND DIVTSION=============================";

let num3 = 6
let num4 = 2

let multiplication = num3 * num4
let division = num3 / num4

console.log(break_void);
console.log(break_multiplicaiton_division);
console.log(num3 + " " + "*" + " " + num4 + " " + "=" + " " + multiplication + " ===> Multiplication");
console.log(num3 + " " + "/" + " " + num4 + " " + "=" + " " + division + " ===> Division");
console.log(break_section);
console.log(break_void);


//Exponent

let break_exponent = "=======================================EXPONENT=======================================";

let num5 = 3
let num6 = 4

let exponent = Math.pow(num5,num6);

console.log(break_void);
console.log(break_exponent);
console.log(num5 + " " + "to the power of " + num6 + " is " + exponent + " ===> Exponent");
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

