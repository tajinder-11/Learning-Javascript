const app = {
  nextIndex: 0,
  teams: ['PK', 'RCB', 'CSK', 'RR'],
  next() {
    if (this.nextIndex >= this.teams.length) {
      return { done: true };
    }
    const returnvalue = { value: this.teams[this.nextIndex], done: false };
    this.nextIndex++;
    return returnvalue;
  },
};
// console.log(app.next());
// console.log(app.next());
// console.log(app.next());
// console.log(app.next());
// console.log(app.next());

const app1 = {
  teams: ['RCB', 'CSK', 'SRH', 'DC'],
  [Symbol.iterator]: function () {
    let nextIndex = 0;
    return {
      next: () => {
        return nextIndex < this.teams.length
          ? { value: this.teams[nextIndex++], done: false }
          : { done: true };
      },
    };
  },
};

const iterator = app1[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

for (const team of app1) {
  console.log(team);
}
