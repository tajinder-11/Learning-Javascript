// Changing String to a number
let amount = '100';
console.log(amount, typeof amount);
amount = parseInt(amount);
amount = +amount;
amount = Number(amount);
console.log(amount, typeof amount);

// Change a number to a String
let number = 11;
console.log(number, typeof number);
number = number.toString();
number = String(amount);
console.log(number, typeof number);

// Change decimal to a float 
let float = '99.5';
console.log(float, typeof float);
float = parseFloat(float);
console.log(float, typeof float);

// change number to boolean 
let num = 1;
console.log(num, typeof num);
let ans = Boolean(num);
console.log(ans, typeof ans);

// NaN conditions (not a number)
let string = 'hello';
let and = parseInt(string);
console.log(and);
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log('foo' / 2);

