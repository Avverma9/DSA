let array = [12,54,78,96]
ele = 70
place=3
for (let i = array.length -1; i>=0;i--){//length -1 kyuki indexing 0 se start hoti hai aur length property one se isliye yaha -1 karna hoga
    if (i>=place) {
        array[i+1]=array[i] //ye 3rd index ke element ko ek aage karke usi ki duplicate ko print kar dega
    
        if (i==place) {
            array[i]=ele//isme ham duplicate element ko naye element se place kar denge
            
        }
    }
}
console.log(array);


let arr = [11,44,74,8]
let place = 2
let elemen=16
for (let i=arr.length-1; i>=0;i--) {
    if(i>=place){
        arr[i+1]=arr[i]
    }
    if (i==place) {
        arr[i]=elemen
    }
    
    
}
console.log(arr);