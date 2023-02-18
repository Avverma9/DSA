let array = [ 100,514,10,2]
for (let index = 0; index < array.length; index++) {
    for (let j = 0; j < array.length; j++) {
        console.log(array);
        if (array[j]>array[j+1]) {
            let temp = array[j+1]
            array[j+1]=array[j]
            array[j] = temp
        }
        
    }
    
}
console.log(array);

/* isme hamne do loop banaye pahla loop index 0 se start hoga jise ham outer loop kahte hai
ye loop 0 se start hote hi inner loop pe jayega aur inner loop 0 se uski length tak chalega then wo check karega ki array[j]
means second loop jo chal raha hai isme sare elemnts check ho rahe hai to ye sare element ko check karega ki kaun bada hai
then ye isko swap kar dega array[j] ko uske agle element se yadi uska agla element bada hai to , tab ye array[j+1]( next element)
ko check karega aur fir ham ek temp variable lenge jisme hamari highest value wali element temporary padi rahegi fir ham usse
apne low value wali index ko swap kar denge fir ye hamara loop array ko swap kar dega
* important -  is array me 4 elements hai aur hamne do loop liya hai it means hamara code 4*4 times excute hoga*/