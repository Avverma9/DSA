https://leetcode.com/problems/binary-tree-level-order-traversal/description/
//BFS in binary tree-> levelOrder traversal
// Function to perform level order traversal of a binary tree
var levelOrder = function(root) {

 
    // If root is null, return an empty array
    if(root == null)
        return [];
    
    // Calculate the height of the binary tree
    let height = calHeight(root);
    
    // Initialize an empty array to store the nodes of each level of the binary tree
    let answer = [];
    
    // Loop through each level of the binary tree
    for(let i=1;i<=height; i++){
        let levelNodes = [];
        levelOrderTraversal(root, i, levelNodes);
        answer.push(levelNodes);
    }
    
    // Return the answer array containing the nodes of each level of the binary tree
    return answer;
    }
    
    // Function to perform level order traversal of a binary tree for a given level
    const levelOrderTraversal = (root, levelNumber, levelNodes) => {
    
    
    // If root is null, return 0
    if(root == null)
        return 0;
    
    // If levelNumber is 1, push the root value into the levelNodes array
    if(levelNumber == 1)
        levelNodes.push(root.val);
    else{
        // Recursively traverse the left and right subtrees
        levelOrderTraversal(root.left, levelNumber-1, levelNodes);
        levelOrderTraversal(root.right, levelNumber-1, levelNodes);
    }
    }
    
    // Function to calculate the height of a binary tree
    var calHeight = function(root) {
    // If root is null, return 0
    if(root == null)
    return 0;
    

    // Calculate the height of the left and right subtrees
    let left = calHeight(root.left);
    let right = calHeight(root.right);
    
    // Return the maximum of the left and right subtree heights plus 1 (for the root node)
    if(left> right)
        return left+1;
    else
     return right+1;
    };