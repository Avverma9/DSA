function capitaLise(array) {
    let result=[]
    if(array.length==0) return[]
    let cap =array[0] [0].toUpperCase() + array[0].slice(1)
    result.push(cap)
    return result.concat(capitaLise(array.slice(1)))
    
}
//capitaLise(["ankit","kumar","verma"])
console.log(capitaLise(["ankit","kumar","verma"]));



//str
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  console.log(capitalizeFirst("ankit"));

// array second method
function capitalizedArr(arr) {
   return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));

}
console.log(capitalizedArr(["kumar","verma"]));