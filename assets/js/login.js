function submitForm() {
  const email = document.getElementById('userEmail').value;
  const senha = document.getElementById('password').value;

  // Enviar dados para o back-end
  fetch('http://172.21.16.1:3341/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, senha }),
  })
    .then(response => response.json())
    .then(data => {
      // Manipular a resposta do back-end
      if (data.token) {
        // Armazena o token em localStorage
        console.log(data.token)
        localStorage.setItem('token', data.token);

        // Redireciona para pagina após o login bem-sucedido
        alert('Login bem-sucedido. Redirecionando...');
      } else {
        alert('Credenciais inválidas');
      }
    })
    .catch(error => console.error('Erro:', error));
}