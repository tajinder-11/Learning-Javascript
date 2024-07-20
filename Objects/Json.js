const post = {
  id: 1,
  title: 'post one',
  body: 'This is body',
  text: 'This is text',
  id2: {
    id: 2,
    title: 'post two',
    body: 'This is body two',
    text: 'This is text two',
  },
};

// convert object to JSON String
const str = JSON.stringify(post);
console.log(str);

// convert JSON to object
const obj = JSON.parse(str);
console.log(obj);

// const arr = {
//   id: 1,
//   title: 'post one',
//   body: 'This is body',
//   text: 'This is text',
// };

// const str2 = JSON.stringify(arr);
// console.log(str2);

// const str3 = JSON.parse(arr);
// console.log(str3);
