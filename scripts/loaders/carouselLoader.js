document.addEventListener("DOMContentLoaded", async () => {
  await fetch("/public/html/carousel.html")
    .then((response) => response.text())
    .then((data) => {
      const placeholders = document.querySelectorAll(".carousel-placeholder");
      placeholders.forEach((placeholder, index) => {
        const id = `cardCarousel${index + 1}`;
        const updatedHTML = data.replaceAll("{{CAROUSEL_ID", id);
        placeholder.innerHTML = updatedHTML;
      });
    })
    .then(() => {
        document.dispatchEvent(new Event("carouselLoaded"));
    })
    .catch((error) => {
      console.error("Erro ao carregar o conteúdo:", error);
    });
});
