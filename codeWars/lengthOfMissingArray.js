function getLengthOfMissingArray(arrayOfArrays) {
    let resultArr = (arrayOfArrays || []).map(item => item ? item.length : 0).sort((a,b) => a-b)
    if (resultArr.includes(0)){
        return 0
    }

    for (let i = 0; i < resultArr.length; i++){
        if (resultArr[i + 1] !== resultArr[i] + 1){
            return resultArr[i] + 1
        }
    }
    return 0
}