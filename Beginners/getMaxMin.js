let array = [12,14,54,13,48]
let max=array[0]
let min=array[1]
for(let i=0; i<=array.length-1;i++){
if(array[i] < min){
  min = array[i]
}
if(array[i]>max){
  max=array[i]

}

}
let sum=max+min
console.log("Maximum element is " + max);
console.log("Minimum element is " + min);
console.log("sum of max min is " + sum);