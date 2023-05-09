// Define a function that takes an array as an argument and returns the maximum sum of a subarray within that array.
let maxSumSub = function (arr) {
    let maxSum=arr[0]; // Initialize maxSum to the first element of the array
    let newSum=0; // Initialize newSum to 0
    for(let i =0;i<arr.length;i++){ // Loop through each element of the array
    newSum+=arr[i]; // Add the current element to newSum
    if(newSum>maxSum){ // If newSum is greater than maxSum, update maxSum to newSum
    maxSum=newSum;
    }
    if(newSum<0){ // If newSum is less than 0, reset newSum to 0
    newSum=0;
    }
    }
    return maxSum; // Return the maximum sum of a subarray within the array
    }
    
    console.log(maxSumSub([-2,1,-3,4,-1,2,1,-5,4])); // Call the function with an example array and log the result to the console
