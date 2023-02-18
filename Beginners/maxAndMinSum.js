let arr = [3, 5, 2, 7, 9, 1, 8];
let max = arr[0]
let min = arr[0]
let sum =0
for (let i = 0; i < arr.length; i++) {
    if(arr[i]>max){
        max=arr[i]
    }
    if(arr[i]<min){
    min=arr[i]
    }
    sum= max+min
}
console.log(sum);