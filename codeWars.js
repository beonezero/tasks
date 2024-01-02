const setUpperCase = (string, part) => {
    string = string.toLowerCase()
    part = part.toLowerCase()
    let arrPart = part.split("")
    let count = 0
    for (let i = 0; i < arrPart.length; i++){
        if (string.includes(arrPart[i])){
            count++
        }
    }
    return count === arrPart.length
}

console.log(setUpperCase("Incubator", "table"))
