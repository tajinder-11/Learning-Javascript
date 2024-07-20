// Object Referncing

let user = { name: 'Tajinder' };
let admin = user;
admin.name = 'Ravinder';
console.log(admin.name);

// Comparison by Refrence

let a = {};
let b = a;
console.log(a == b); // true, both values refrences the same object.
console.log(a === b); // true, both values refrenves the same object.

let d = {};
let e = {};
console.log(d == e); // false, both values refrences the diffrent object.
console.log(d === e); //false, both values refrences the diffrent object.
