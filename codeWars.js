function sameCase(a, b){
    const charA = a.charCodeAt(0)
    const charB = b.charCodeAt(0)
    if ((charA >= 65 && charA <= 90) && (charB >= 65 && charB <= 90) ||
        (charA >= 97 && charA <= 122) && (charB >= 97 && charB <= 122)){
        return 1
    } else if ((charA >= 65 && charA <= 90) && (charB >= 97 && charB <= 122) ||
        (charB >= 65 && charB <= 90) && (charA >= 97 && charA <= 122)){
        return 0
    } else {
        return -1
    }
}

console.log(sameCase("A", "b"))