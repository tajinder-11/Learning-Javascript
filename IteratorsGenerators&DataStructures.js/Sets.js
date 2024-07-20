const set = new Set([1, 2, 2, 3, 4]);

const add = set.add(5);
console.log(set);

set.delete(2);
console.log(set);

const setArray = Array.from(set);
console.log(setArray);

for (let items of set) {
  console.log(items);
}

const iterators = set.values();
console.log(iterators.next());
console.log(iterators.next());
console.log(iterators.next());
console.log(iterators.next());
console.log(iterators.next());

set.clear();
console.log(set);
