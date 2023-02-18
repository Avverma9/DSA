function reverseArr(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let temp = arr[right];
    arr[right] = arr[left];
    arr[left] = temp;

    left++;
    right--;
  }

  return arr;
}

console.log(reverseArr([10,15,18,19,20, 1 , 2 , 3 , 4]));