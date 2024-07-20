const motherName = 'MotherName';
const profession = 'Engineers';
const townName = 'Mumbai';
const brotherName = 'broName';
const broName = brotherName;

let object = {
  city: 'berlin',
  Village: 'shwack',
  ['state']: 'moscow',
  [`${profession} are `]: 'problem solvers',
  [`${townName} traffic status is `]: 'Very High',
};

object.sisterName = 'suzie';
object[motherName] = 'sophie';
object[brotherName] = 'Matt';
object[broName] = 'Harry';
console.log(object);
