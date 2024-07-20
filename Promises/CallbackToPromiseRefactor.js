const posts = [
  { title: 'post 1', body: 'This is title one' },
  { title: 'post 2', body: 'This is title two' },
];

function createPost(post) {
  return new promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;
      if (!error) {
        posts.push(post);
        resolve();
      } else {
        reject('Something Error occured');
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(() => {
    posts.forEach(function (post) {
      const div = document.createElement(div);
      div.innerHMTL = `<strong>${posts.title}</strong> - ${post.body}`;
      document.querySelector('#posts').appendChile(div);
    });
  }, 1000);
}
createPost({ title: 'post 3', body: 'This is post three' }).then(getPosts);
