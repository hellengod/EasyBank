document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Limpa mensagens de erro
    document.getElementById('emailError').innerText = '';
    document.getElementById('passwordError').innerText = '';

    // Validação de e-mail
    const emailInput = document.getElementById('email');
    if (emailInput.value.trim() === '') {
        document.getElementById('emailError').innerText = 'Por favor, insira um e-mail válido.';
        return;
    }

    // Validação de senha
    const passwordInput = document.getElementById('password');
    if (passwordInput.value.trim() === '') {
        document.getElementById('passwordError').innerText = 'Por favor, insira uma senha.';
        return;
    }

    // Se chegou até aqui, o formulário está válido
    alert('Login realizado com sucesso!');
});
