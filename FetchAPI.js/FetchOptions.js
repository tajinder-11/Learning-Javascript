function createPost(post) {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'post',
    body: JSON.stringify({
      title: post.title,
      name: post.name,
      body: post.body,
      occupation: post.occupation,
    }),
    headers: {
      'Content-Type': 'application/json',
      hello: 'World',
      token: 'abc123',
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
createPost({
  title: 'My Post',
  body: 'This is my Post',
  name: 'John',
  occupation: 'farmer',
});
