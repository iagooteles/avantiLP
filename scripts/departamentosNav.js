let dropdownDepartamento1;
let triggerDepartamento1;
let hideTimeoutDep1;

document.addEventListener("DOMContentLoaded", initDepartamentos);

/**
 * Função principal de inicialização.
 * Carrega os dados dos departamentos e renderiza os primeiros 8 departamentos na interface.
 */
async function initDepartamentos() {
  try {
    const data = await fetchDepartamentosData("/public/data/categories.json");

    const navbar = document.getElementById("navbar-departamentos");
    const dropdownContainer = document.getElementById("dropdowns-departamentos");

    const categoriasLimitadas = data.categorias.slice(0, 8);

    categoriasLimitadas.forEach((categoria) => {
      renderNavbarItem(categoria, navbar);
      renderDropdown(categoria, dropdownContainer);
      setupHoverBehavior(categoria.id);
    });

  } catch (error) {
    console.error("Erro ao carregar os departamentos:", error);
  }
}

/**
 * Busca os dados JSON dos departamentos.
 * @param {string} url - Caminho para o JSON de categorias.
 * @returns {Promise<Object>} Dados dos departamentos.
 */
async function fetchDepartamentosData(url) {
  const response = await fetch(url);
  return await response.json();
}

/**
 * Cria e insere um item da navbar com base em um departamento.
 * @param {Object} categoria - Dados do departamento.
 * @param {HTMLElement} navbar - Container da navbar.
 */
function renderNavbarItem(categoria, navbar) {
  const li = document.createElement("li");
  li.className = "departamento-custom";
  li.id = `departamento${categoria.id}`;
  li.innerHTML = `
    <a href="#" class="departamento-navbar dropdown-toggle">
      <span class="all-categories-title">${categoria.nome}</span>
    </a>
  `;
  navbar.appendChild(li);
}

/**
 * Cria e insere o dropdown correspondente a um departamento.
 * @param {Object} categoria - Dados do departamento.
 * @param {HTMLElement} container - Container dos dropdowns.
 */
function renderDropdown(categoria, container) {
  const dropdown = document.createElement("div");
  dropdown.className = "dropdown-custom";
  dropdown.id = `dropdown-departamento${categoria.id}`;

  dropdown.innerHTML = `
    <div class="d-flex justify-content-between">
      <div class="subcategorias-container d-flex">
        <div class="subcategorias-inner-container">
          <h5 class="subcategorias-title">${categoria.nome}</h5>
          <div class="list-container d-flex">
            ${categoria.subcategorias
              .map(
                (coluna) => `
                <ul>
                  ${coluna.map((item) => `<li><a href="#">${item}</a></li>`).join("")}
                </ul>`
              )
              .join("")}
          </div>
        </div>
      </div>
      <div class="dropdown-img-placeholder"></div>
    </div>
  `;
  container.appendChild(dropdown);
}

/**
 * Configura os eventos de hover para mostrar/ocultar dropdowns de departamentos.
 * @param {number} id - ID do departamento.
 */
function setupHoverBehavior(id) {
  const li = document.getElementById(`departamento${id}`);
  const dropdown = document.getElementById(`dropdown-departamento${id}`);
  let timeout;

  if (!li || !dropdown) return;

  li.addEventListener("mouseenter", () => {
    clearTimeout(timeout);
    li.classList.add("show");
    dropdown.classList.add("show");
    li.setAttribute("aria-expanded", "true");
  });

  li.addEventListener("mouseleave", () => {
    timeout = setTimeout(() => {
      li.classList.remove("show");
      dropdown.classList.remove("show");
      li.setAttribute("aria-expanded", "false");
    }, 100);
  });

  dropdown.addEventListener("mouseenter", () => {
    clearTimeout(timeout);
    li.classList.add("show");
    dropdown.classList.add("show");
  });

  dropdown.addEventListener("mouseleave", () => {
    timeout = setTimeout(() => {
      li.classList.remove("show");
      dropdown.classList.remove("show");
      li.setAttribute("aria-expanded", "false");
    }, 100);
  });
}
