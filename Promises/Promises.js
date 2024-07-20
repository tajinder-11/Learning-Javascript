// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('The Asynchronous task is completed');
//     resolve();
//   }, 1000);
// });
// promise.then(() => {
//   console.log('promise consumed...');
// });

const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ name: 'jack', age: 43 });
    } else {
      reject('Something Error occured');
    }
  }, 1000);
});
getUser
  .then((user) => console.log(user))
  .catch((error) => console.log(error))
  .finally(() => console.log('The promise have been resolved or rejected'));
console.log('hello from global Scope');
