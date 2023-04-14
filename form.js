function validar() {
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    // Verifica se o usuário tem pelo menos 8 caracteres
    if (usuario.length < 8) {
      alert("O usuário deve ter pelo menos 8 caracteres.");
    } 
    // Verifica se a senha tem pelo menos 8 caracteres
    else if (senha.length < 8) {
      alert("A senha deve ter pelo menos 8 caracteres.");
    } 
    else {
      alert("Login bem-sucedido!");
    }
  }