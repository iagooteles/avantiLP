document.addEventListener("carouselLoaded", async function () {
  const carousels = document.querySelectorAll(".card-carousel");

  try {
    const cards = await fetchCarouselData("/public/data/cardInfoCarousel.json");

    carousels.forEach((carousel) => renderCarousel(carousel, cards));

    window.addEventListener("resize", () => {
      carousels.forEach((carousel) => renderCarousel(carousel, cards));
    });
  } catch (error) {
    console.error("Erro ao carregar os cards:", error);
  }
});

/**
 * Busca os dados do JSON com as informações dos cards.
 * @param {string} url - Caminho do arquivo JSON.
 * @returns {Promise<Object[]>} - Array de objetos com dados dos cards.
 */
async function fetchCarouselData(url) {
  const response = await fetch(url);
  return await response.json();
}

/**
 * Renderiza um carousel com os dados dos cards.
 * @param {HTMLElement} carousel - Elemento do carousel.
 * @param {Object[]} cards - Lista de objetos com informações dos cards.
 */
function renderCarousel(carousel, cards) {
  const carouselInner = carousel.querySelector(".carousel-inner");
  const indicatorsContainer = carousel.querySelector(".carousel-indicators");
  const prevButton = carousel.querySelector(".carousel-control-prev");
  const nextButton = carousel.querySelector(".carousel-control-next");

  carouselInner.innerHTML = "";
  indicatorsContainer.innerHTML = "";

  const visibleCards = getVisibleCardsPerSlide();
  
  const totalSlides = 3;

  for (let i = 0; i < totalSlides; i++) {
    const slide = createSlide(cards, i, visibleCards);
    carouselInner.appendChild(slide);

    const indicator = createIndicator(carousel.id, i);
    indicatorsContainer.appendChild(indicator);
  }

  setNavigationTargets(carousel.id, prevButton, nextButton);

  new bootstrap.Carousel(carousel);
}

/**
 * Retorna o número de cards visíveis por slide com base na largura da tela.
 * @returns {number}
 */
function getVisibleCardsPerSlide() {
  const width = window.innerWidth;
  
  // if (width < 768) {
  if (width < 768) {
    return 2;
  } else if (width >= 768 && width < 1024) {
    return 3;
  } else if (width >= 1024 && width < 1400) {
    return 4;
  } else {
    return 5;
  }
}

/**
 * Cria um slide para o carousel com os cards.
 * @param {Object[]} cards - Lista de cards.
 * @param {number} slideIndex - Índice do slide.
 * @param {number} visibleCards - Quantidade de cards por slide.
 * @returns {HTMLElement} - Elemento do slide.
 */
function createSlide(cards, slideIndex, visibleCards) {
  const slide = document.createElement("div");
  slide.classList.add("carousel-item");
  if (slideIndex === 0) slide.classList.add("active");

  const slideContent = document.createElement("div");
  slideContent.classList.add("d-flex", "justify-content-center");

  const startIndex = slideIndex * visibleCards;
  const endIndex = startIndex + visibleCards;
  const cardsToShow = cards.slice(startIndex, endIndex);

  cardsToShow.forEach((card) => {
    const cardElement = createCardElement(card);
    slideContent.appendChild(cardElement);
  });

  slide.appendChild(slideContent);
  return slide;
}

/**
 * Cria um botão de indicador de slide para o carousel.
 * @param {string} carouselId - ID do carousel.
 * @param {number} index - Índice do slide.
 * @returns {HTMLElement} - Botão do indicador.
 */
function createIndicator(carouselId, index) {
  const indicator = document.createElement("button");
  indicator.type = "button";
  indicator.setAttribute("data-bs-target", `#${carouselId}`);
  indicator.setAttribute("data-bs-slide-to", index.toString());
  if (index === 0) indicator.classList.add("active");
  return indicator;
}

/**
 * Define os atributos nos botões de navegação do carousel.
 * @param {string} carouselId - ID do carousel.
 * @param {HTMLElement} prevButton - Botão de slide anterior.
 * @param {HTMLElement} nextButton - Botão de próximo slide.
 */
function setNavigationTargets(carouselId, prevButton, nextButton) {
  prevButton.setAttribute("data-bs-target", `#${carouselId}`);
  nextButton.setAttribute("data-bs-target", `#${carouselId}`);
}

/**
 * Cria o HTML de um card individual.
 * @param {Object} card - Objeto com informações do card.
 * @returns {HTMLElement} - Elemento HTML do card.
 */
function createCardElement(card) {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");

  cardElement.innerHTML = `
    <div class="card-body">
      <div class="card-image-container">
        <img src="${card.image}" alt="modelo" />
        <span class="new-item-card-tag">${card.tag}</span>
      </div>
      <h3>${card.title}</h3>
      <div class="card-prices-container">
        <div class="off-discount-container">
          <div class="card-prices">
            <p class="default-price">${card.defaultPrice}</p>
            <p class="discount-price">${card.discountPrice}</p>
          </div>
          <span class="off-discount-amount">${card.discountPercent}</span>
        </div>
      </div>
      <p class="card-bottom-text">Ou em até <strong>${card.installments}</strong></p>
      <div class="d-flex justify-content-center">
        <button type="button" class="btn btn-primary">Comprar</button>
      </div>
    </div>
  `;

  return cardElement;
}
