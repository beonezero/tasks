// Учитывая строку, превратите каждый символ в его код символа ASCII и соедините их вместе,
// чтобы создать число — давайте назовем это число total1:
//
//     'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Затем замените все случаи числа 7на число 1и назовите это число «total2»:
//
// total1 = 656667
// ^
// total2 = 656661
//     ^
//     Затем верните разницу между суммой цифр в total1и total2:
//
//     (6 + 5 + 6 + 6 + 6 + 7)
//     - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//     6

function calc(x){
    let arrX = x.split("")
    let arrCharX = []
    let arrCharX2 = []

    for (let i = 0; i < arrX.length; i++){
        arrCharX.push(arrX[i].charCodeAt(0).toString())
    }

    let total1 = arrCharX.reduce((acc, item) => {
        return acc + item
    })
    let total2 = ""

    for (let i = 0; i < total1.length; i++){
        if (total1[i] === "7"){
            total2 += "1"
        } else {
            total2 += total1[i]
        }
    }

    let number1 = 0
    let number2 = 0

    for (let i = 0; i < total1.length; i++) {
        number1 += Number(total1[i])
        number2 += Number(total2[i])
    }

    return number1 - number2
}

console.log(calc("ABC"))