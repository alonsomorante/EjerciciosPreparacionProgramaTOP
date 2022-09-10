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

console.log(frecuencias("hola mundo"))