const strLit = 'Hello';
const strObj = new String('Hello constructor');

console.log(strLit, typeof strLit);
console.log(strObj, typeof strObj);

//Boxing : boxing is when javascript adds a wrapper to object literal.
console.log(strLit.toUpperCase());
console.log(strObj.toUpperCase());

//Unboxing: When an object is turned back to a litral.
console.log(strObj.valueOf(), typeof strObj.valueOf);

console.log(strLit.constructor);
// console.log(strObj.constructor);
// console.log(strLit instanceof String);
