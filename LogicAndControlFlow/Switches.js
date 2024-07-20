let days = 4;

switch (days) {
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 3:
    console.log('Wednesday');
    break;
  case 4:
    console.log('Thursday');
    break;
  case 5:
    console.log('Friday');
    break;
  case 6:
    console.log('Saturday');
    break;
  case 7:
    console.log('Sunday');
    break;
  default:
    console.log('Enter a valid value');
}

let date = new Date();
let hour = date.getHours();
switch (true) {
  case hour < 12:
    console.log('Good morning');
    break;

  case hour < 18:
    console.log('Good Afternoon');
    break;

  case hour < 22:
    console.log('Good Evening');
}
