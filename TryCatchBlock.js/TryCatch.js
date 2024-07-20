function getData(dataId) {
  try {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('data', dataId);
        resolve();
      }, 1000);
    });
  } catch (error) {
    console.log('some error occured', error);
  }
}

async function getAllData() {
  await getData(1);
  await getData(2);
}
getAllData();

// Getting data from an API.
const getUsers = async () => {
  try {
    // const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const response = await fetch('http://httpstat.us/404');
    if (!response.ok) {
      throw new Error('Request Failed');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
// getUsers();

// Catching errors using .catch function
const getPosts = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Server Error');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
getPosts().catch((error) => console.log(error));
