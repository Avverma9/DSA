let arr = [1,45,87,69,15]
let maxmin = new Array()
if(arr[0]>arr[1]){
  maxmin.max=arr[0]
  maxmin.min=arr[1]
}
else{
  maxmin.max=arr[1]
  maxmin.min=arr[0]
}
for (let i = 2; i < arr.length; i++) {
  if (arr[i]>maxmin.max) {
    maxmin.max=arr[i]
  }
  else if (arr[i]<maxmin.min){
    maxmin.min=arr[i]
  }
  
}
console.log(maxmin.min);
console.log(maxmin.max);

//1 method
let arra = [15, 14, 87, 84, 41, 65];
let MaxMin = { max: arra[0], min: arra[0] };

for (let i = 1; i < arra.length; i++) {
  if (arra[i] > MaxMin.max) {
    MaxMin.max = arra[i];
  } else if (arra[i] < MaxMin.min) {
    MaxMin.min = arra[i];
  }
}
console.log(MaxMin.max, MaxMin.min);
//2nd method

let array = [15, 14, 87];
let maxMin = [array[0], array[0]];
for (let i = 1; i<=array.length-1; i++) {
if (array[i] > maxMin[0]) {
  maxMin[0] = array[i];
}
if (array[i] < maxMin[1]) {
    maxMin[1] = array[i];
}
}
console.log("Maximum value:", maxMin[0]);
console.log("Minimum value:", maxMin[1]);