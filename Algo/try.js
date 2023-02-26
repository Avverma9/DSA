let array = [12,12,41,54,74,135]
let d={}
let res=[]
for (let i = 0; i <= array.length-1; i++) {
  if(array[i] in d){
    d[array[i]]+=1
  }else{
    d[array[i]] = 1
  }
    if(d[array[i]]>1){
res.push([array[i]])
    }
}
console.log(res);