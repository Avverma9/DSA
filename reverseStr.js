function reverseStr(str) {
    let reversed = ""
    let right = str.length -1
    while( 0<=right) {
       reversed += str[right]
       right --
    }
    return reversed
}
console.log(reverseStr("ankkit"));