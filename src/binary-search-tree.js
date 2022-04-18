const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(value) {
    this.data = value;
    this.right = null;
    this.left = null;
  }
}
class BinarySearchTree {
  constructor () {
    this.roott = null;
  }

  root() {
    if(!this.roott) {
      return null;
    }
    return this.roott;
  }

  add(data) {
    this.roott = doTree(this.roott, data);
    function doTree (node, value) {
      if(!node) {
        return new Node(value)
      } else if(node.data === value) {
        return node;
      } else {
        if(node.data < value) {
          node.right = doTree (node.right, value)
        } else {
          node.left = doTree (node.left, value)
        }
      }
      return node;
    }
  }

  has(data) {
    return hasData (this.roott, data);
    function hasData (node, value) {
      if(!node) {
        return false;
      } else if(node.data === value) {
        return true;
      } else {
        if(node.data < value) {
          return hasData (node.right, value)
        } else {
          return hasData (node.left, value)
        }
      }
    }
  }

  find(data) {
    return findNode (this.roott, data);
    function findNode (node, value) {
      if(!node) {
        return null;
      } else if(node.data === value) {
        return node;
      } else {
        if(node.data < value) {
          return findNode (node.right, value)
        } else {
          return findNode (node.left, value)
        }
      }
    }
  }

  remove(data) {    
    this.root = removeData (this.roott, data);
    function removeData (node, value) {
      if(!node) {
        return null;
      } else if (node.data < value) {
        node.right = removeData (node.right, value)
        return node
      }  else if (node.data > value) {
        node.left = removeData (node.left, value)
        return node
      } else {
        if(!node.left && !node.right) {
          return null;
        } else if (!node.left) {
          node = node.right;
          return node;
        } else if (!node.right) {
          node = node.left;
          return node;
        } else {
          let minDataFromRight = node.right;
          while(minDataFromRight.left) {
            minDataFromRight = minDataFromRight.left
          }
          node.data = minDataFromRight.data;
          node.right = removeData (node.right, minDataFromRight.data);
          return node;
        }
      }
    }
  }

  min() {    
    if(!this.roott) {
      return;
    } else {
      let node = this.roott;
      while(node.left) {
        node = node.left
      }
      return node.data;
    }
  }

  max() {    
    if(!this.roott) {
      return;
    } else {
      let node = this.roott;
      while(node.right) {
        node = node.right
      }
      return node.data;
    }
  }
}

module.exports = {
  BinarySearchTree
};