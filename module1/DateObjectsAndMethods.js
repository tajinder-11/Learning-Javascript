let x;

let d = new Date();

x = d.getFullYear();  //To get year.
console.log(x);

x = d.getMonth() + 1;// To get month.
console.log(x);

x = d.getDate();// To get Date.
console.log(x);

x = d.getDay();//To get Day of week.
console.log(x);

x = d.getHours();
console.log(x);

x = d.getMinutes();
console.log(x);

x = d.getSeconds();
console.log(x);

x = d.getMilliseconds();
console.log(x);

x = `${d.getFullYear()}-${d.getMonth() +1}-${d.getDate()}`;
console.log(x);

x = Intl.DateTimeFormat('en-in').format(d);
console.log(x);

x = Intl.DateTimeFormat('default' , {month: 'long'}).format(d);
console.log(x);

x = d.toLocaleString('default', {
  weekday:'long',
  year:'numeric',
  month:'short',
  day:'numeric',
  hour:'numeric',
  minutes:'numeric',
  second:'numeric',
  timeZone:'America/New_York',
});
console.log(x);

let jan_1_1970 = new Date();

let date = new Date();
console.log(date.getHours());
console.log(date.getUTCHours());
console.log(new Date().getTimezoneOffset());

let date1 = new Date(2022, 1 , 28);

date1.setDate(13);
date1.setMonth(3);
date1.setFullYear(1997);
date1.setHours(12);
date1.setMinutes(34);
date1.setSeconds(44);


let date2 = new Date(2022, 0, 23);
date2.setDate(date2.getDate() + 2);
console.log(date2);