const xhr = new XMLHttpRequest();

xhr.open('GET', './movies.json');
/*
ReadyState has 5 diffrent possible values
1 : request not initialized
2 : Server connection Estalished
3 : Request recieved
4 : Processing request
5 : Request finished and respose is ready
*/

xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    // console.log(JSON.parse(this.responseText));
    const data = JSON.parse(this.responseText);
    data.array.forEach((movie) => {
      const li = document.createElement('li');
      li.innerHtml = `<strong>${movie.title} - ${movie.year}</strong>`;
      document.querySelector('#results').appendChild(li);
    });
  }
};
xhr.send();
