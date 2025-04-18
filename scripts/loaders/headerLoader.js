document.addEventListener("DOMContentLoaded", async () => {
    await fetch('/public/html/header.html')
    .then(response => response.text())
    .then(data => {      
        const placeholder = document.querySelector('.header-placeholder');
        if (placeholder) {
            placeholder.innerHTML = data;
            document.dispatchEvent(new Event("headerLoaded"));
        }
    })
    .catch(error => {
        console.error('Erro ao carregar o conteúdo:', error);
    });
});
