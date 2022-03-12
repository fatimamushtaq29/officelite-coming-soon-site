document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    formValidation();
});

function formValidation() {
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    if (nameInput.value === '') {
        showError(nameInput);
    };
    if (emailInput.value === '' || (!isValidEmail(emailInput.value))) {
        showError(emailInput);
    };
    function showError(fieldname) {
        fieldname.parentElement.classList.add('form-field-error');
        fieldname.addEventListener('input', () => {
            fieldname.parentElement.classList.remove('form-field-error');
        });
    };
    function isValidEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    };
};