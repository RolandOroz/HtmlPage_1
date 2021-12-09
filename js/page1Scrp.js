function colorChange(el,hexColorOnlyNumber) {
  //console.log(arguments);
      el.style.color = "#" + hexColorOnlyNumber;
}

//change by css class
function colorChangeByClass(id, classN) {
  document.getElementById(id).className = classN;
}

//changing tag atributes
function changeAttrib(id, atrib, className ) {
    console.log(arguments);
   document.getElementById(id).setAttribute(atrib, className);
}

//changing tag positions
function showContent(tagN) {
  console.log(arguments);
  tagN = document.getElementsByTagName(tagN);
    for(let i = 0; i < tagN.length; i++) {
    console.log(tagN[i].innerText);
    console.log(arguments);
  }
}

//swaping nodes
function swapContent(id1) {
let lastNode = document.getElementById(id1).lastChild;
let  allNodes= document.getElementById(id1);
let swap = allNodes.insertBefore(lastNode, allNodes.childNodes[0]);
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

