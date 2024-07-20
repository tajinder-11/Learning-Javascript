class Stack {
  constructor() {
    this._items = [];
    this._count = 0;
  }

  push(items) {
    this._items.push(items);
    this._count++;
  }
  pop() {
    this._items.pop();
    this._count--;
  }
  peek() {
    if (this.isEmpty()) {
      return 'No items in stack';
    }
    return this._items[this._count - 1];
  }
  isEmpty() {
    return this._count === 0;
  }
  length() {
    return this._count;
  }
  clear() {
    this._items = [];
    this._count = 0;
  }
}

const stack = new Stack();
stack.push('Item 1');
stack.push('Item 2');
stack.push('Item 3');
stack.push('Item 4');
stack.push('Item 5');

console.log('Top Item of Stack is : ', stack.peek());
console.log('The Length of Stack is : ', stack.length());
stack.clear();
console.log(stack);
