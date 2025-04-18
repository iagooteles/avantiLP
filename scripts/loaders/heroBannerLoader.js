document.addEventListener('heroBannerCarousel', loadHeroBannerContent);

/**
 * Carrega dinamicamente o conteúdo do hero banner a partir de um arquivo JSON externo
 * e insere esse conteúdo em todos os elementos que possuam a classe 'hero-banner-content'.
 *
 * O JSON deve conter as seguintes propriedades:
 * - title: título principal do banner (ex: "SUPER")
 * - highlight: destaque do título (ex: "SALE")
 * - description: descrição do banner (ex: "Selected items up to")
 * - discount: valor de desconto (ex: "50% OFF")
 *
 * Em caso de erro ao buscar ou processar o JSON, uma mensagem será exibida no console.
 *
 * Este script deve ser executado após o carregamento completo do DOM.
 */
async function loadHeroBannerContent() {
    try {
      const response = await fetch('/public/data/heroBannerData.json');
      const data = await response.json();
  
      const bannerHTML = `
        <div>
          <h2>${data.title}<span class="super-sale-hero-banner">${data.highlight}</span></h2>
          <p class="selected-itens-hero-carousel d-block d-md-none">${data.descriptionMobile}</p>
          <p class="selected-itens-hero-carousel d-none d-md-block">${data.descriptionDesktop}</p>
          <p class="hero-banner-discount-amount">${data.discount}</p>
        </div>
      `;
  
      const heroContainers = document.querySelectorAll('.hero-banner-content');
      heroContainers.forEach(container => {
        container.innerHTML = bannerHTML;
      });
    } catch (error) {
      console.error('Erro ao carregar conteúdo do banner:', error);
    }
}

  