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
    
    return result

}

console.log(caracteresEnComun("hola", "mundo"))


