"use strict"

const submit = document.getElementById("submitBtn"); // id value for submit button

const formElements = ['firstname', 'lastname', 'email', 'pnum', 'address', 'postcode', 'password', 'submit']; // id values of all elements in the form

const requiredCheck = ['firstname', 'lastname', 'email', 'password']; // check for required tag

const patternCheck = ['email', 'pnum', 'postcode']; // check for pattern

let numberOfReds = 0; // number of warnings in html

function checkEmpty(i) {
  numberOfReds = 0;
  if (i.value === '') { // if input area is empty
    i.setAttribute('style', 'border: red dotted 2px');
    document.getElementById('footer').innerHTML = 'Please dont leave empty fields';
    document.getElementById('footer').setAttribute('style', 'color: red');
    numberOfReds++;
  } else {
    i.setAttribute('style', 'border: inherit');
  }
}

// add a button listener that does a function each time clicked
submit.addEventListener('click', function (e) {

  for (var form = 0; form < formElements.length; form++) {

    let elementIdForm = document.getElementById(formElements[form]);

    if (requiredCheck.indexOf(formElements[form]) > -1 == true) { // adds the 'required' attribute
      elementIdForm.required = true;
    }

    const arrayCheck = patternCheck.indexOf(formElements[form]);

    if (arrayCheck > -1 == true) { // regex pattern check
      console.log(formElements[form]);
      console.log(elementIdForm);
      let temp = elementIdForm.getAttribute("pattern");
      let patt = new RegExp(temp);
      let res = patt.exec(elementIdForm.value);

      if (elementIdForm.value !== res || elementIdForm.length >= 1) { // if true
        document.getElementById(formElements[form]).setAttribute('style', 'border: inherit');
      } else { // if false
        document.getElementById(formElements[form]).setAttribute('style', 'border: red dotted 2px'); // set the red dotted border to right shits using the index of [form]
      }
    }
  }

  const elements = document.querySelectorAll('[required]'); //select all input fields with the 'required' attribute
  elements.forEach(checkEmpty);

if (numberOfReds > 0) {
  e.preventDefault();
} else {
  document.form1337.submit();
}

});
