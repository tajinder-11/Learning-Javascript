const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ name: 'john', age: 20 });
    } else {
      reject('Error: Something Went Wrong');
    }
  }, 1000);
});
promise
  .then((user) => {
    console.log(user);
    return user.name;
  })
  .then((name) => {
    console.log(name);
    return name.length;
  })
  .then((nameLength) => {
    console.log(nameLength);
  })
  .catch((error) => console.log(error))
  .then(() => console.log('This will run no matter what'));
