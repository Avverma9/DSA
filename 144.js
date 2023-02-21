https://leetcode.com/problems/binary-tree-preorder-traversal/
var preorderTraversal = function(root) {
    if(root == null)
        return [];
    let answer = [];
 
 
    trav(root, answer);
    return answer;
 
 
 };
 
 
 const trav = (root, answer) => {
   
    answer.push(root.val);
    if(root.left != null)
        trav(root.left, answer);
    if(root.right != null)
        trav(root.right, answer);
 }
 