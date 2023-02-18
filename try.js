let array = [15,74,14,3,2,4,8]
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if(array[j]>array[j+1]) {
      let temp = array[j+1]
      array[j+1] = array[j]
      array[j] = temp
  }

}
}
console.log(array);