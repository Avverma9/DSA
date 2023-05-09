// Define a class to represent nodes in a binary tree
class Node {
  constructor(data) {
    this.data = data; // The data stored in this node
    this.left = null; // A reference to the left child node
    this.right = null; // A reference to the right child node
  }
}

// Define a class to represent a binary search tree
class BST {
  constructor() {
    this.idx = -1; // Initialize an index variable to keep track of the current position in the input array
  }

  // A method to build a binary search tree from a preorder traversal
  bst_preorder(node) {
    this.idx++; // Move to the next element in the input array
    if (node[this.idx] === -1) {
      // If the current element is -1, return null to indicate the end of a subtree
      return null;
    }
    const newNode = new Node(node[this.idx]); // Create a new node with the current element as its data
    newNode.left = this.bst_preorder(node); // Recursively build the left subtree
    newNode.right = this.bst_preorder(node); // Recursively build the right subtree
    return newNode; // Return the root node of the subtree
  }
}

// Define the input array
const node = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1];

// Create a new binary search tree object
const tree = new BST();

// Build the binary search tree from the input array using the preorder traversal
const root = tree.bst_preorder(node);

// Print the value of the root node of the binary search tree
console.log(root.data);
