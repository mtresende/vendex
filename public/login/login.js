document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const alertElement = document.getElementById('loginAlert');
    
    if (username === 'admin' && password === '00000') {
        window.location.href = '../homepage/home.html';
    } else {
        // Mostra o alerta
        alertElement.style.display = 'block';
        alertElement.classList.add('show');
        
        // Limpa o campo de senha
        document.getElementById('password').value = '';
        
        // Foca no campo de usuário
        document.getElementById('username').focus();
    }
});

// Opcional: Fechar o alerta quando clicar no X
document.querySelector('.btn-close')?.addEventListener('click', function() {
    document.getElementById('loginAlert').style.display = 'none';
    document.getElementById('loginAlert').classList.remove('show');
});
