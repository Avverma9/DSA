
https://leetcode.com/problems/maximum-depth-of-binary-tree/
// Define a function that takes a binary tree root node as an argument and returns the maximum depth of the tree
var maxDepth = function(root) {

    // If the root is null, return 0 (i.e., the depth of an empty tree is 0)
    if(root == null)
        return 0;
    
    // Recursively compute the maximum depth of the left and right subtrees
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);

    // Return the maximum depth of the tree, which is the larger of the two subtree depths plus 1 for the current node
    if(left > right)
        return left + 1;
    else
        return right + 1;
};
