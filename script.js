const cursos = [
  {
    semestre: "1er semestre",
    materias: [
      "Inglés I",
      "Procesos celulares y moleculares I",
      "Estructura y función del cuerpo humano",
      "Prácticas médicas I",
      "Desarrollo humano y social"
    ]
  },
  {
    semestre: "2do semestre",
    materias: [
      "Estilo de vida, salud y medio ambiente",
      "Inglés II",
      "Procesos celulares y moleculares II",
      "SO I Circulación, respiración, eliminación y equilibrio ácido básico",
      "Prácticas Médicas II"
    ]
  },
  {
    semestre: "3er semestre",
    materias: [
      "Bases de la terapéutica farmacológica",
      "Mecanismos de agresión y defensa I",
      "SO II Digestión, absorción, reproducción y control endocrino",
      "Prácticas Médicas III"
    ]
  },
  {
    semestre: "4to semestre",
    materias: [
      "Salud pública y sistemas de salud",
      "Mecanismos de agresión y defensa II",
      "SO III Soporte, movimiento y control neural",
      "Prácticas Médicas IV"
    ]
  },
  {
    semestre: "5to semestre",
    materias: [
      "Prevención y promoción de la salud",
      "Mecanismos de agresión y defensa III",
      "Neurociencias y comportamiento",
      "Salud del niño y del adolescente"
    ]
  },
  {
    semestre: "6to semestre",
    materias: [
      "Ciencia y descubrimiento",
      "Salud comunitaria",
      "Salud del adulto",
      "Salud de la mujer y el neonato"
    ]
  },
  {
    semestre: "7mo semestre",
    materias: [
      "Tecnologías biomédicas",
      "Salud del adulto mayor",
      "Salud mental",
      "Atención integral de la salud"
    ]
  },
  {
    semestre: "8vo semestre",
    materias: [
      "Cuidados paliativos y del fin de la vida",
      "Medicina interna I",
      "Pediatría I",
      "Ginecología y obstetricia I"
    ]
  },
  {
    semestre: "9no semestre",
    materias: [
      "Medicina interna II",
      "Pediatría II",
      "Ginecología y obstetricia II",
      "Electivo I"
    ]
  },
  {
    semestre: "10mo semestre",
    materias: [
      "Medicina de emergencias y cuidados críticos",
      "Cirugía general",
      "Neurología y psiquiatría",
      "Electivo II"
    ]
  },
  {
    semestre: "11vo semestre",
    materias: [
      "Cirugía de especialidades",
      "Tendencias globales en salud",
      "Proyectos de intervención en salud",
      "Electivo de especialidad"
    ]
  },
  {
    semestre: "12vo semestre",
    materias: [
      "Externado Medicina Interna",
      "Externado Pediatría",
      "Externado Cirugía",
      "Externado Gineco Obstetricia"
    ]
  },
  {
    semestre: "13vo semestre",
    materias: [
      "Internado Medicina Interna",
      "Internado Pediatría",
      "Seminarios de integración clínica I",
      "Seminario de Investigación"
    ]
  },
  {
    semestre: "14vo semestre",
    materias: [
      "Internado Cirugía",
      "Internado Gineco Obstetricia",
      "Seminarios de integración clínica II",
      "Trabajo de investigación"
    ]
  }
];

const contenedor = document.getElementById("malla");

cursos.forEach(({ semestre, materias }) => {
  const div = document.createElement("div");
  div.classList.add("semestre");

  const h2 = document.createElement("h2");
  h2.textContent = semestre;

  const ul = document.createElement("ul");
  materias.forEach(materia => {
    const li = document.createElement("li");
    li.textContent = materia;
    ul.appendChild(li);
  });

  div.appendChild(h2);
  div.appendChild(ul);

  // Toggle activo
  div.addEventListener("click", () => {
    div.classList.toggle("activo");
  });

  contenedor.appendChild(div);
});
