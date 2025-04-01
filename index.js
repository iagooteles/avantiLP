document.addEventListener("DOMContentLoaded", function () {
  const categories = document.querySelectorAll(".mega-menu-categories a");
  const submenus = document.querySelectorAll(".mega-menu-submenu");
  const menu = document.querySelector(".mega-menu");

  const activeSubmenu = menu.getAttribute("data-submenu-active");
  const activeCategory = document.querySelector(
    `.mega-menu-categories a[data-submenu-id="${activeSubmenu}"]`
  );

  if (activeCategory) {
    activeCategory.classList.add("active");
  }

  document
    .getElementById(`submenu-${activeSubmenu}`)
    .classList.remove("d-none");

  categories.forEach((category) => {
    category.addEventListener("mouseenter", function () {
      const submenuId = this.getAttribute("data-submenu-id");

      // Remover a classe ativa de todos os links e adicionar no link selecionado
      categories.forEach((cat) => cat.classList.remove("active"));
      this.classList.add("active");

      submenus.forEach((submenu) => submenu.classList.add("d-none"));
      document
        .getElementById(`submenu-${submenuId}`)
        .classList.remove("d-none");
    });
  });
});
