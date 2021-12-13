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

function getFieldName(selectors) {

  /*let selectFieldName = document.querySelectorAll('')*/
  let fieldName = document.querySelectorAll(selectors);
  for (i =0; i < fieldName.length; i++) {
    let name = fieldName[i].name;

    let value = fieldName[i].value;
    let selectName= document.getElementById('ageGroup').options;


    console.log(JSON.stringify(name) + ":" + "\"" +(value)+ "\"" );

  }};

function fieldN(id) {
  let inputF = document.getElementById(id);
  inputF = inputF.getElementsByTagName('input');

  let selectOpt = document.getElementById('ageGroup');
  selectOpt = selectOpt.getElementsByTagName('option');

  let radio = document.getElementsByName('sex');
  let names;

  for (let i = 0; i < inputF.length; i++) {
    let namesInp = inputF[i].name;
    let val = inputF[i].value;

    console.log(JSON.stringify(namesInp) + (val));
  }
  for(let j = 0; j < selectOpt.length; j++) {
    let namesOpt = selectOpt[j].value;
    console.log(JSON.stringify(namesOpt));
  }
}

function radioValue(name) {
  let radioSex = document.forms[name]['sex'].value;
  let optionAgeGroup = document.forms[name]['ageGroup'].value;

  let form = document.forms[name];


  let i;
  let names;
  let values;
  let dataS = new data();
  for(i = 0; i < form.elements.length; i++) {
   names = names + form.elements[i].name;
   values = values + form.elements[i].value;
  }


  console.log(form.length);
  console.log(names);
  console.log(values);
  console.log(radioSex);
  console.log(optionAgeGroup);

}

function Data(nameF) {
 //this.radioF = document.forms[nameF]['sex'].value;
 //this.ageGroupF = document.forms[nameF]['ageGroup'].value;
  /*console.log(ageGroupF);
 console.log(radioF);*/

  this.form = document.forms[nameF];
  let i;
  let us1 = form.name;
  let values;

  for(i = 0; i < form.elements.length; i++) {
    us1 = us1 + form.elements[i].name;
    values = us1 + form.elements[i].value;
  }
  let us = Object.keys(us1);



 console.log(form.elements.adress.value);
 console.log(us1);
}


