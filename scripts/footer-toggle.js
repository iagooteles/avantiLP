document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".footer-toggle").forEach(button => {
      button.addEventListener("click", function () {
        let arrow = this.querySelector(".arrow");
        arrow.style.transform = this.classList.contains("collapsed") ? "rotate(0deg)" : "rotate(180deg)";
      });
    });
});
