https://leetcode.com/problems/binary-tree-inorder-traversal/
// function to perform inorder traversal of binary tree
var inorderTraversal = function(root) {
    let answerArr = []
    // call the recursive traversal function
    trav(root,answerArr );
    // return the answer array
    return answerArr;
    };
    
    // helper function to traverse the binary tree recursively
    const trav = (root, answerArr) => {
    // base condition
    if(root == null)
    return;
    // visit left subtree recursively
if(root.left != null)
trav(root.left, answerArr);

// push the value of root to the answer array
answerArr.push(root.val);

// visit right subtree recursively
if(root.right != null)
trav(root.right, answerArr);
    }