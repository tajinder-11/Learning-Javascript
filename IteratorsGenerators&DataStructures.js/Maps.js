const map = new Map();

map.set('name', 'john');
map.set('age', 22);
map.set('City', 'Manchester');

// console.log(map.get('name'));
// console.log(map.get('age'));
// console.log(map.get('City'));

// console.log(map.size);

// console.log(map.has('name'));

map.delete('age');
// console.log(map);

const peopleMap = new Map();

peopleMap.set('john', { phone: '555-555-5555', email: 'john@gmail.com' });
peopleMap.set('jack', { phone: '555-555-5555', email: 'jack@gmail.com' });
peopleMap.set('david', { phone: '555-555-5555', email: 'david@gmail.com' });

// peopleMap.forEach((people) => console.log(people));

console.log(peopleMap.keys());
console.log(peopleMap.values());
console.log(peopleMap.entries());

const array = Array.from(peopleMap);
// console.log(array);
