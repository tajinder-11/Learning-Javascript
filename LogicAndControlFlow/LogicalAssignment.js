// Returns right side value only if left side value is falsy
let a = 0;
a ||= 20;
console.log(a);

// Returns Right side value only if left side value is truthy.
let b = 1;
b &&= 30;
console.log(b);

// Retuerns Right side value only if left side value is null or undefined.
let c = null;
c ??= 40;
console.log(c);
