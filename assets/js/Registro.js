function submitForm() {
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('ConfimarPassword').value;

  // Verifica se as senhas coincidem
  if (password !== confirmPassword) {
    alert('As senhas não coincidem');
    return;
  }
  // Envia dados para o back-end (usando o endpoint de registro do ReqRes)
  fetch('https://reqres.in/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then(response => response.json())
    .then(data => {
      // Manipula a resposta do back-end
      if (data.token) {
        // Registro bem-sucedido
        alert('Registro bem-sucedido. Faça login agora.');
        window.location.href = '../../index.html';
      } else {
        // Manipula erros de registro
        alert('Erro no registro. Verifique suas informações.');
      }
    })
    .catch(error => console.error('Erro:', error));
}