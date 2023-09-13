const email = document.forms['myform']['email'];
const password = document.forms['myform']['password'];

email.addEventListener('input', validated);

function validated(){
    if(email.value.length >= 10){
        email.style.border = '1px solid green';
        email_error.style.display = 'none';
        return true;
    }
    if(password.value.length >= 8){
        password.style.border = '1px solid green';
        password_error.style.display = 'display';
        password_error.style.display = 'none';  
        return true;
    }
}
