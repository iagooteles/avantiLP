document.addEventListener("DOMContentLoaded", () => {
    fetch('/public/html/newsletter.html')
    .then(response => response.text())
    .then(data => {      
        const placeholder = document.querySelector('.newsletter-placeholder');
        if (placeholder) {
            placeholder.innerHTML = data;
        }
    })
    .catch(error => {
        console.error('Erro ao carregar o conteúdo:', error);
    });
});
