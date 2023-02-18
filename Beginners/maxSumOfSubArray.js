let maxSumSub = function (arr) {
    let maxSum=arr[0]
    let newSum=0
    for(let i =0;i<arr.length;i++){
        newSum+=arr[i]
        if(newSum>maxSum){
            maxSum=newSum
        }
        if(newSum<0){
            newSum=0
        }
    }
    return maxSum
}
console.log(maxSumSub([-2,1,-3,4,-1,2,1,-5,4]));

 
