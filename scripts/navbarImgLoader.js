document.addEventListener("DOMContentLoaded", () => {
    fetch('../html/navbarImg.html')
      .then(response => response.text())
      .then(data => {
        const placeholders = document.querySelectorAll('.dropdown-img-placeholder');
        placeholders.forEach(placeholder => {
          placeholder.innerHTML = data;
        });
      })
      .catch(error => {
        console.error('Erro ao carregar o conteúdo:', error);
      });
  });
  