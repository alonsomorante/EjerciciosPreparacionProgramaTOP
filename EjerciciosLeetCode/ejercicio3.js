function adultos(arr) {
    const resultado = arr.filter(i => {
        if (i < 18 || i > 70) {
            return false
        } else {
            return true
        }
    })

    return resultado
}

console.log(adultos([28, 45, 17, 21, 17, 70]))