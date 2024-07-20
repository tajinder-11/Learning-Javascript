let num = 5;

//const n = new Number(6);
let x;

x = num.toString();
console.log(typeof x)
x = num.toString().length;

x = num.toFixed(2);

x = num.toPrecision(3);

x = num.toExponential(2);

x = num.toLocaleString('ar-eg');

x = num.valueOf();

x = Number.MAX_VALUE;
console.log(`The Maximum value it can hold id : ${x}`);
x = Number.MIN_VALUE;

console.log(`The Minimum value it can hold is : ${x}`);