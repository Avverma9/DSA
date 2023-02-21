https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
var zigzagLevelOrder = function(root) {


    if(root == null)
        return [];
 
 
    let q = []; //create a queue
    let answer = [];
 
 
    let leftToRight = true;// for maintaining direction and starting from left to right, false denotes right to left
    q.push(root);
    while(q.length != 0){
 
 
        let levelNodesList = [];
        let nodesAtCurrLevel = q.length;
       
        for(let i = nodesAtCurrLevel;i>0;i--)
        {
            let currNode = q.shift();
 
 
            if(leftToRight == true)
                levelNodesList.push(currNode.val);
 
 
            else
                levelNodesList.unshift(currNode.val);
 
 
            if(currNode.left != null)
                q.push(currNode.left);
           
            if(currNode.right != null)
                q.push(currNode.right);
        }
 
 
        leftToRight = !leftToRight;
        answer.push(levelNodesList);
    }
    return answer;
 
 
    //TC : O(n)
    //SC: O(k+n) where k is max nodes at any level
 }
 