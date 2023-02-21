https://leetcode.com/problems/subtree-of-another-tree/description/
var isSubtree = function(root, subRoot) {
    if(root == null)
        return false;
    if(isSameTree(root, subRoot))
        return true;
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
 
 
 };
 
 
 const isSameTree = (tree1, tree2) => {
    if(tree1 == null && tree2 == null)
        return true;
    if((tree1 == null && tree2 != null) || (tree1 != null && tree2 == null))
        return false;
    if(tree1.val != tree2.val)
        return false;
   
    return isSameTree(tree1.left, tree2.left) && isSameTree(tree1.right, tree2.right);
 }
 