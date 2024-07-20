const library = [
  {
    title: 'The road ahead',
    author: 'Bill Gates',
    status: {
      own: true,
      reading: false,
      read: true,
    },
  },
  {
    title: 'Playing it my way',
    author: 'Sachin Tendulkar',
    status: {
      own: true,
      reading: false,
      read: true,
    },
  },
  {
    title: 'Rich dad Poor Dad',
    author: 'Robert.T.Kyosaki',
    status: {
      own: true,
      reading: false,
      read: true,
    },
  },
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const { title: firstBook } = library[0]; // changinf title of first object.
console.log(firstBook);

const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);
