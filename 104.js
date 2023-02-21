
https://leetcode.com/problems/maximum-depth-of-binary-tree/
var maxDepth = function(root) {
    if(root == null)
        return 0;
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
 
 
    if(left> right)
        return left+1;
    else
     return right+1;
 };
 
 
 