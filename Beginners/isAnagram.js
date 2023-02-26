var isAnagram = function(s, t) {
    // check if lengths are equal
    if(s.length != t.length) return false;

    // create a count object
    let charCount = {};

    // iterate through strings
    let n = s.length;
    for(let i = 0; i < n; i++) {
        // initialize count to zero if not present in object
        if(!charCount[s[i]]) charCount[s[i]] = 0;
        if(!charCount[t[i]]) charCount[t[i]] = 0;

        // increment count for s and decrement count for t
        charCount[s[i]]++;
        charCount[t[i]]--;
    }

    // check if all counts are zero
    for(let char in charCount) {
        if(charCount[char] !== 0) return false;
    }
    return true;
};

console.log(isAnagram("ankit", "ankit"))