var isAnagram = function(s, t) {
    
   // If the length of strings is not same, return false as they cannot be anagrams
if(s.length!=t.length) return false

// Initialize an object to keep track of the count of each character in both the strings
let count={}
let n=s.length

// Traverse through both strings character by character and update the count of each character
for(let i=0;i<n;i++){
    // If the character is not already present in count object, add it with count 0
    if(!count[s[i]]) count[s[i]]=0
    if(!count[t[i]]) count[t[i]]=0
    // Increment count of the character in the first string and decrement count in the second string
    count[s[i]]++
    count[t[i]]--
}

// Traverse through the count object and if any count of character is not zero, return false
for(let ch in count){
    if(count[ch]!==0)return false
}
// If all counts are zero, return true as the strings are anagrams
return true
};
console.log(isAnagram("ankit", "ankit")) 