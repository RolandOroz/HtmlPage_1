// vaja spremenljivke
  let x = 2;
  let y = 5;
  let z = x + y; //2. naloga

  console.log(x + " + " + y + " = " + z );


  function multiply(a, b) {
    if(Number.isInteger(a) && Number.isInteger(b)){
      return a*b;
    }
    throw "not an integer";
  }
  console.log(multiply(x, y));