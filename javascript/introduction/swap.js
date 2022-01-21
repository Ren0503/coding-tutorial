//take input from the users
let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');

// 1. Using temporary variable
//create a temporary variable
let temp;

//swap variables
temp = a;
a = b;
b = temp;

// 2. Using destructuring assignment
[a, b] = [b, a];

// 3. Using arithmetic operators
// addition and subtraction operator
a = a + b;
b = a - b;
a = a - b;

// 4. Using XOR
// XOR operator
a = a ^ b
b = a ^ b
a = a ^ b

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);
