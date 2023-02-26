class Node{
    constructor(val){
    this.value=val
    this.left=null
    this.right=null
}
}
class BsTree{
    constructor(){
        this.root=null
}
isTreeEmpty(){
    return this.root===null
    
}
}
let bst = new BsTree()
console.log(bst.isTreeEmpty());