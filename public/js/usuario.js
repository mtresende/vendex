document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const usuarioInput = document.getElementById('usuario');
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const confirmarSenhaInput = document.getElementById('confirmarSenha');
    const passwordMismatchAlert = document.getElementById('passwordMismatchAlert');
    const fieldsRequiredAlert = document.getElementById('fieldsRequiredAlert');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission by default, we'll handle it manually

        // Hide alerts by default
        passwordMismatchAlert.style.display = 'none';
        fieldsRequiredAlert.style.display = 'none';

        // Check if all fields are filled
        if (!usuarioInput.value || !emailInput.value || !senhaInput.value || !confirmarSenhaInput.value) {
            fieldsRequiredAlert.style.display = 'block'; // Show required fields alert
            return; // Stop further processing
        }

        // Check if passwords match
        if (senhaInput.value !== confirmarSenhaInput.value) {
            passwordMismatchAlert.style.display = 'block'; // Show password mismatch alert
            return; // Stop further processing
        }

        // If all checks pass, redirect to login page
        window.location.href = '../index.html'; 
    });
}); 