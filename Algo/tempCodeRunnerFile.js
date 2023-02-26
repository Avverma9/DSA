// Initialize the array of numbers
let array = [12, 12, 41, 54, 74, 135];

// Initialize an empty array to store duplicates
let duplicate = {};
let unique=[]
// Loop through the array and count the occurrences of each number
for (let i = 0; i <= array.length - 1; i++) {
  if (array[i] in duplicate) {
    duplicate[array[i]] += 1;
  } else {
    duplicate[array[i]] = 1;
  }

  // If the number has occurred more than once, add it to the duplicates array
  if (duplicate[array[i]] > 1) {
    unique.push(array[i]);
  }
}

// Log the duplicates array
console.log(unique);
