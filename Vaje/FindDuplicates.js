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
let date = new Date();

function randArr(arr) {
    for (let i = 0; i < 20; i++) {
        arr[i] = randomDay(2021,0,3);
        uniqueArr.add(arr[i].getTime());
    }
}
randArr(dateRandArr);


















//********************************************************
console.log(dateRandArr);
console.log(dateRandArr.length);

console.log(uniqueArr.size);
console.log(uniqueArr);

