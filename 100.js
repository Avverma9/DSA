https://leetcode.com/problems/same-tree/
// This function compares two binary trees
var isSameTree = function(p, q) {
    // If both trees are empty, they are identical
    if(p == null && q == null)
    return true;
    // If one tree is empty and other is not, they are not identical
    if((p == null && q != null) || (p != null && q == null))
    return false;
    // If values of the nodes are not equal, they are not identical
    if(p.val != q.val)
    return false;
    
    // Recursively compare left and right subtree of the trees
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    };