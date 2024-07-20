// setTimeout(changeText, 2000);

const timerId = setTimeout(() => {
  document.querySelector('h1').textContent = 'Hello from callback';
}, 3000);

let timeout = document.querySelector('#btn');
timeout.addEventListener('click', () => {
  console.log(timerId);
  clearTimeout(timerId);
  console.log('Timer canceled');
});
