https://leetcode.com/problems/binary-tree-level-order-traversal-ii/description/
var levelOrderBottom = function(root) {
    if(root == null)
        return [];
 
 
    let q = []; //create a queue
    let answer = [];
    q.push(root);
    while(q.length != 0){
        let levelNodesList = [];
        let nodesAtCurrLevel = q.length;
       
        for(let i = 0;i < nodesAtCurrLevel;i++)
        {
            let currNode = q.shift(); //dequeue from queue from front end
            levelNodesList.push(currNode.val);
 
            if(currNode.left != null)
                q.push(currNode.left);
           
            if(currNode.right != null)
                q.push(currNode.right);
        }
 
        // push the levelNodesList to the answer array in the beginning
        answer.unshift(levelNodesList);
    }
    return answer;
 };