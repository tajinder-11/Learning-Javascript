const companies = [
  { name: 'Microsoft', category: 'finance', start: 1981, end: 2004 },
  { name: 'Google', category: 'Retail', start: 1987, end: 2008 },
  { name: 'Amazon', category: 'Auto', start: 1996, end: 2003 },
  { name: 'Meta', category: 'Retail', start: 1977, end: 2000 },
  { name: 'Apple', category: 'Tehnology', start: 1963, end: 1993 },
  { name: 'Adobe', category: 'finance', start: 1992, end: 1997 },
  { name: 'Flipkart', category: 'auto', start: 1971, end: 2005 },
  { name: 'Netflix', category: 'Tehnology', start: 1965, end: 1997 },
  { name: 'JP Morgan', category: 'Retail', start: 1952, end: 1994 },
];

const companyName = companies.map((company) => company.name);
console.log(companyName);

// Create an array with just company and category.
const companyInfo = companies.map((company) => {
  return {
    name: company.name,
    category: company.category,
  };
});
// console.log(companyInfo);

// Create an array with years of company.
const companyYears = companies.map((company) => {
  return {
    name: company.name,
    Length: company.end - company.start + ' Years',
  };
});
// console.log(companyYears);

// Chain map Methods
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const squareDouble = numbers
  .map((number) => Math.sqrt(number))
  .map((sqrt) => sqrt * 2)
  .map((sqrt) => sqrt * 2);
// console.log(squareDouble);
