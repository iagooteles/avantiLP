document.addEventListener("DOMContentLoaded", async () => {
    await fetch("/public/html/supportedBy.html")
    .then((response) => response.text())
    .then((data) => {        
        const placeholder = document.querySelector(".supported-by-placeholder");
        if (placeholder) {
            placeholder.innerHTML = data;
        }
    })
    .catch((error) => {
        console.error("Erro ao carregar o componente Supported by:", error);
    });
});
