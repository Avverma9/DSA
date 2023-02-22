https://leetcode.com/problems/top-k-frequent-elements/
function topKFrequent(nums, k) {
    const frequency = new Map();
    for (const num of nums) {
      frequency.set(num, (frequency.get(num) || 0) + 1);
    }
  
    const pairs = Array.from(frequency.entries());
    pairs.sort((a, b) => b[1] - a[1]);
  
    const result = [];
    for (let i = 0; i < k; i++) {
      result.push(pairs[i][0]);
    }
    return result;
  }