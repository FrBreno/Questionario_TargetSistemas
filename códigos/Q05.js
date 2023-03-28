const inverteCarac = (str) => {
    let novaStr = ''
    let tamanhoStr = str.length

    while (tamanhoStr > 0) {
        novaStr += str[tamanhoStr - 1]
        tamanhoStr--
    }
    return novaStr
}

console.log(inverteCarac('JavaScript'))