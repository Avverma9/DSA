/*in this question we have to find the taget element it means we will take two element and check that their sum
is =  target or not if yes then return their index*/

var twoSum = function(numbers, target) {
    let map = new Map();
    for (let i = 0; i < numbers.length; i++) {
        let diiference= target - numbers[i];
        if (map.has(diiference)) {
            return [map.get(diiference), i];
        }
        map.set(numbers[i], i);
    }
    return [];
  };
  
  let numbers=[8,3,1,2,65,98];
  let target= 10;
  console.log(twoSum(numbers, target)); 
  // [2, 3] (indices are 0-based)
  
//SC=O(1) because we did not used any extra space there is only variables