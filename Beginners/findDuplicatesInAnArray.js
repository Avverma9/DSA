let arr = [13 ,9 ,25 ,1, 1, 0 ,22 ,13 ,22 ,20 ,3 ,8 ,11, 25 ,10 ,3 ,15 ,11 ,19 ,20 ,2 ,4 ,25, 14 ,23 ,14];
let duplicates = [];
let unique = [];
arr.sort((a,b)=>a-b);
for (let i = 0; i < arr.length; i++) {
  if (unique.indexOf(arr[i]) === -1) {
    unique.push(arr[i]);
  } else {
    duplicates.push(arr[i]);
    
  }
}
console.log("Duplicate values in the array: " + duplicates);