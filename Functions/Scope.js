const x = 100;
console.log(x + ' outside function');

function run() {
  console.log(x + ' inside function');
}

if (true) {
  console.log(x + ' in block');
}
run();

function foo() {
  let y = 200;
  console.log(y + ' inside foo');
}
foo();

function scope() {
  let x = 5;
  if (x > 2) {
    let y = 12;
    console.log(y + x);
  }
  console.log(x + y);
}
scope();
