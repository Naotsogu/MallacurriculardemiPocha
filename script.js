// Cursos originales que me diste para tu novia (Pocha)
const cursosPorSemestre = {
  "1": [
    "Inglés I", "Procesos celulares y moleculares I",
    "Estructura y función del cuerpo humano", "Prácticas médicas I", "Desarrollo humano y social"
  ],
  "2": [
    "Estilo de vida, salud y medio ambiente", "Inglés II",
    "Procesos celulares y moleculares II",
    "SO I Circulación, respiración, eliminación y equilibrio ácido básico",
    "Prácticas Médicas II"
  ],
  "3": [
    "Bases de la terapéutica farmacológica",
    "Mecanismos de agresión y defensa I",
    "SO II Digestión, absorción, reproducción y control endocrino",
    "Prácticas Médicas III"
  ],
  "4": [
    "Salud pública y sistemas de salud",
    "Mecanismos de agresión y defensa II",
    "SO III Soporte, movimiento y control neural",
    "Prácticas Médicas IV"
  ],
  "5": [
    "Prevención y promoción de la salud",
    "Mecanismos de agresión y defensa III",
    "Neurociencias y comportamiento",
    "Salud del niño y del adolescente"
  ],
  "6": [
    "Ciencia y descubrimiento", "Salud comunitaria",
    "Salud del adulto", "Salud de la mujer y el neonato"
  ],
  "7": [
    "Tecnologías biomédicas", "Salud del adulto mayor",
    "Salud mental", "Atención integral de la salud"
  ],
  "8": [
    "Cuidados paliativos y del fin de la vida",
    "Medicina interna I", "Pediatría I", "Ginecología y obstetricia I"
  ],
  "9": [
    "Medicina interna II", "Pediatría II",
    "Ginecología y obstetricia II", "Electivo I"
  ],
  "10": [
    "Medicina de emergencias y cuidados críticos",
    "Cirugía general", "Neurología y psiquiatría", "Electivo II"
  ],
  "11": [
    "Cirugía de especialidades", "Tendencias globales en salud",
    "Proyectos de intervención en salud", "Electivo de especialidad"
  ],
  "12": [
    "Externado Medicina Interna", "Externado Pediatría",
    "Externado Cirugía", "Externado Gineco Obstetricia"
  ],
  "13": [
    "Internado Medicina Interna", "Internado Pediatría",
    "Seminarios de integración clínica I", "Seminario de Investigación"
  ],
  "14": [
    "Internado Cirugía", "Internado Gineco Obstetricia",
    "Seminarios de integración clínica II", "Trabajo de investigación"
  ]
};

// Crear malla curricular
function crearMalla() {
  const contenedor = document.getElementById("malla");

  Object.keys(cursosPorSemestre).forEach((semestreNum) => {
    const semestre = document.createElement("div");
    semestre.classList.add("semestre");

    // Centrar semestres 13 y 14
    if (semestreNum === "13" || semestreNum === "14") {
      semestre.classList.add("centrado");
    }

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

// Marcar y guardar estado
function iniciarInteracciones() {
  const cursos = document.querySelectorAll(".curso");

  cursos.forEach((curso) => {
    const cursoId = curso.dataset.id;
    const isChecked = localStorage.getItem(cursoId) === "true";
    curso.classList.toggle("completado", isChecked);

    curso.addEventListener("click", () => {
      curso.classList.toggle("completado");
      const checked = curso.classList.contains("completado");
      localStorage.setItem(cursoId, checked);

      verificarSemestreCompletado(curso.closest(".semestre"));
    });

    verificarSemestreCompletado(curso.closest(".semestre"));
  });
}

// Mostrar estrella si todos los cursos del semestre están completados
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

// Iniciar cuando cargue todo
document.addEventListener("DOMContentLoaded", () => {
  crearMalla();
  iniciarInteracciones();
});
