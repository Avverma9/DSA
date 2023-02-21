https://leetcode.com/problems/binary-tree-postorder-traversal/description/
var postorderTraversal = function(root) {
    if(root == null)
        return [];
    let answerArr = []
    trav(root,answerArr );
    return answerArr;
 };
 
 
 const trav = (root, answerArr) => {
    
    if(root.left != null)
        trav(root.left, answerArr);
   
    if(root.right != null)
        trav(root.right, answerArr);
 
 
    answerArr.push(root.val);
 }