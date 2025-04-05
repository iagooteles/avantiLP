let modalAberto = false;

document.addEventListener("DOMContentLoaded", function () {
    setupSearchButtonListeners();
    setupInputEnterListeners();
});

/**
 * Cria e exibe o modal com a mensagem de busca.
 * Desativa o input enquanto o modal está aberto.
 * 
 * @param {string} value - Valor buscado no input.
 * @param {HTMLElement} input - Elemento input que originou a busca.
 */
function openModal(value, input) {
  if (modalAberto) return;

  modalAberto = true;
  input.disabled = true;

  const modalOverlay = createModalOverlay();
  const modalBox = createModalBox(value, input, modalOverlay);

  modalOverlay.appendChild(modalBox);
  document.body.appendChild(modalOverlay);

  modalOverlay.addEventListener("click", function (e) {
    if (e.target === modalOverlay) closeModal(modalOverlay, input);
  });
}

/**
 * Cria o elemento do overlay do modal.
 * @returns {HTMLElement}
 */
function createModalOverlay() {
  const overlay = document.createElement("div");
  overlay.classList.add("modal-overlay");
  return overlay;
}

/**
 * Cria a estrutura do modal com botão de fechar e mensagem.
 * @param {string} value 
 * @param {HTMLElement} input 
 * @param {HTMLElement} modalOverlay 
 * @returns {HTMLElement}
 */
function createModalBox(value, input, modalOverlay) {
  const box = document.createElement("div");
  box.classList.add("modal-box");

  const closeBtn = document.createElement("span");
  closeBtn.classList.add("modal-close");
  closeBtn.innerHTML = "&times;";
  closeBtn.addEventListener("click", () => closeModal(modalOverlay, input));

  const content = document.createElement("p");
  content.textContent = `Você buscou por: "${value}"`;

  box.appendChild(closeBtn);
  box.appendChild(content);

  return box;
}

/**
 * Fecha o modal e reativa o input.
 * @param {HTMLElement} modalOverlay 
 * @param {HTMLElement} input 
 */
function closeModal(modalOverlay, input) {
  modalOverlay.remove();
  input.disabled = false;
  modalAberto = false;
}

/**
 * Lida com o valor digitado no input e inicia a abertura do modal.
 * @param {HTMLElement} input 
 */
function handleSearch(input) {
  const value = input.value.trim();
  if (value) {
    openModal(value, input);
  }
}

/**
 * Adiciona eventos de clique nos botões de busca.
 */
function setupSearchButtonListeners() {
  const searchButtons = document.querySelectorAll(".search-btn");
  searchButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const input = btn.closest(".input-container").querySelector("input");
      if (input) handleSearch(input);
    });
  });
}

/**
 * Adiciona eventos de teclado para capturar a tecla "Enter".
 */
function setupInputEnterListeners() {
  const searchInputs = document.querySelectorAll(".search-input, .search-input-mobile");
  searchInputs.forEach((input) => {
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleSearch(input);
      }
    });
  });
}
