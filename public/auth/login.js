const queryString = window.location.search;
if (queryString) {
    alert('The username or password you introduced are incorrect.');
}

function loginValidation() {

    const username = document.forms.login_form.username.value;
    const password = document.forms.login_form.password.value;

    if (!username || !password) {
        alert('The username or password should not be empty.');
        return false;
    } else if (password.length < 8) {
        alert('The password should be more than 8 characters.');
        return false;
    } else {
        return true;
    }

}