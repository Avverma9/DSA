let m = 6 
let n = 5
let magazine = "two times two is not"
let note = "two times two is four"

function checkMagazine(magazine, note) {
    magazine = magazine.split(" ")
    note = note.split(" ")
    let temp = []

    for(let i = 0 ; i < note.length ; i ++){
        for(let j = 0 ; j<magazine.length ; j++){
            if(note[i]==magazine[j]){
                temp.push(note[i])
                magazine.splice(0,1)
            }
        }
    }

    if(note.length == temp.length){
        return "Yes"
    }
    else{
        return "No"
    }

}

console.log(checkMagazine(magazine,note))