https://leetcode.com/problems/binary-tree-inorder-traversal/
var inorderTraversal = function(root) {
    let answerArr = []
    trav(root,answerArr );
    return answerArr;
 };
 
 
 const trav = (root, answerArr) => {
    if(root == null)
        return;
   
    if(root.left != null)
        trav(root.left, answerArr);
  
    answerArr.push(root.val);
   
    if(root.right != null)
        trav(root.right, answerArr);
 
 
 }