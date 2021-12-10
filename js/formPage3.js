/*
function formInputToJson(id) {
  let formUserInput = [];
  const addFormUserInput = [ev]=>{
    ev.preventDefault();
  }

  console.log(a);

}*/

function formInputToJson() {
  let btnPrevent = document.getElementById('formBtn').addEventListener("click",function(event){
    event.preventDefault()
  });

  let fname = document.getElementById('fname').value;
  let lname = document.getElementById('lname').value;

  let ageGroup = document.getElementById('ageGr').value;
  let adress = document.getElementById('adress').value;
  let zip = document.getElementById('zip').value;
  let country = document.getElementById('country').value;
  let formTxtArea = document.getElementById('formTxtArea').value;
  console.log(document.getElementById('showText').outerHTML=fname+" "+lname+" "+ageGroup+" "+adress+" "+zip+" "+country+" "+formTxtArea);
}

function myFunction(id) {
  let elId = document.getElementById(id);
  let text = "";
  let i;
  for (i = 0; i < elId.length ;i++) {
    text += elId.elements[i].value + "\n";
  }
  const listForm = document.getElementById("showText").innerHTML = text;
  const toJSON = JSON.stringify(listForm);

  console.log(listForm);
  console.log(toJSON);
}

function getFieldName() {

  /*let selectFieldName = document.querySelectorAll('')*/
  let fieldName = document.querySelectorAll('.formUsr');
  for (i =0; i < fieldName.length; i++) {
    let name = fieldName[i].name;
    let value = fieldName[i].value;
    let selectName= document.getElementById('ageGroup').options;

    console.log(JSON.stringify(name) + ":" + "\"" +(value)+ "\"");

  }};

