let string = "";

for(let i = 1; i <=4; i++) { // external loop
  for(let j = 1; j <=i; j++) { // internal loop
    string += "*";
  }
  // newline after each row
  string += "\n";
}
// printing the string
console.log(string);