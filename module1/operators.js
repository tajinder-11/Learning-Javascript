// Arithmetic operators

let x = 5;
let y = 5;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);//Returns quotient
console.log(x % y);//Returns remainder

//Concatenation
// in javascript (+) operator is used for concatination.
let a = 'Tajinder';
let b = 'Singh';
console.log(a + ' ' + b);

// Exponent 
//the expression q ** b raises a powers to b.
let q = 2;
let w = 3;
console.log(q ** w);

// Increment Operator 

let e = 1;
e++;
console.log(e);

// Decrement operator

let r = 1;
--r;
console.log(r);

// Assignment operators

let operator = 10;

operator += 5
console.log(operator);
operator -= 5;
console.log(operator);
operator *= 5;
console.log(operator);
operator /= 5;
console.log(operator);
operator %= 5;
console.log(operator);
operator **= 5;
console.log(operator);

// Comparison Operators

let opr = 2 == 2; // It only compares the value.
console.log(opr); // it compares the value and data type as well.
opr = 2==='2';
console.log(opr);
opr = 2 != 2;
console.log(opr);
opr = 2 !== '2';
console.log(opr);
opr = 5 > 2;
console.log(opr);
opr = 10 < 5;
console.log(opr);
opr = 1 >= 1;
console.log(opr);
opr = 2 <= 2;
console.log(opr);

// bitwise operators 

let d = 5;
let g = 10;

let c = ~d;
console.log(c);