let dropdownDepartamento1;
let triggerDepartamento1;
let hideTimeoutDep1;

document.addEventListener("DOMContentLoaded", function () {
  dropdownDepartamento1 = document.querySelector("#dropdown-departamento1");
  triggerDepartamento1 = document.querySelector("#departamento1");

  if (!dropdownDepartamento1 || !triggerDepartamento1) return;

  triggerDepartamento1.addEventListener("mouseenter", showDropdownDep1);
  dropdownDepartamento1.addEventListener("mouseenter", showDropdownDep1);

  triggerDepartamento1.addEventListener("mouseleave", hideDropdownDep1);
  dropdownDepartamento1.addEventListener("mouseleave", hideDropdownDep1);
});

/**
 * Exibe o dropdown do departamento 1.
 *
 * Esta função cancela qualquer timeout pendente de ocultar o dropdown e 
 * adiciona a classe "show" ao dropdown e ao trigger, além de atualizar o atributo
 * "aria-expanded" para "true", indicando que o dropdown está visível.
 */
function showDropdownDep1() {
  clearTimeout(hideTimeoutDep1);
  dropdownDepartamento1.classList.add("show");
  triggerDepartamento1.classList.add("show");
  triggerDepartamento1.setAttribute("aria-expanded", "true");
}

/**
 * Oculta o dropdown do departamento 1 após um breve atraso.
 *
 * Esta função define um timeout que, após 100ms, remove a classe "show" do dropdown
 * e do trigger, além de atualizar o atributo "aria-expanded" para "false", indicando que o dropdown está oculto.
 * O atraso permite uma experiência de usuário mais suave, evitando que o dropdown desapareça imediatamente
 * se o mouse se mover rapidamente entre o trigger e o dropdown.
 */
function hideDropdownDep1() {
  hideTimeoutDep1 = setTimeout(() => {
    dropdownDepartamento1.classList.remove("show");
    triggerDepartamento1.classList.remove("show");
    triggerDepartamento1.setAttribute("aria-expanded", "false");
  }, 100);
}
