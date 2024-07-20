const companies = [
  { name: 'comapany one', category: 'finance', start: 1981, end: 2004 },
  { name: 'comapany two', category: 'Retail', start: 1987, end: 2008 },
  { name: 'comapany three', category: 'Auto', start: 1996, end: 2003 },
  { name: 'comapany four', category: 'Retail', start: 1977, end: 2000 },
  { name: 'comapany five', category: 'Tehnology', start: 1963, end: 1993 },
  { name: 'comapany six', category: 'finance', start: 1992, end: 1997 },
  { name: 'comapany seven', category: 'auto', start: 1971, end: 2005 },
  { name: 'comapany eight', category: 'Tehnology', start: 1965, end: 1997 },
  { name: 'comapany nine', category: 'Retail', start: 1952, end: 1994 },
];

const retailCompanies = companies.filter(
  (company) => company.category == 'Retail'
);
console.log(retailCompanies);
