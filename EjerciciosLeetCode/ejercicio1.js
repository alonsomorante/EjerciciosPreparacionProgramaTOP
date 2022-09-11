function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false
    }
    
    const objEse = {};
    const objTe = {}
    for (let i = 0; i < s.length; i++) {
        let iLetra = s[i];
        if (objEse[iLetra]) {
            objEse[iLetra] += 1
        } else {
            objEse[iLetra] = 1
        }
    }

    for (let i = 0; i < s.length; i++) {
        let tLetra = t[i];
        if (objTe[tLetra]) {
            objTe[tLetra] += 1
        } else {
            objTe[tLetra] = 1
        }
    }

    for (let o in objEse) {
        if (objEse[o] !== objTe[o]) {
            return false
        }
    }

    return true 
}

console.log(isAnagram("alonso", "aaonla"))