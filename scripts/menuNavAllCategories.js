let megaMenu;
let hideTimeout = 300;
let categoriasContainer;
let navbarImgPath = "../html/navbarImg.html";

document.addEventListener("navLoaded", function () {
  megaMenu = document.querySelector(".mega-menu");
  dropdownTrigger = document.querySelector("#navbarDropdownMenuLink");
  const navDepartamentos = document.querySelector("#departamentos");
  const allCategoriesTrigger = document.querySelector(".all-categories");

  if (allCategoriesTrigger) {
    allCategoriesTrigger.addEventListener("mouseenter", () => {
      showCategorias();
    });
  }

  // TODO: Deixar o menu sempre visível durante o desenvolvimento, remover depois //
  // if (megaMenu) {
  //   megaMenu.classList.add("show");
  // }

  dropdownTrigger.addEventListener("mouseenter", showMenu);
  megaMenu.addEventListener("mouseenter", showMenu);

  dropdownTrigger.addEventListener("mouseleave", hideMenu);
  megaMenu.addEventListener("mouseleave", hideMenu);

  fetch("/public/data/categories.json")
    .then((response) => response.json())
    .then((data) => {
      const categorias = data.categorias;
      const dropdownMenu = document.querySelector(".mega-menu");
      const megaMenuContent = dropdownMenu.querySelector(".mega-menu-content");
      categoriasContainer = document.createElement("div");
      const submenuContainer = document.createElement("div");

      submenuContainer.classList.add("mega-menu-submenu-container");

      categoriasContainer.classList.add("mega-menu-categories");

      categorias.forEach((categoria, index) => {
        categoriasContainer.appendChild(createCategoryLink(categoria, index));
        submenuContainer.appendChild(createSubMenu(categoria, index));
      });

      megaMenuContent.innerHTML = "";
      megaMenuContent.appendChild(categoriasContainer);
      megaMenuContent.appendChild(submenuContainer);

      createDropdownImgPlaceholder(megaMenuContent);

      hoverListener(categoriasContainer, submenuContainer);
      document.dispatchEvent(new Event("menuNavAllCategoriesLoaded"));
    })
    .catch((error) => {
      console.error("Erro ao carregar categorias:", error);
    });
});

/**
 * Exibe o mega menu imediatamente, cancelando qualquer timeout de ocultação.
 *
 * Esta função adiciona a classe "show" ao mega menu e ao botão de gatilho (dropdownTrigger),
 * além de atualizar o atributo aria-expanded para "true".
 */
function showMenu() {
  clearTimeout(hideTimeout);
  megaMenu.classList.add("show");
  dropdownTrigger.classList.add("show");
  dropdownTrigger.setAttribute("aria-expanded", "true");
}

/**
 * Oculta o mega menu após um pequeno atraso (300ms), para permitir transições suaves ou evitar que o menu suma imediatamente após o mouse sair do botão.
 *
 * Esta função é chamada no evento de saída do mouse (mouseleave) e utiliza setTimeout
 * para adicionar um pequeno atraso antes de remover o menu da tela, evitando desaparecimento brusco.
 */
function hideMenu() {
  hideTimeout = setTimeout(() => {
    megaMenu.classList.remove("show");
    dropdownTrigger.classList.remove("show");
    dropdownTrigger.setAttribute("aria-expanded", "false");
  }, 50);
}

/**
 * Cria e retorna o elemento de link da categoria
 */
function createCategoryLink(categoria, index) {
  const link = document.createElement("a");
  link.className = `dropdown-item${index === 0 ? " active-category" : ""}`;
  link.href = "#";
  link.dataset.submenuId = categoria.id;
  link.innerHTML = `
  <div class="link-container">
    <span>${categoria.nome}</span>
    <span class="arrow">\u276F</span>
  </div>
  `;
  return link;
}

/**
 * Cria e retorna o submenu da categoria
 */
function createSubMenu(categoria, index) {
  const submenu = document.createElement("div");
  submenu.className = `mega-menu-submenu d-flex${index !== 0 ? " d-none" : ""}`;
  submenu.id = `submenu-${categoria.id}`;

  categoria.subcategorias.forEach((coluna) => {
    const colunaDiv = document.createElement("div");

    coluna.forEach((item) => {
      const itemLink = document.createElement("a");
      itemLink.className = "dropdown-item";
      itemLink.href = "#";
      itemLink.textContent = item;
      colunaDiv.appendChild(itemLink);
    });

    submenu.appendChild(colunaDiv);
  });

  return submenu;
}

/**
 * Cria um container de imagem no menu para ser posteriormente preenchido
 * por um script de injeção externa como navbarImgLoader.js.
 *
 * @param {HTMLElement} container - O elemento onde o placeholder será inserido
 */
function createDropdownImgPlaceholder(container) {
  const imgPlaceholder = document.createElement("div");
  imgPlaceholder.classList.add("dropdown-img-placeholder");
  container.appendChild(imgPlaceholder);
}

/**
 * Adiciona os listeners de hover nos links das categorias
 */
function hoverListener(categoriasContainer, submenuContainer) {
  categoriasContainer.querySelectorAll("a").forEach((link) => {
    link.addEventListener("mouseenter", () => {
      categoriasContainer
        .querySelectorAll("a")
        .forEach((el) => el.classList.remove("active-category"));

      link.classList.add('active-category');

      submenuContainer
        .querySelectorAll(".mega-menu-submenu")
        .forEach((sub) => sub.classList.add("d-none"));

      const submenuId = link.dataset.submenuId;
      const target = submenuContainer.querySelector(`#submenu-${submenuId}`);
      if (target) target.classList.remove("d-none");
    });
  });
}

/**
 * Exibe o container de categorias no mega menu.
 *
 * Remove a classe "d-none" do elemento categoriasContainer,
 * tornando visível a primeira coluna com as categorias principais.
 */
function showCategorias() {
  categoriasContainer?.classList.remove("d-none");
}

/**
 * Oculta o container de categorias no mega menu.
 *
 * Adiciona a classe "d-none" ao elemento categoriasContainer,
 * escondendo a primeira coluna com as categorias principais.
 */
function hideCategorias() {  
  categoriasContainer?.classList.add("d-none");
}
