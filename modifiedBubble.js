function modifiedBubbleShort(arr) {
   let outLoop=arr.length
   for (let i = 0; i < outLoop; i++) {1
    let swap =false
    for(let j =0;j<outLoop-1-i;j++){
        if(arr[j]>arr[j+1]){
            swap=true
            let temp=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp
        }
    }
    if(swap=false){
        break;
    }
    
   }
   return arr
}
//modifiedBubbleShort([9,8,3,9,5])
console.log(modifiedBubbleShort([9,8,3,9,5]));