const username = prompt('who is there');

if (username === 'Admin') {
  const password = prompt('Enter your password');

  if (password === 'MyPassword') {
    alert('Welcome');
  } else if (password === '' || password === null) {
    alert('Canceled');
  } else {
    alert('Wrong passsword');
  }
} else if (username === '' || username === null) {
  alert('canceled');
} else {
  alert('i dont know you');
}
