const cursos = [
  { semestre:"1er semestre", materias:[
    "Inglés I", "Procesos celulares y moleculares I",
    "Estructura y función del cuerpo humano", "Prácticas médicas I",
    "Desarrollo humano y social"
  ]},
  { semestre:"2do semestre", materias:[
    "Estilo de vida, salud y medio ambiente", "Inglés II",
    "Procesos celulares y moleculares II",
    "SO I Circulación, respiración, eliminación y equilibrio ácido básico",
    "Prácticas Médicas II"
  ]},
  { semestre:"3er semestre", materias:[
    "Bases de la terapéutica farmacológica", "Mecanismos de agresión y defensa I",
    "SO II Digestión, absorción, reproducción y control endocrino",
    "Prácticas Médicas III"
  ]},
  { semestre:"4to semestre", materias:[
    "Salud pública y sistemas de salud", "Mecanismos de agresión y defensa II",
    "SO III Soporte, movimiento y control neural",
    "Prácticas Médicas IV"
  ]},
  { semestre:"5to semestre", materias:[
    "Prevención y promoción de la salud", "Mecanismos de agresión y defensa III",
    "Neurociencias y comportamiento", "Salud del niño y del adolescente"
  ]},
  { semestre:"6to semestre", materias:[
    "Ciencia y descubrimiento", "Salud comunitaria", "Salud del adulto", "Salud de la mujer y el neonato"
  ]},
  { semestre:"7mo semestre", materias:[
    "Tecnologías biomédicas", "Salud del adulto mayor", "Salud mental", "Atención integral de la salud"
  ]},
  { semestre:"8vo semestre", materias:[
    "Cuidados paliativos y del fin de la vida", "Medicina interna I", "Pediatría I", "Ginecología y obstetricia I"
  ]},
  { semestre:"9no semestre", materias:[
    "Medicina interna II", "Pediatría II", "Ginecología y obstetricia II", "Electivo I"
  ]},
  { semestre:"10mo semestre", materias:[
    "Medicina de emergencias y cuidados críticos", "Cirugía general", "Neurología y psiquiatría", "Electivo II"
  ]},
  { semestre:"11vo semestre", materias:[
    "Cirugía de especialidades", "Tendencias globales en salud", "Proyectos de intervención en salud", "Electivo de especialidad"
  ]},
  { semestre:"12vo semestre", materias:[
    "Externado Medicina Interna", "Externado Pediatría", "Externado Cirugía", "Externado Gineco Obstetricia"
  ]},
  { semestre:"13vo semestre", materias:[
    "Internado Medicina Interna", "Internado Pediatría", "Seminarios de integración clínica I", "Seminario de Investigación"
  ]},
  { semestre:"14vo semestre", materias:[
    "Internado Cirugía", "Internado Gineco Obstetricia", "Seminarios de integración clínica II", "Trabajo de investigación"
  ]}
];

const cont = document.getElementById("malla");

cursos.forEach(({semestre, materias}) => {
  const box = document.createElement("div");
  box.classList.add("semestre");

  const title = document.createElement("h2");
  title.textContent = semestre;
  box.appendChild(title);

  const ul = document.createElement("ul");
  materias.forEach(mat => {
    const li = document.createElement("li");
    li.textContent = mat;
    ul.appendChild(li);
  });
  box.appendChild(ul);

  box.addEventListener("click", () => {
    box.classList.toggle("activo");
  });

  cont.appendChild(box);
});
