let arr = [1,2,3,4,5,6,7]
let temp
console.log(arr)

for (let i= 0; i < arr.length/2; i++){
    temp = arr[i] // 1
    arr[i] = arr[arr.length-1-i] // 7
    arr[arr.length-1-i] = temp // 1
}
console.log(arr)

[7,6,5,4,3,2,1]