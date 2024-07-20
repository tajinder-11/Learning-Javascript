// const socials = ['instagram', 'facebook', 'linkedin', 'twitter'];
// const cars = ['mercedes', 'rolls royce', 'bmw'];

// socials.forEach((items) => {
//   console.log('Socials = ' + items);
// });
// cars.forEach((elements) => console.log('Car = ' + elements));

// Array of Objects
const socialObj = [
  { name: 'Instagram', url: 'http://instagram.com' },
  { name: 'Facebook', url: 'http://facebook.com' },
  { name: 'Linkedin', url: 'http://linnkedin.com' },
  { name: 'Twitter', url: 'http://twitter.com' },
];

const carObj = [
  { name: 'Mercedes GLS', model: 2019 },
  { name: 'BMW', model: 2020 },
  { name: 'Wolkswagon', model: 2021 },
  { name: 'Rolls Royce', moedel: 2023 },
];

// socialObj.forEach((elements) => {
//   console.log(elements);
// });
// carObj.forEach((elements) => {
//   console.log(elements);
// });

function getElements(items) {
  console.log(items);
}
socialObj.forEach(getElements);
carObj.forEach(getElements);
