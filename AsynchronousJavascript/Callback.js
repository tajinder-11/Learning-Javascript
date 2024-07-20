// function toggle(e) {
//   e.target.classList.toggle('danger');
// }

// document.querySelector('button').addEventListener('click', toggle);

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}
function getPosts() {
  setTimeout(() => {
    posts.forEach((post) => {
      console.log(post.title, post.body);
    });
  }, 1000);
}
const posts = [
  { title: 'post 1', body: 'This is post one' },
  { title: 'post 2', body: 'This is post two' },
];
createPost({ title: 'post 3', body: 'This is post three' }, getPosts);
