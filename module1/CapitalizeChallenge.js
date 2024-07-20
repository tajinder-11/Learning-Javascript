// 1st way 
let myString = 'developer';
let str = myString.charAt(0).toUpperCase();
let newstr = myString.substring(1);
console.log(str + newstr);

// 2nd way 
let myNewString;
myNewString = myString[0].toUpperCase() + myString.substring(1);
console.log(myNewString);

// 3rd way 
myNewString = `${myString[0].toUpperCase()}${myString.substring(1)}`;
console.log(myNewString); 