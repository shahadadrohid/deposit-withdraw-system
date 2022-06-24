// Submit Button Event Handler 
document.getElementById('submit-button').addEventListener('click', function () {

    // Get email input 
    const inputEmail = document.getElementById('input-email');
    const userEmail = inputEmail.value;
    console.log(userEmail)

    // Get password inpt
    const inputPassword = document.getElementById('input-password');
    const userPassword = inputPassword.value;
    console.log(userPassword)

    if (userEmail == 'shahadad@gmail.com' && userPassword == 'shahadad') {
        window.location.href = 'bank.html'
    }
})