//Setting variables
const name = document.querySelector('#name'),
 email = document.querySelector('#email'),
 phone = document.querySelector( '#phone'),
 gender = document.querySelector('#gender'),
 submit = document.querySelector('.btnsumbit'),
 Fnext = document.querySelector('.btn'),
 
sDay = document.querySelector('.days'),
sTime = document.querySelector('#time');
currentDay = document.querySelector('.day');




     //Setting up Event Listners
     eventListener();
//Disabling Buttons onload
function eventListener(){
    document.addEventListener('DOMContentLoaded', appInit)

    name.addEventListener('blur', validateForm);
    email.addEventListener('blur', validateForm);
    phone.addEventListener('blur', validateForm);
    gender.addEventListener('blur', validateForm);
    submit.addEventListener('submit', sendForm);
    Fnext.addEventListener('click', sendForm);
   
}


//Settin up Functions

//App Init Creation
function appInit(){
    //disable send button
    Fnext.disabled = true;
}



function validateForm(){
    let errors;
    
    //validate the Length of the inputs
    validateLength(this);
    
    if(this.type == 'email'){
        validateEmail(this);
    }
    
    //Returning and Rechecking erros if there are any
    
    errors = document.querySelectorAll('.error');
    //checking if inputs are empty 
    if(name.value && phone.value && email.value && gender.value !== ""){
        if(errors.length === 0){
            Fnext.disabled = false;
        }
    }
    }


// Validating length of input
function validateLength(field){
    if(field.value.length > 0){
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    }
    else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}

//validating Email input
function validateEmail(field){
    let emailText = field.value;
     // validating the @ sign
     if(emailText.indexOf('@'&& '.com') !== -1){
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    }
    else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}




function sendForm(e){

    e.preventDefault();
    
    //mention out values
    let Details =`
    Name: ${name.value}
     Email: ${email.value}
    Phone: ${phone.value}
    Gender: ${gender.value}
    `;



    //Setting up Storage
    saveIntoStorage(Details);

}



// pushing details into Storage
function saveIntoStorage(Details){
    localStorage.setItem('Details', JSON.stringify(Details));

}

