function frecuencias(str) {
    const letras = str.split("")
    const letrasFiltro = letras.filter(i => i !== " ")
    const repeticiones = {}
    for (let i of letrasFiltro) {
        if (repeticiones[i]) {
            repeticiones[i] += 1
        } else {
            repeticiones[i] = 1
        }
    }

    return repeticiones
    
}


console.log(frecuencias("hola mundo"));
// { h: 1, o: 2, l: 1, a: 1, m: 1, u: 1, n: 1, d: 1 }

console.log(frecuencias("anita lava la tina"));
// { a: 6, n: 2, i: 2, t: 2, l: 2, v: 1 }