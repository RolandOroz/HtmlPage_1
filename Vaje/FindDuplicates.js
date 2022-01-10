//random date generator
function randomDay(year, month, randomDayInterval) {
    const date = new Date();
    date.setFullYear(year);
    date.setMonth(month);
    date.setDate(Math.ceil(Math.random() * randomDayInterval));
    date.setHours(0, 0, 0, 0);  //sets T all to 0
    return date;
}
let dateRandArr = [];
let uniqueArr = new Set();
let setKey = new Map();
let date = new Date();
let searchByDate = setDate(2021,0,0);



function setDate(year, month, day) {
    const date = new Date();
    date.setFullYear(year);
    date.setMonth(month);
    date.setDate(day);
    date.setHours(0, 0, 0, 0);  //sets T all to 0
    return date;
}

function randArr(arr) {
    for (let i = 0; i < 20; i++) {
        arr[i] = randomDay(2021,0,3);
        uniqueArr.add(arr[i].getTime());
    }
}
randArr(dateRandArr);

let collection = new Map();
let x = ['1', '2', '3'];

function insertInToMap(map, key, value) {
    map.set(key, value);
    return map;
}

collection.set(uniqueArr.values(), x);

 console.log(collection.size)
// console.log(x)
console.log(collection.values())
console.log(collection.keys)
console.log(collection)

console.log("**** insertInToMap **************")

console.log(insertInToMap(setKey, 'UniqueDate', 1))

console.log("*************************************")
console.log("dateRandArr")
console.log(dateRandArr);
console.log("uniqueArr is getTime")
console.log(uniqueArr);
console.log("Search by Date   ")
console.log(searchByDate);



