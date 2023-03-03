let array = [1,1,1,1,1,1]
for (let i = 0; i < array.length; i++) {
    let swap = false
    for (let j = 0; j < array.length-1-i; j++) {
        if (array[j]>array[j+1]) {
            swap=true
            let temp = array[j]
        array[j] = array[j+1]
        array[j+1]=temp

            
        }
        
    }
    if(swap=false)
    break;
    
}
console.log(array);