let d;

d = new Date();

d = new Date(2024, 0, 11, 12, 5,34);

d = new Date('2021-07-11T12:30:00');
d = new Date('07/10/2021 12:30:00');
d = new Date('07-10-2022');

// TimeStamp 

// gives passed miliseconds from 1 jan 1970 to till date.
d = Date.now();
console.log(d);

//Get timestamp till a specific date.
d = new Date('07-10-2022 12:30:00');
d = d.getTime();
d = d.valueOf();
console.log(d);

// Getting the date from the timestamp.
d = new Date(1657436400000);
console.log("The date is = "+d);

//TimeStamp in seconds.
d = Math.floor(Date.now() / 1000);
console.log(d);

let time = new Date();
console.log(time);

let newTime = new Date('12/02/2025');
console.log(newTime);

let timenew = new Date('06/11/2024');
console.log(timenew);