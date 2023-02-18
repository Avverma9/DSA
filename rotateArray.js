function rotateArray(arr, k) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray[(i + k) % arr.length] = arr[i];
  }
  return newArray;
}
let arr = [10, 20, 30, 40, 50];
let k = 3;

console.log(rotateArray(arr, k)); // [80, 90, 100, 10, 20, 30, 40, 50, 60, 70]
/*newArray[(i + k) % arr.length] = arr[i]; yeh line newArray ko banate waqt use kiya jaata hai.

newArray wahi rotated array hai jisme hum elements ko store kar rahe hai.

arr original array hai jise hum rotate karna chahte hai.

i current index hai jisme hum abhi process kar rahe hai.

k wahi number hai jitni baar hum array ko rotate karna chahte hai.

(i + k) % arr.length yeh expression newArray ka new index calculate karta hai.
 % operator i + k ko arr ka length se divide karke remainder nikalta hai. 
 Yeh kaam karta hai ki new index hamesha valid index in array mein rahe.

Finally, newArray[(i + k) % arr.length] = arr[i]; sets karta hai ki arr ka current element i index se newArray ka 
calculated index (i + k) % arr.length tak transfer ho jaye.*/