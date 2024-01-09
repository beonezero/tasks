// Write a function that will check if two given characters are the same case.
//
// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1
//
// 'A' and 'C' returns 1
//
// 'b' and 'G' returns 0
//
// 'B' and 'g' returns 0
//
// '0' and '?' returns -1
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