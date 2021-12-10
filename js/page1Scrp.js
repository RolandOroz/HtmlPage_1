//change by css class
function colorChangeByClass(id, classN) {
  document.getElementById(id).className = classN;
}

//changing tag atributes
function changeAttrib(id, atrib, className ) {
    console.log(arguments);
   document.getElementById(id).setAttribute(atrib, className);
}
//swaping nodes
function swapContent(id1) {
let lastNode = document.getElementById(id1).lastChild;
let  elId= document.getElementById(id1);
let swap = elId.insertBefore(lastNode, elId.childNodes[0]);
}

//resets atribute
function resetT(el, atr) {
  //document.getElementById(id).removeAttribute(atr);
  el.removeAttribute(atr); //nared s class
}

function resetClass(elClass,atr) {
  //console.log(arguments);
  elClass.removeAttribute(atr);
}

function swapTag(swap1,swap2) {
  let tag1 = document.getElementById(swap1);
  let tag2 = document.getElementById(swap2);

  let temp = tag1.innerHTML;
  tag1.innerHTML = tag2.innerHTML;
  tag2.innerHTML = temp;
}

