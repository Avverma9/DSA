// Given a Binary Search Tree (with all values unique) and two node values. 
// Find the Lowest Common Ancestors of the two nodes in the BST.

class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function lowestCommonAncestor(root, node1, node2) {
    if (root === null) {
      return null;
    }
    
    if (node1.value < root.value && node2.value < root.value) {
      return lowestCommonAncestor(root.left, node1, node2);
    }
    
    if (node1.value > root.value && node2.value > root.value) {
      return lowestCommonAncestor(root.right, node1, node2);
    }
    
    return root;
  }
  
  const root = new Node(2);
  root.left = new Node(1);
  root.left.left = new Node(4);
  root.right = new Node(6);
  root.right.left = new Node(1);
  root.right.right = new Node(3);
  
  const node1 = root.left.left;
  const node2 = root.right.right;
  const lca = lowestCommonAncestor(root, node1, node2);
  console.log(lca.value); // Output: 2
  