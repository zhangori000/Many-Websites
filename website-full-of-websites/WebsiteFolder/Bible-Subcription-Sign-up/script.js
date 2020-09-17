// const form = document.getElementById('form');
// const first = document.getElementById('firstname');
// const last = document.getElementById('lastname');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
//^^ however there is a faster way of doing all that... (shown below in code)
//check all fields; if there is error--display;
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstNameValue = form['firstname'].value;
    const lastNameValue = form['lastname'].value;
    const emailValue = form['email'].value;
    const passwordValue = form['password'].value;

    if(firstNameValue === '') {
        addErrorMessageToId('firstname', 'First Name cannot be empty');
    } else {
        removeErrorMessageFromId('firstname')
    }

    if(lastNameValue === '') {
        addErrorMessageToId('lastname', 'Last Name cannot be empty');
    }else {
        removeErrorMessageFromId('lastname')
    }

    if(emailValue === '') {
        addErrorMessageToId('email', 'Email is required');
    } else if(!isValid(email)) {
        addErrorMessageToId('email', 'Email is not valid');
    } else {
        removeErrorMessageFromId('email')
    }

    if(passwordValue === '') {
        addErrorMessageToId('password', 'Password cannot be empty');
    }else {
        removeErrorMessageFromId('password')
    }


    
});

function addErrorMessageToId(field, message) {
        const inputField = form[field].parentNode;
        inputField.classList.add('error');
        
        const smallText = inputField.querySelector('small');
        smallText.innerText = message;
        smallText.style.opacity = '1';
}
function removeErrorMessageFromId(field) {
    const inputField = form[field].parentNode;
    inputField.classList.remove('error');

    const smallTextToModify = inputField.querySelector('small');
    smallTextToModify.style.opacity = '0';
}

function isValid(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}