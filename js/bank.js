// get user button
document.getElementById('login-submit').addEventListener('click', function(){
    // get user email
    var emailField = document.getElementById('email-field');
    var userField= emailField.value;
    // get user password
    var passwordField = document.getElementById('password-field');
    var passField= passwordField.value;
    // chacke email and password and go to anohter page
    if(userField == 'sabbir@gmail.com' && passField =='sabbir1234'){
       window.location.href = 'banking.html';
    }

})