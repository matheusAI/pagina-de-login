function submitForm() {
  const nome = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('password').value;
  const confirmsenha = document.getElementById('ConfimarPassword').value;

  // Verifica se as senhas coincidem
  if (senha !== confirmsenha) {
    alert('As senhas não coincidem');
    return;
  }
  // Envia dados para o back-end (usando o endpoint de registro do ReqRes)
  fetch('http://172.21.16.1:3341/creteUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nome, email, senha }),
  })
    .then(response => response.json())
    /*.then(data => {
      // Manipula a resposta do back-end
      if (data.token) {
        // Registro bem-sucedido
        alert('Registro bem-sucedido. Faça login agora.');
        window.location.href = '../../index.html';
      } else {
        // Manipula erros de registro
        alert('Erro no registro. Verifique suas informações.');
      }
    })*/
    .catch(error => console.error('Erro:', error));
}
