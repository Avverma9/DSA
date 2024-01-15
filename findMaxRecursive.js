function findMaxRecursive(arr, index = 0, max = Number.NEGATIVE_INFINITY) {
    if (index === arr.length) {
      return max;
    } else {
      max = Math.max(max, arr[index]);
      return findMaxRecursive(arr, index + 1, max);
    }
  }
  
  const numbers = [4, 2, 7, 1, 9, 5];
  const maxNumber = findMaxRecursive(numbers);
  console.log(maxNumber);
  
