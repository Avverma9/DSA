var isAnagram = function(s, t) {
    
    if(s.length!=t.length) return false

    let count={}
    let n=s.length
    for(let i=0;i<n;i++){
        if(!count[s[i]]) count[s[i]]=0
        if(!count[t[i]]) count[t[i]]=0
        count[s[i]]++
        count[t[i]]--
    }
    for(let ch in count){
        if(count[ch]!==0)return false
    }return true
};
console.log(isAnagram("ankit", "ankit")) 