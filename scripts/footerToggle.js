document.addEventListener("footerLoaded", function () {
  const toggles = document.querySelectorAll(".footer-toggle");

  toggles.forEach(button => {
    const targetId = button.getAttribute("data-bs-target");
    const targetEl = document.querySelector(targetId);

    if (!targetEl) return;

    targetEl.addEventListener("hidden.bs.collapse", () => {
      rotateArrow(button, false);
      button.classList.add("collapsed");
    });

    targetEl.addEventListener("shown.bs.collapse", () => {
      rotateArrow(button, true);
      closeAllDropdownsExcept(targetId);
      button.classList.remove("collapsed");
    });
  });
});

/**
 * Fecha todos os dropdowns, menos o que foi clicado
 */
function closeAllDropdownsExcept(currentId) {
  document.querySelectorAll(".footer-toggle").forEach(button => {
    const targetId = button.getAttribute("data-bs-target");
    if (targetId !== currentId) {
      const targetEl = document.querySelector(targetId);
      const bsCollapse = bootstrap.Collapse.getInstance(targetEl);
      if (bsCollapse) {
        bsCollapse.hide();
      }
    }
  });
}

/**
 * Gira a seta do botão dependendo se está aberto ou fechado.
 */
function rotateArrow(button, shouldRotate) {
  const arrow = button.querySelector(".arrow");
  
  if (arrow) {
    arrow.style.transition = "transform 0.3s ease";
    arrow.style.transform = shouldRotate ? "rotate(180deg)" : "rotate(0deg)";
  }
}
