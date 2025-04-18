document.addEventListener("DOMContentLoaded", async () => {
    await fetch('/public/html/footer.html')
    .then(response => response.text())
    .then(data => {      
        const placeholder = document.querySelector('.footer-placeholder');
        if (placeholder) {
            placeholder.innerHTML = data;
            document.dispatchEvent(new Event("footerLoaded"));
        }
    })
    .catch(error => {
        console.error('Erro ao carregar o conteúdo:', error);
    });
});
