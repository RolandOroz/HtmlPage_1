//imperative**************************
function countDown(number) {
  for(let i = number;i > 0; i--) {
    console.log(i);
  }
}
countDown(5);
console.log();

//recursive***************************
function countDownRec(number) {
  if(number === 0) {
    return;
  }
  console.log(number);
  countDownRec(number - 1);
}
countDownRec(5);