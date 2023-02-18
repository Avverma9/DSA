// Write a program to count the number of occurrences of each character in a string.

const string = "hello, world!"; // Define the input string
const counts = {}; // Create an empty object to store the character counts

for (const char of string) { // Loop through each character in the string
  if (char in counts) { // If the character is already a key in the counts object, increment its count
    counts[char]++;
  } else { // Otherwise, add the character to the counts object with an initial count of 1
    counts[char] = 1;
  }
}

for (const [char, count] of Object.entries(counts)) { // Loop through each key-value pair in the counts object
  console.log(`Character '${char}' occurs ${count} times.`); // Print the character and its count
}