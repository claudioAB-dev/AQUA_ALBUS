document.addEventListener("DOMContentLoaded", () => {
  // Lógica del Intersection Observer para animar secciones al hacer scroll
  const sections = document.querySelectorAll(".animated-section");

  if (sections.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          // Opcional: deja de observar el elemento una vez que es visible
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1, // La animación se dispara cuando el 10% del elemento es visible
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

  // Activa los íconos de Lucide
  // Se vuelve a llamar por si algún script los modifica dinámicamente.
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
});
