let data = {
  method: 'POST',
  body: JSON.stringify({
    firstName: 'john',
    lastName: 'wick',
    age: 44,
  }),
  headers: {
    'content-type': 'application/json',
  },
};

async function postRequest() {
  const p = await fetch('https://jsonplaceholder.typicode.com/posts', data);
  const response = await p.json();
  console.log(response);
}
postRequest();
