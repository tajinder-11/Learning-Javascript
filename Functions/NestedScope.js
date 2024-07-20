function first() {
  let x = 100;
  function second() {
    let y = 200;
    console.log(x + y);
  }
  second();
}
first();
/*In nested functions we can access parent variables inside a child.
 but can not access child variables inside paernt.
*/
if (true) {
  const x = 100;
  if (x === 100) {
    const y = 200;
    console.log(x + y);
  }
}
