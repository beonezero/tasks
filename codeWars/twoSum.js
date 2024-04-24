// https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript

function twoSum(numbers, target) {
    let resultArr = []
    for (let i = 0; i < numbers.length; i++){
        for (let k = 1 + i; k < numbers.length; k++){
            if (numbers[i] + numbers[k] === target){
                resultArr.push(i)
                resultArr.push(k)
            }
        }
    }
    return resultArr
}

console.log(twoSum([1,2,3], 4))