function registerValidation() {

    const username = document.forms.register_form.username.value;
    const email = document.forms.register_form.email.value;
    const password = document.forms.register_form.password.value;
    const repeatedPass = document.forms.register_form.repeatedPass.value;

    if (!username) {
        alert('The username field is missing.');
        return false;
    }

    const chars = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!chars.test(String(email).toLowerCase())) {
        alert('The email you introduced is not valid.');
        return false;
    }

    if (password.length < 8) {
        alert('The password should be more than 8 characters.');
        return false;
    }

    if (password !== repeatedPass) {
        alert('The passwords you introduced do not match.');
        return false;
    }

}