const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: 'john', age: 20 });
  }, 1000);
});

// promise.then((resolve) => console.log(resolve));

async function getPromise() {
  const response = await promise;
  console.log(response);
}

// getPromise();

async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = res.json();
  console.log(data);
}
getUsers();

// doing same thing using .then

function getUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => console.log(data));
}
// getUsers();

// using with arrow function

const getPosts = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log('Some Error occured', error);
  }
};
getPosts();

// one more way (function returning a promise)

// function api() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('Weather Data...');
//       resolve(200);
//     }, 2000);
//   });
// }

// async function getWeatherData() {
//   await api(); //1st call
//   await api(); //2nd call
// }

// getWeatherData();

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('data', dataId);
      resolve('success');
    }, 2000);
  });
}
/*
using callbacks
getData(1, function () {
  console.log('got the data..');
  getData(2, function () {
    console.log('got second data');
  });
});

*/
//Async-Await
// async function getAllData() {
//   console.log('getting data1...');
//   await getData(1);
//   console.log('getting data2...');
//   await getData(2);
//   console.log('getting data3...');
//   await getData(3);
//   console.log('getting data4...');
//   await getData(4);
//   console.log('getting data5...');
//   await getData(5);
//   console.log('getting data6...');
//   await getData(6);
// }

// Using Arrow Function
const getAllData = async () => {
  console.log('getting data1...');
  await getData(1);
  console.log('getting data2...');
  await getData(2);
  console.log('getting data3...');
  await getData(3);
  console.log('getting data4...');
  await getData(4);
  console.log('getting data5...');
  await getData(5);
  console.log('getting data6...');
  await getData(6);
};
// getAllData();

// Using IIFE
// (async () => {
//   console.log('getting data1...');
//   await getData(1);
//   console.log('getting data2...');
//   await getData(2);
//   console.log('getting data3...');
//   await getData(3);
//   console.log('getting data4...');
//   await getData(4);
//   console.log('getting data5...');
//   await getData(5);
//   console.log('getting data6...');
//   await getData(6);
// })();
