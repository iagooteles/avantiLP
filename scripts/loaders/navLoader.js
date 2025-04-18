document.addEventListener("DOMContentLoaded", async () => {
    await fetch('/public/html/nav.html')
    .then(response => response.text())
    .then(data => {      
        const placeholder = document.querySelector('.nav-placeholder');
        if (placeholder) {
            placeholder.innerHTML = data;
            document.dispatchEvent(new Event("navLoaded"));
        }
    })
    .catch(error => {
        console.error('Erro ao carregar o conteúdo:', error);
    });
});
