https: //leetcode.com/problems/sort-characters-by-frequency/

var frequencySort = function (s) {
  const freqMap = new Map();
  // Build frequency map
  for (const c of s) {
    freqMap.set(c, (freqMap.get(c) || 0) + 1);
  } // Sort characters by frequency
  const sortedChars = Array.from(freqMap.keys()).sort(
    (a, b) => freqMap.get(b) - freqMap.get(a)
  );
  // Build sorted string
  let sortedString = "";
  for (const c of sortedChars) {
    sortedString += c.repeat(freqMap.get(c));
  }
  return sortedString;
};
