// Fetching a json file
fetch('./movies.json')
  .then((response) => response.json())
  .then((data) => console.log(data));

//Fetching a text file
fetch('./cars.txt')
  .then((response) => response.text())
  .then((data) => console.log(data));

// Fetching from an api
fetch('https://api.github.com/users/tajinder-diligentic')
  .then((response) => response.json())
  .then((data) => console.table(data));
