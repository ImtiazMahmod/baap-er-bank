//login form

document.getElementById('submit-btn').addEventListener('click',function(){
    //get email
    const emailField = document.getElementById('input-email');
    const userEmail = emailField.value;
    console.log(userEmail);

    //get password
    const passwordField = document.getElementById('input-password');
    const userPassword = passwordField.value;
    console.log(userPassword);

    //condition check
    if(userEmail == 'sontan@baap.com' && userPassword == 'super'){
        // console.log('wow! you are valid to access');
    
        //redirect to another page click btn
        window.location.href = 'banking.html'
    }
    else{
        console.log('kickout you are not allowed');
    }
    
});

