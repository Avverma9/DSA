let a = 213243
let sum=0
while(a>0){
 sum= sum+a%10
 a=parseInt(a/10)
}

console.log(sum);