// const intervalId = setInterval(() => {
//   console.log('Tajinder is Programmer');
// }, 1000);

// let clear = document.querySelector('#cancel');
// clear.addEventListener('click', () => {
//   console.log(intervalId);
//   clearInterval(intervalId);
//   console.log('Interval cleared');
// });

let intervalId;
function startChange() {
  if (!intervalId) {
    intervalId = setInterval(changeRandomColor, 1000);
  }
}
function changeColor() {
  if (document.body.style.backgroundColor !== 'black') {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
}

function changeRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = `#${randomColor}`;
  document.body.style.color = 'white';
}

function stopChange() {
  clearInterval(intervalId);
}
document.querySelector('#start').addEventListener('click', startChange);
document.querySelector('#stop').addEventListener('click', stopChange);
