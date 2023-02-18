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
