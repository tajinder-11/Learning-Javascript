let name1 = {
  firstName: 'Virat',
  lastName: 'Kohli',
};

function printFullName(hometown) {
  console.log(this.firstName + ' ' + this.lastName + ' from ' + hometown);
}

let name2 = {
  firstName: 'Dale',
  lastName: 'Steyn',
};

// Function Borrowing
printFullName.call(name1, 'Delhi');
printFullName.call(name2, 'Mumbai');
// apply method
printFullName.apply(name1, ['delhi']);
printFullName.apply(name2, ['Johnaesberg']);
//Bind Method
let printName = printFullName.bind(name2, 'Mumbai');
console.log(printName);
printName();
