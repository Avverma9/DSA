function countWords(str) {
  const words = str.split(' ');
  const frequency = new Map();
  
  for (const word of words) {
    const count = frequency.get(word) || 0;
    frequency.set(word, count + 1);
  }
  
  return frequency;
}

const str = "Success is not the key of Happiness, Happiness is the key of success";
const frequency = countWords(str);
console.log(frequency);