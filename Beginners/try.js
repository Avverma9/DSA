function maxSubArr(arr){
    let maxSum=arr[0]
    let minSum=arr[0]
    let largerGap=0
    for (let i = 0; i < arr.length; i++) {
      if(arr[i]>minSum)
      minSum=arr[i]
      if(maxSum>arr[i])
      maxSum=arr[i]
    }
    largerGap=maxSum-minSum
    return largerGap
}
let arr = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArr(arr)); // Output: 34