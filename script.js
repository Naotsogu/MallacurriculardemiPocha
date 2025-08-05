// Datos de los cursos por semestre
const cursosPorSemestre = {
  "1": ["Matemática Básica", "Química General I", "Biología", "Lenguaje", "Desarrollo Personal", "Taller de introducción a la vida universitaria"],
  "2": ["Matemática I", "Química General II", "Biología Celular", "Metodología del Estudio", "Técnicas de Estudio", "Taller de Creatividad"],
  "3": ["Matemática II", "Química Orgánica I", "Física General", "Bioquímica I", "Ecología", "Estadística I"],
  "4": ["Matemática III", "Química Orgánica II", "Física Moderna", "Bioquímica II", "Fisiología", "Estadística II"],
  "5": ["Química Analítica I", "Microbiología", "Toxicología", "Genética", "Química Física", "Farmacognosia"],
  "6": ["Química Analítica II", "Inmunología", "Biotecnología", "Parasitología", "Fisiopatología", "Química Farmacéutica I"],
  "7": ["Química Farmacéutica II", "Farmacología I", "Farmacotecnia I", "Análisis Instrumental I", "Nutrición", "Biofarmacia y Farmacocinética"],
  "8": ["Farmacología II", "Farmacotecnia II", "Análisis Instrumental II", "Toxicología Analítica", "Cosmetología", "Evaluación de Tecnología Sanitaria"],
  "9": ["Farmacia Clínica I", "Tecnología Farmacéutica I", "Legislación Farmacéutica", "Farmacoeconomía", "Atención Farmacéutica", "Gestión y Administración Farmacéutica"],
  "10": ["Farmacia Clínica II", "Tecnología Farmacéutica II", "Farmacovigilancia", "Educación para la Salud", "Bioética", "Buenas Prácticas de Manufactura"],
  "11": ["Internado I"],
  "12": ["Internado II"],
  "13": ["Tesis I", "Electivo I"],
  "14": ["Tesis II", "Electivo II"]
};

// Función para crear la malla curricular
function crearMalla() {
  const contenedor = document.getElementById("malla");

  Object.keys(cursosPorSemestre).forEach((semestreNum) => {
    const semestre = document.createElement("div");
    semestre.classList.add("semestre");

    const titulo = document.createElement("h2");
    titulo.textContent = `Semestre ${semestreNum}`;
    semestre.appendChild(titulo);

    cursosPorSemestre[semestreNum].forEach((nombreCurso, index) => {
      const curso = document.createElement("div");
      curso.classList.add("curso");
      curso.dataset.id = `S${semestreNum}_C${index}`;
      curso.textContent = nombreCurso;
      semestre.appendChild(curso);
    });

    contenedor.appendChild(semestre);
  });
}

// Función para manejar los clics y el estado de los cursos
function iniciarInteracciones() {
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
}

// Agregar estrella si todo el semestre está aprobado
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

// Ejecutar al cargar
document.addEventListener("DOMContentLoaded", () => {
  crearMalla();
  iniciarInteracciones();
});
