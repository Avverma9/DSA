https://leetcode.com/problems/diameter-of-binary-tree/description/
var diameterOfBinaryTree = function(root) {
    let result = Number.MIN_VALUE;
 
 
    let rec = (root) => {
            if(root == null)
                return 0;
            let left = rec(root.left);
            let right = rec(root.right);
 
 
            let maxDepth = Math.max(left, right)+1; //height of tree
 
 
            let distIncludingNodeLeftRight = Math.max(maxDepth, left+right+1);
            result = Math.max(result, distIncludingNodeLeftRight );
 
 
            return maxDepth;
    }
 
 
    rec(root);
    return result-1;
 };
 