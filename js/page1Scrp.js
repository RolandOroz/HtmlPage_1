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

function swapContent(id1, id2) {
  //const link = document.getElementById(id);
  /*console.log(link.childElementCount);
  let tagFirst = link.getElementsByTagName('p')[0].innerText);
  let firstC = link.firstElementChild.innerHTML;
  let lastC = link.lastElementChild.innerHTML;
*/
/*  console.log(firstC);
  console.log(lastC);*/
  let tagFirst = document.getElementById(id1).lastChild;
  document.getElementById(id2).appendChild(tagFirst);
  console.log(tagFirst);
  let tagLast = document.getElementById(id2).firstChild;
  document.getElementById(id1).appendChild(tagLast);
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

