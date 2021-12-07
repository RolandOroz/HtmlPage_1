function colorChange(el,hexColorOnlyNumber) {
  //console.log(arguments);
      el.style.color = "#" + hexColorOnlyNumber;
}

//changing tag atributes
function changeAttrib(id, atrib, className ) {
    console.log(arguments);
   document.getElementById(id).setAttribute(atrib, className);
}

//changing tag positions
function swapPositions(id) {
  //document.getElementById(id).


}

//resets atribute
function resetT(el, atr) {
  //document.getElementById(id).removeAttribute(atr);
  el.removeAttribute(atr); //nared s class
}

