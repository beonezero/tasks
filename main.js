const td_1 = "1654-bett"
const td_2 = "8306-ergt"

const todolist = [
    {id: td_1, title: "Affairs", filter: "all"},
    {id: td_2, title: "What to learn", filter: "all"}
]

const tasks = {
    [td_1]: [
        {id: 1, title: "HTML & CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
        ],
    [td_2]: [
        {id: 4, title: "Change work", isDone: false},
        {id: 5, title: "Help to mothers", isDone: false},
        {id: 6, title: "Learning for hours", isDone: true},
    ]
}

console.log(tasks[td_1])
console.log(tasks[td_2].filter(t => t.id !== 5))


console.log([...tasks[td_2], {id: 7, title: "fwefef", isDone: false}])

const nums = [2,4,6,32,5]

const result = nums.reduce((acc, el) => {
    return acc + el
}, 0)

const max = nums.reduce((acc, el) => {
    if (acc >=el){
        return acc
    } else {return el}
})

console.log(max)

const students = [
    {id: 1, name: "egee", age: 22, isMarried: false, scores: 33},
    {id: 2, name: "1234", age: 222, isMarried: true, scores: 35},
    {id: 3, name: "egv fvee", age: 221, isMarried: true, scores: 54},
    {id: 4, name: "eg gee", age: 262, isMarried: false, scores: 34},
    {id: 5, name: "eg btee", age: 202, isMarried: true, scores: 81},
]

const names = students.reduce((newArr, el) => {
    newArr.push(el.name)
    return newArr
},[])

console.log(names)