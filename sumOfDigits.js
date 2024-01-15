let a = 213243
let sum=0
while(a>0){
 sum= sum+a%10
 a=parseInt(a/10)
}

console.log(sum);


function sumOfDigits(num) {
    return num.toString().split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
  }
  
  console.log(sumOfDigits(456));  // Example: Find the sum of digits in 456
  