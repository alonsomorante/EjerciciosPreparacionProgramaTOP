function numDuplicados(str) {
    const  objectDucplicate = {}
    let countWords = 0;
    for (let i in str) {
        const letras = str[i];
        if(objectDucplicate[letras]) {
            objectDucplicate[letras] += 1
        } else {
            objectDucplicate[letras] = 1
        }
    }
    
    for (let v in objectDucplicate) {
        if (objectDucplicate[v] >= 2) {
            countWords = countWords + 1
        }
    }
    
    return countWords
    
}


console.log(numDuplicados("abcaa")); // 1
console.log(numDuplicados("abab")); // 2
console.log(numDuplicados("abc")); // 0 