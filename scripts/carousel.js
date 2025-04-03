document.addEventListener("DOMContentLoaded", async function () {
    const carouselInner = document.getElementById("carousel-inner");

    try {
        const response = await fetch("./../data/card-info.json");
        const cards = await response.json();

        function renderCarousel() {
            carouselInner.innerHTML = "";

            const visibleCards = window.innerWidth < 768 ? 2 : 5;
            const totalSlides = Math.min(Math.ceil(cards.length / visibleCards), 3);

            for (let i = 0; i < totalSlides; i++) {
                const slide = document.createElement("div");
                slide.classList.add("carousel-item");
                if (i === 0) slide.classList.add("active");

                const slideContent = document.createElement("div");
                slideContent.classList.add("d-flex", "justify-content-center");

                const startIndex = i * visibleCards;
                const endIndex = startIndex + visibleCards;
                const cardsToShow = cards.slice(startIndex, endIndex);

                cardsToShow.forEach((card) => {
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

                    slideContent.appendChild(cardElement);
                });

                slide.appendChild(slideContent);
                carouselInner.appendChild(slide);
            }
        }

        renderCarousel();
        window.addEventListener("resize", renderCarousel);
    } catch (error) {
        console.error("Erro ao carregar os cards:", error);
    }
});

