https://www.geeksforgeeks.org/chocolate-distribution-problem/
function distributeChocolates(arr, m) {
  arr.sort((a, b) => a - b); 
  let minDiff = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i + m - 1 < arr.length; i++) {  // tc 
    const diff = arr[i + m - 1] - arr[i];
    if (diff < minDiff) {
      minDiff = diff;
    }
  }
  return minDiff;
}
let arr = [ 12, 4, 7, 9, 2, 23, 25,
  41, 30, 40, 28, 42, 30,
  44, 48, 43, 50 ];
let m = 7;
console.log(distributeChocolates(arr, m));
