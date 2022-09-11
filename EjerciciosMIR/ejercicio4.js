function ajustarTexto(str, num) {
    let N = str.length;
    let arrStr = []
    if (N >= num) {
        return str.slice(0, num)
    } else {
        arrStr.push(str)
    }

    let result = num - N;
    while (result !== 0) {
        arrStr.push(" ")
        result--
    }
    
    const resultadoFinal = arrStr.join("")
    return resultadoFinal
}


console.log(ajustarTexto("", 3)) // " " 
console.log(ajustarTexto("hola", 2)) // "ho" 
console.log(ajustarTexto("Hola", 0)) // "" 
console.log(ajustarTexto("Hola", 5)) // "Hola "