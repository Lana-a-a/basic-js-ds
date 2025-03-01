const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null; 
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);
    
    if (this.rootNode === null) {
      this.rootNode = newNode; 
    } else {
      this._addNode(this.rootNode, newNode); 
    }
  }

  _addNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._addNode(node.left, newNode); 
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._addNode(node.right, newNode); 
      }
    }
  }

  has(data) {
    return this._hasNode(this.rootNode, data); 
  }

  _hasNode(node, data) {
    if (node === null) return false; 
    if (data === node.data) return true; 
    if (data < node.data) {
      return this._hasNode(node.left, data); 
    } else {
      return this._hasNode(node.right, data); 
    }
  }

  find(data) {
    return this._findNode(this.rootNode, data); 
  }

  _findNode(node, data) {
    if (node === null) return null; 
    if (data === node.data) return node; 
    if (data < node.data) {
      return this._findNode(node.left, data); 
    } else {
      return this._findNode(node.right, data); 
    }
  }


  remove(data) {
    this.rootNode = this._removeNode(this.rootNode, data); 
  }


  _removeNode(node, data) {
    if (node === null) return null; 

    if (data < node.data) {
      node.left = this._removeNode(node.left, data); 
      return node;
    } else if (data > node.data) {
      node.right = this._removeNode(node.right, data); 
      return node;
    } else {
     
      if (node.left === null && node.right === null) {
        return null; 
      }
      if (node.left === null) {
        return node.right; 
      }
      if (node.right === null) {
        return node.left; 
      }

      let minNode = this._findMinNode(node.right);
      node.data = minNode.data; 
      node.right = this._removeNode(node.right, minNode.data); 
      return node;
    }
  }
  _findMinNode(node) {
    while (node.left !== null) {
      node = node.left; 
    }
    return node;
  }

 
  min() {
    if (this.rootNode === null) return null; 
    let node = this.rootNode;
    while (node.left !== null) {
      node = node.left; 
    }
    return node.data; 
  }

  max() {
    if (this.rootNode === null) return null; 
    let node = this.rootNode;
    while (node.right !== null) {
      node = node.right; 
    }
    return node.data; 
  }
}

module.exports = {
  BinarySearchTree
};