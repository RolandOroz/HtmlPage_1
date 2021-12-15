let arrayN = [];  //1.naloga
let min = 1;
let max = 102;
let counter = 25;
let limit = counter + 1;
let random;


function RandomCreator(arrayN,limit,min,max) {
  for (let i = 0; i < limit; i++) {
    random = Math.floor(Math.random() * (max)) + min;
    arrayN[i] = i + random;
    console.log(arrayN[i] + " " + i);
  }
}

console.log(RandomCreator(arrayN,26,1,102));
