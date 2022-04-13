const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
  class ListNode {
    constructor(x) {
      this.value = x;
      this.next = null;
    }
  }

function removeKFromList(l, k) {
  let arr = [];
  function getArr(l){
    arr.push(l.value);
    if(!Array.isArray(l.next )&& l.next !== null){
      getArr(l.next)
    } 
  }
  getArr(l)  
  let arr1=[]
  for(el of arr) {
    if(el !==k) {
      arr1.push(el)
    }
  }  
  
  function convertArrayToList(arr) {
    return arr.reverse().reduce((prev, cur) => {
      if (prev) {
        const node = new ListNode(cur);
        node.next = prev;
        return node;
      }  
      return new ListNode(cur);
    }, null);
  }
  return convertArrayToList(arr1)  
}

module.exports = {
  removeKFromList
};
