document.addEventListener("DOMContentLoaded", () => {
  const containers = document.querySelectorAll("[class^='text-image-']");
  if (containers.length === 0) return;

  containers.forEach(container => {
    const index = getCardIndexFromContainer(container);
    if (!index) return;

    const html = getCardHTMLByIndex(index);
    if (html) container.innerHTML = html;
  });
});
  
/**
 * Retorna o índice do card com base na classe CSS do container.
 * @param {HTMLElement} container - O container com a classe do tipo text-image-x.
 * @returns {string|null} - Índice como string (ex: "1", "2") ou null.
 */
function getCardIndexFromContainer(container) {
  const classList = Array.from(container.classList);
  const selectedClass = classList.find(cls => cls.startsWith("text-image-"));
  return selectedClass?.split("-")[2] || null;
}
  
/**
 * Retorna o HTML do card com base no índice.
 * @param {string} index - Índice do card.
 * @returns {string|null} - HTML como string ou null se índice não for reconhecido.
 */
function getCardHTMLByIndex(index) {
  switch (index) {
    case "1":
      return getCardOneHTML();
    case "2":
      return getCardTwoHTML();
    default:
      return null;
  }
}
  
/**
 * Retorna o HTML do card 1 (imagem à esquerda, texto à direita).
 * @returns {string}
 */
function getCardOneHTML() {
    return `
      <section class="image-and-text-container no-padding">
        <figure>
          <img src="./assets/images/avanti/avanti-mug-2.png" alt="Caneca Avanti" title="Caneca Avanti" class="image-and-text-img first-mug-avanti-image">
        </figure>
        <div class="inner-text-container with-padding">
          <h3 class="text-start">LOREM IPSUM</h3>
            <div class="content">
                <p class="mobile-text">
                    Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                </p>
                <p class="mobile-text">
                    Cras dignissim est et pellentesque tincidunt. Praesent bibendum quis velit a aliquam. Ut vestibulum turpis eget mi iaculis ullamcorper. Curabitur nec metus sed tortor sollicitudin porta nec eu enim. Ut fermentum scelerisque tortor mollis volutpat. Mauris iaculis magna nisl, vel porttitor augue placerat et.
                </p>
                
                <p class="desktop-text">
                    Duis consectetur metus nec lacus auctor dignissim. Mauris vitae finibus dui. Mauris laoreet lacus ut eleifend viverra. Cras efficitur volutpat dui, in lobortis metus lacinia sit amet. Sed lacinia pharetra magna, vel pulvinar ligula hendrerit a. Maecenas fringilla porttitor tortor eget lacinia. Donec sollicitudin euismod orci, auctor fringilla magna consequat interdum. Fusce sagittis elit a libero commodo egestas efficitur id augue.
                </p>
                <p class="desktop-text">
                    Duis consectetur metus nec lacus auctor dignissim. Mauris vitae finibus dui. Mauris laoreet lacus ut eleifend viverra. Cras efficitur volutpat dui, in lobortis metus lacinia sit amet. Sed lacinia pharetra magna, vel pulvinar ligula hendrerit a. Maecenas fringilla porttitor tortor eget lacinia. Donec sollicitudin euismod orci, auctor fringilla magna consequat interdum. Fusce sagittis elit a libero commodo egestas efficitur id augue.
                </p>
            </div>    
        </div>
      </section>
    `;
}
  
/**
 * Retorna o HTML do card 2, que exibe uma imagem à direita e blocos de texto com ícones à esquerda.
 * Cada bloco possui um ícone e textos diferentes para mobile e desktop.
 *
 * @returns {string}
 */
function getCardTwoHTML() {
    const getMapPinTextBlock = () => `
      <div class="map-pin-text-container d-flex">
        <img src="./assets/images/utils/map-pin-icon.png" alt="Map pin" title="Map pin" style="width: 60px; height: 60px;">
        <p class="mobile-text">
          Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
        </p>
        <p class="desktop-text">
          Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
        </p>
      </div>
    `;
  
    return `
      <section class="image-text-outer-container bg-gray">
        <div class="image-and-text-container reverse">
          <figure>
            <img src="./assets/images/avanti/avanti-mug.png" alt="Caneca Avanti" title="Caneca Avanti">
          </figure>
          <div class="inner-text-container inner-text-container-second-card">
            <h3 class="text-center">LOREM IPSUM</h3>
            <div class="content second-card-content">
              ${Array.from({ length: 3 }, () => getMapPinTextBlock()).join("")}
            </div>
          </div>
        </div>
      </section>
    `;
}
