const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Node {
  constructor (x) {
    this.value = x;
    this.next = null;
  }  
}
class Queue {

  constructor () {
    this.head = null;
    this.length = 0;
  }

  getUnderlyingList() {    
    let curr = this.head;
    while(curr) {
      return curr
    }
    curr = curr.next
  }

  enqueue(value) {
    if(this.length === 0) {
      this.head = new Node(value)
    }else {
      let curr = this.head;
      while(curr.next) {
        curr = curr.next;
      }
      curr.next = new Node(value);
    }
    this.length += 1;
  }

  dequeue() {
    let del = this.head;
    let curr = this.head;
    this.head = curr.next;
    return del.value
  }
}

module.exports = {
  Queue
};
