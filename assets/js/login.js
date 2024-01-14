function submitForm() {
  const userEmail = document.getElementById('userEmail').value;
  const password = document.getElementById('password').value;

  // Enviar dados para o back-end
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userEmail, password }),
  })
    .then(response => response.json())
    .then(data => {
      // Manipular a resposta do back-end
      if (data.token) {
        // Armazena o token em localStorage
        localStorage.setItem('token', data.token);

        // Redireciona para pagina após o login bem-sucedido
        console.log('Login bem-sucedido. Redirecionando...');
      } else {
        alert('Credenciais inválidas');
      }
    })
    .catch(error => console.error('Erro:', error));
}