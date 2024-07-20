const date = new Date();
const hour = date.getHours();

if (hour < 12) {
  console.log('Good morning ');
} else if (hour < 18) {
  console.log('Good after noon');
} else {
  console.log('Good night');
  if (hour >= 20) {
    console.log('Go to sleep man');
  }
}

// nested if
if (hour < 12) {
  console.log('Good morning');
  if (hour === 6) {
    console.log('wake up buddy');
  }
}

if (hour >= 7 && hour < 15) {
  console.log('It is work time');
}
