// Menu mobile responsivo
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn");
  const navMenu = document.querySelector(".menu");

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 700) navMenu.classList.remove("open");
    });
  }

  // Animação leve ao exibir a caixa de login (opcional)
  const loginBox = document.querySelector('.login-box');
  if (loginBox) {
    loginBox.style.opacity = 0;
    loginBox.style.transform = 'translateY(24px)';
    setTimeout(() => {
      loginBox.style.transition = 'opacity 0.7s, transform 0.7s';
      loginBox.style.opacity = 1;
      loginBox.style.transform = 'translateY(0)';
    }, 180);
  }
});

// Validação e simulação de login
document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();

  const senhaValida = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (email === "") {
    alert("Por favor, preencha o campo de email.");
    return;
  }

  if (senha === "") {
    alert("Por favor, preencha o campo de senha.");
    return;
  }

  if (!senhaValida.test(senha)) {
    alert("A senha deve conter no mínimo 8 caracteres, com letras e números.");
    return;
  }

  // Simulando sucesso de login
  alert("Login realizado com sucesso!");
  // Redireciona (ajuste conforme a necessidade)
  window.location.href = "dashboard.html";
});