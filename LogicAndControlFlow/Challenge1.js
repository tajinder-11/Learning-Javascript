const username = prompt('Enter your Username');

if (username === null) {
  alert('cancelled');
} else if (username.toLowerCase() === 'admin') {
  const password = prompt('Enter your password');
  if (password === null) {
    alert('cancelled');
  } else if (password.toLowerCase() === 'themaster') {
    alert('welcome');
  } else {
    console.log('Wrong password');
  }
} else {
  alert('I dont know you');
}
