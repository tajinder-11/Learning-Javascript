// symbols ae used to create unique identifiers for objects.

const sym = Symbol();
const sym1 = Symbol('foo');
const sym2 = Symbol('bar');

console.log(sym, sym1, sym2);
console.log(typeof sym);
console.log(sym.description);
console.log(sym1.description);

// Symbols are unique
console.log(Symbol('sym') === Symbol('sym'));

const user = {
  [Symbol('id')]: 1,
  name: 'john  doe',
  email: 'john@gmail.com',
};
console.log(user[Symbol('id')]);

//Symbols are not enumerbale
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
// we can not loop through symbols
for (let key in user) {
  console.log('Keys : ', key);
}

// getOwnPropertySymbols(user);
console.log(Object.getOwnPropertySymbols(user));

// Symbols.for()
const sym3 = Symbol.for('foo');
const sym4 = Symbol.for('foo');

console.log(sym3 === sym4);

console.log(sym1.toString());
console.log(sym3.toString());
console.log(sym4.toString());

console.log(sym1.valueOf());
console.log(sym3.valueOf());
console.log(sym4.valueOf());
