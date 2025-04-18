document.addEventListener("DOMContentLoaded", async () => {
    await fetch('/public/html/contato.html')
    .then(response => response.text())
    .then(data => {      
        const placeholder = document.querySelector('.contato-placeholder');
        if (placeholder) {
            placeholder.innerHTML = data;
        }
    })
    .catch(error => {
        console.error('Erro ao carregar o conteúdo:', error);
    });
});
