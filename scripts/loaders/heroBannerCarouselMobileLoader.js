document.addEventListener("DOMContentLoaded", async () => {
    await fetch('/public/html/heroBannerCarouselMobile.html')
    .then(response => response.text())
    .then(data => {      
        const placeholder = document.querySelector('.hero-banner-carousel-mobile-placeholder');
        if (placeholder) {
            placeholder.innerHTML = data;
            document.dispatchEvent(new Event("heroBannerCarousel"));
        }
    })
    .catch(error => {
        console.error('Erro ao carregar o conteúdo:', error);
    });
});
