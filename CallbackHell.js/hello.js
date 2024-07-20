function show(callback) {
  setTimeout(() => {
    console.log('hello show');
  }, 2000);
  callback();
}
function display() {
  console.log('display function');
}
show(display);
