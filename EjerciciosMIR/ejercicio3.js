function caracteresEnComun(str1, str2) {
    const allWords = []
    const result = []
    for (let i in str1)
        allWords.push(str1[i])
    for (let j in str2) {
        allWords.push(str2[j])
    }

    const objectWords = {}
    for (let w of allWords){
        if (objectWords[w]) {
            objectWords[w] += 1
        } else {
            objectWords[w] = 1
        }
    }
    
    for (let c in objectWords){
        if (objectWords[c] >= 2){
            result.push(c)
        }
    }
    
    const filterArray = result.filter(i => i !== " ")
    return filterArray

}


console.log(caracteresEnComun("Hola", "Mundo")); // ["o"]
console.log(caracteresEnComun("German", "Gabriela")); // ["G", "e", "r", "a"]
console.log(caracteresEnComun("Hola", "Bye")); // []

