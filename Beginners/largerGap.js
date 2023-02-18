let arr=[3,6,7,10]
let max=arr[0]
let min=arr[0]
let largerGap=0
for (let i = 0; i < arr.length; i++) {
   if(arr[i]<min){
    min=arr[i]
        
    }
    if(arr[i]>max){
        max= arr[i]
    }
    largerGap=max-min
}
console.log(largerGap);                     