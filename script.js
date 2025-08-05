document.addEventListener("DOMContentLoaded", () => {
  const cursos = document.querySelectorAll(".curso");

  cursos.forEach((curso) => {
    const cursoId = curso.dataset.id;

    // Cargar estado desde localStorage
    const isChecked = localStorage.getItem(cursoId) === "true";
    curso.classList.toggle("completado", isChecked);

    curso.addEventListener("click", () => {
      curso.classList.toggle("completado");
      const checked = curso.classList.contains("completado");
      localStorage.setItem(cursoId, checked);

      verificarSemestreCompletado(curso.closest(".semestre"));
    });

    // Verificar al cargar
    verificarSemestreCompletado(curso.closest(".semestre"));
  });
});

function verificarSemestreCompletado(semestre) {
  const cursos = semestre.querySelectorAll(".curso");
  const todosCompletados = Array.from(cursos).every((c) =>
    c.classList.contains("completado")
  );

  let estrella = semestre.querySelector(".estrella");

  if (todosCompletados) {
    if (!estrella) {
      estrella = document.createElement("span");
      estrella.classList.add("estrella");
      estrella.textContent = "⭐";
      semestre.appendChild(estrella);
    }
  } else {
    if (estrella) {
      estrella.remove();
    }
  }
}
