class Queue {
  constructor() {
    this._items = [];
    this._count = 0;
  }
  enqueue(items) {
    this._items.unshift(items);
    this._count++;
  }
  dequeue() {
    this._items.pop();
    this._count--;
  }
  length() {
    return this._count;
  }
  isEmpty() {
    return this._count === 0;
  }
  peek() {
    if (this.isEmpty()) {
      return 'No items in stack';
    }
    return this._items[this._count - 1];
  }
  clear() {
    this.items = [];
    this.count = 0;
  }
}

const queue = new Queue();
queue.enqueue('john');
queue.enqueue('jack');
queue.enqueue('Will');
queue.enqueue('David');
queue.enqueue('Miller');

queue.dequeue();
console.log(queue.isEmpty());
console.log('The top most item is : ', queue.peek());
console.log('The length of the queue : ', queue.length());
console.log(queue);
