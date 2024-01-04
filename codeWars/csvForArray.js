// Create a function that returns the CSV representation of a two-dimensional numeric array.
//
//     Example:
//
// input:
//     [[ 0, 1, 2, 3, 4 ],
//         [ 10,11,12,13,14 ],
//         [ 20,21,22,23,24 ],
//         [ 30,31,32,33,34 ]]
//
// output:
//     '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'

function toCsvText(array) {
    let result = ""
    for (let i = 0; i < array.length; i++){
        if (i === array.length - 1){
            return result += array[i].join(",")
        } else {
            result += array[i].join(",") + "\n"
        }
    }
    return result
}

console.log(toCsvText([[1,2,3,4,5],[6,7,8,9],[10,11,12,13]]))