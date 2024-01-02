const word0 = "Hello"
const word0Translate = "Привет"

const word1 = "Bue"
const word1Translate = "Пока"

const word2 = "Teacher"
const word2Translate = "Учитель"

let finishMessage1 = "Молодец! так держать!"
let finishMessage2 = "Не льсти себе, ты говно!"

// body program

let countAnswer = 0
const allCountAnswer = 3

let user0Message = prompt(word0)
if (word0Translate === user0Message) {
    alert("Верно!")
    countAnswer ++
} else alert("Не верно!")

let user1Message = prompt(word1)
if (word1Translate === user1Message) {
    alert("Верно!")
    countAnswer ++
} else alert("Не верно!")


let user2Message = prompt(word2)
if (word2Translate === user2Message) {
    alert("Верно!")
    countAnswer ++
} else alert("Не верно!")

if (countAnswer / allCountAnswer * 100 > 50) {
    alert(finishMessage1)
} else alert(finishMessage2)