function product(arr) {
  let productOf = 1;
  for (let i = 0; i <=arr.length-1; i++) {
    productOf *= arr[i];
  }
  return productOf;
}
console.log(product([12, 2]));

function product(arr, index = 0) {
  // Base case: empty array, return 1
  if (index === arr.length) {
    return 1;
  }

  // Recursive case: multiply current element with product of the rest
  return arr[index] * product(arr, index + 1);
}

console.log(product([12,5]));
