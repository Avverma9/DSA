let arr = [5, 2, 4, 6, 1, 3];

for (let i = 0; i <=arr.length-1; i++) {
  let key = arr[i];
  let j = i - 1;

  while (j >= 0 && arr[j] > key) {
    arr[j + 1] = arr[j];
    j = j - 1;
  }
  arr[j + 1] = key;
}

console.log(arr); // [1, 2, 3, 4, 5, 6]
/*Insertion sort ek simple aur efficient sorting algorithm hai jisme array ke elements sort karne ke liye use hota hai.
Algorithm ke dauraan, ek baar mein sirf ek element sort hota hai aur uske baad, 
baaki elements sort hone ke liye wait karte hain.
  
Insertion sort ka process ye hota hai:

1. Array ke first element ko sorted list mein consider kare.
2. Doosre element se start kare aur sorted list mein insert kare.
3. Aage ke elements ke liye same process repeat kare.
4. Repeat karte jaa ke saare elements sort ho jayenge.
5. Time complexity O(n^2) hoti hai insertion sort mein kyuki har element ke liye inner loop chalta hai.*/

