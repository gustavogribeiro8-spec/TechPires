document.getElementById("formCadastro").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value;
  const confirmarSenha = document.getElementById("confirmarSenha").value;
  const nome = document.getElementById("nome").value.trim();
  const sobrenome = document.getElementById("sobrenome").value.trim();
  const cpf = document.getElementById("cpf").value.trim();
  const sexo = document.getElementById("sexo").value;
  const checkPrivacidade = document.querySelectorAll("input[type='checkbox']")[0].checked;
  const checkTermos = document.querySelectorAll("input[type='checkbox']")[1].checked;

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regexNome = /^[A-Za-zÀ-ÿ\s]{2,}$/;

  if (!regexEmail.test(email)) {
    alert("E-mail inválido!");
    return;
  }

  if (senha.length < 6) {
    alert("A senha deve ter pelo menos 6 caracteres.");
    return;
  }

  if (senha !== confirmarSenha) {
    alert("As senhas não coincidem.");
    return;
  }

  if (!regexNome.test(nome)) {
    alert("Nome inválido. Use apenas letras e no mínimo 2 caracteres.");
    return;
  }

  if (!regexNome.test(sobrenome)) {
    alert("Sobrenome inválido. Use apenas letras e no mínimo 2 caracteres.");
    return;
  }

  if (!validarCPF(cpf)) {
    alert("CPF inválido.");
    return;
  }

  if (sexo === "") {
    alert("Selecione o sexo.");
    return;
  }

  if (!checkPrivacidade || !checkTermos) {
    alert("Você deve aceitar a política de privacidade e os termos.");
    return;
  }

  alert("Conta criada com sucesso!");
});

// Validação de CPF
function validarCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g, '');
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

  let soma = 0;
  for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
  let resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.charAt(9))) return false;

  soma = 0;
  for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  return resto === parseInt(cpf.charAt(10));

  document.getElementById("cpf").addEventListener("input", function (e) {
  let value = e.target.value.replace(/\D/g, '');
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  e.target.value = value;
});

}
