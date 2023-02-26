https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
// Define a function that takes a binary tree root node as an argument and returns a zigzag level order traversal of the tree
var zigzagLevelOrder = function(root) {

    // If the root is null, return an empty array
    if(root == null)
        return [];
 
    // Create an empty queue to store tree nodes
    let q = [];
    // Create an empty array to store the answer
    let answer = [];
 
    // Set the direction to be from left to right, initially
    let leftToRight = true;
    // Push the root node into the queue
    q.push(root);

    // While the queue is not empty
    while(q.length != 0){

        // Create an empty list to store nodes at the current level
        let levelNodesList = [];
        // Get the number of nodes at the current level
        let nodesAtCurrLevel = q.length;
       
        // Loop through each node at the current level
        for(let i = nodesAtCurrLevel;i>0;i--)
        {
            // Dequeue the front node from the queue
            let currNode = q.shift();
 
            // If the direction is left to right, append the node value to the list
            if(leftToRight == true)
                levelNodesList.push(currNode.val);
            // If the direction is right to left, insert the node value at the beginning of the list
            else
                levelNodesList.unshift(currNode.val);
 
            // If the dequeued node has a left child, enqueue it
            if(currNode.left != null)
                q.push(currNode.left);
           
            // If the dequeued node has a right child, enqueue it
            if(currNode.right != null)
                q.push(currNode.right);
        }
 
        // Reverse the direction for the next level
        leftToRight = !leftToRight;
        // Push the nodes at the current level into the answer array
        answer.push(levelNodesList);
    }
    // Return the answer array
    return answer;
 
    // Time complexity: O(n) where n is the number of nodes in the tree
    // Space complexity: O(k+n) where k is the maximum number of nodes at any level
}
