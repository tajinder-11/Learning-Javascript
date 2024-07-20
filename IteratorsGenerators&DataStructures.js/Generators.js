function* createTeamIterator(teams) {
  for (let i = 0; i < teams.length; i++) {
    yield teams[i];
  }
}

const teams = ['RCB', 'PBKS', 'CSK', 'SRH'];
const iterator = createTeamIterator(teams);

console.log(createTeamIterator(teams).next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
