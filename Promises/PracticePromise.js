// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const result = true;
//     if (result) {
//       resolve([
//         { name: 'rabi', age: 12 },
//         { name: 'john', age: 45 },
//         { name: 'doe', age: 12 },
//       ]);
//     } else {
//       reject('something error occured');
//     }
//   });
// });
// promise.then((user) => {
//   console.log(user);
// });

// function getData(dataId, callback) {
//   setTimeout(() => {
//     console.log('data', dataId);
//     if (callback) {
//       callback();
//     }
//   }, 2000);
// }

// Doing with promise chaining

// //Callback hell.(Nested callbacks stacked below one another forming a pyramid)
// getData(1, () => {
//   console.log('Getting data2.....');
//   getData(2, () => {
//     console.log('Getting data3.....');
//     getData(3, () => {
//       console.log('Getting data4.....');
//       getData(4, () => {
//         console.log('Getting data5.....');
//         getData(5, () => {
//           console.log('Getting data6.....');
//           getData(6);
//         });
//       });
//     });
//   });
// });

// let promise = new Promise((resolve, reject) => {
//   console.log('i am a promise');
//   reject('some error occured');
// });

// Getting the data using promise Chaining
function getData(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('data', dataId);
      resolve('success');
      if (getNextData) {
        getNextData();
      }
    }, 2000);
  });
}
getData(1)
  .then((res) => {
    return getData(2);
  })
  .then((res) => {
    return getData(3);
  })
  .then((res) => {
    console.log(res);
  });

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log('I am a promise');
//     // resolve('Success');
//     reject('Network Error!');
//   });
// };
// let promise = getPromise();
// promise
//   .then((res) => {
//     console.log('Promise fulfilled', res);
//   })
//   .catch((err) => {
//     console.log('Some Error occured', err);
//   });

// Promise Chainig
// function asyncFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('data1');
//       resolve('Success');
//     }, 4000);
//   });
// }
// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('data2');
//       resolve('Success');
//     }, 4000);
//   });
// }
// console.log('Fetching Data1.....');
// asyncFunc1().then((res) => {
//   console.log('Fetching Data2.....');
//   asyncFunc2().then((res) => {});
// });
