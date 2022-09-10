/*function isAnagram(s, t) {
    const arrLetterS = [];
    const arrLetterT = [];
    
    for (let i in s){
        arrLetterS.push(s[i])
    };
    for (let j in t){
        arrLetterT.push(t[j])
    };

    if (arrLetterS.length !== arrLetterT.length) {
        return false
    };

    const ObjectLetterS = {}
    const ObjectLetterT = {}

    for (let i of arrLetterS) {
        if (ObjectLetterS[i]) {
            ObjectLetterS[i] += 1
        } else {
            ObjectLetterS[i] = 1
        }
    }

    for (let j of arrLetterS) {
        if (ObjectLetterT[j]) {
            ObjectLetterT[j] += 1
        } else {
            ObjectLetterT[j] = 1
        }
    }

    for (let c in ObjectLetterS) {
        console.log(ObjectLetterS[c]),
        console.log(ObjectLetterT[c])
            
    }
    
}

console.log(isAnagram("vaca", "vasa"))*/

const blanco = " " 
const result = blanco * 3
console.log(result)