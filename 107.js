https://leetcode.com/problems/binary-tree-level-order-traversal-ii/description/
// Define a function that takes a binary tree root node as an argument and returns a bottom-up level order traversal of the tree
var levelOrderBottom = function(root) {

    // If the root is null, return an empty array
    if(root == null)
        return [];
 
    // Create an empty queue to store tree nodes
    let q = [];
    // Create an empty array to store the answer
    let answer = [];
    // Push the root node into the queue
    q.push(root);

    // While the queue is not empty
    while(q.length != 0){

        // Create an empty list to store nodes at the current level
        let levelNodesList = [];
        // Get the number of nodes at the current level
        let nodesAtCurrLevel = q.length;
       
        // Loop through each node at the current level
        for(let i = 0;i < nodesAtCurrLevel;i++)
        {
            // Dequeue the front node from the queue
            let currNode = q.shift();
            // Append the node value to the list
            levelNodesList.push(currNode.val);
 
            // If the dequeued node has a left child, enqueue it
            if(currNode.left != null)
                q.push(currNode.left);
           
            // If the dequeued node has a right child, enqueue it
            if(currNode.right != null)
                q.push(currNode.right);
        }
 
        // Push the nodes at the current level into the beginning of the answer array
        answer.unshift(levelNodesList);
    }
    // Return the answer array
    return answer;
};
