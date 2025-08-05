const ciclos = {
  "1er semestre": [
    "Inglés I",
    "Procesos celulares y moleculares I",
    "Estructura y función del cuerpo humano",
    "Prácticas médicas I",
    "Desarrollo humano y social"
  ],
  "2do semestre": [
    "Estilo de vida, salud y medio ambiente",
    "Inglés II",
    "Procesos celulares y moleculares II",
    "SO I Circulación, respiración, eliminación y equilibrio ácido básico",
    "Prácticas Médicas II"
  ],
  "3er semestre": [
    "Bases de la terapéutica farmacológica",
    "Mecanismos de agresión y defensa I",
    "SO II Digestión, absorción, reproducción y control endocrino",
    "Prácticas Médicas III"
  ],
  "4to semestre": [
    "Salud pública y sistemas de salud",
    "Mecanismos de agresión y defensa II",
    "SO III Soporte, movimiento y control neural",
    "Prácticas Médicas IV"
  ],
  "5to semestre": [
    "Prevención y promoción de la salud",
    "Mecanismos de agresión y defensa III",
    "Neurociencias y comportamiento",
    "Salud del niño y del adolescente"
  ],
  "6to semestre": [
    "Ciencia y descubrimiento",
    "Salud comunitaria",
    "Salud del adulto",
    "Salud de la mujer y el neonato"
  ],
  "7to semestre": [
    "Tecnologías biomédicas",
    "Salud del adulto mayor",
    "Salud mental",
    "Atención integral de la salud"
  ],
  "8vo semestre": [
    "Cuidados paliativos y del fin de la vida",
    "Medicina interna I",
    "Pediatría I",
    "Ginecología y obstetricia I"
  ],
  "9no semestre": [
    "Medicina interna II",
    "Pediatría II",
    "Ginecología y obstetricia II",
    "Electivo I"
  ],
  "10mo semestre": [
    "Medicina de emergencias y cuidados críticos",
    "Cirugía general",
    "Neurología y psiquiatría",
    "Electivo II"
  ],
  "11vo semestre": [
    "Cirugía de especialidades",
    "Tendencias globales en salud",
    "Proyectos de intervención en salud",
    "Electivo de especialidad"
  ],
  "12vo semestre": [
    "Externado Medicina Interna",
    "Externado Pediatría",
    "Externado Cirugía",
    "Externado Gineco Obstetricia"
  ],
  "13vo semestre": [
    "Internado Medicina Interna",
    "Internado Pediatría",
    "Seminarios de integración clínica I",
    "Seminario de Investigación"
  ],
  "14vo semestre": [
    "Internado Cirugía",
    "Internado Gineco Obstetricia",
    "Seminarios de integración clínica II",
    "Trabajo de investigación"
  ]
};

// Seleccionamos el contenedor principal
const malla = document.getElementById('malla');

// Recorremos los ciclos y cursos
for (const ciclo in ciclos) {
  // Creamos el título del semestre
  const titulo = document.createElement('h2');
  titulo.textContent = ciclo;
  titulo.className = 'titulo-ciclo';
  malla.appendChild(titulo);

  // Contenedor para los cursos
  const contenedor = document.createElement('div');
  contenedor.className = 'ciclo';

  ciclos[ciclo].forEach(nombre => {
    const div = document.createElement('div');
    div.className = 'curso';
    div.textContent = nombre;

    if (localStorage.getItem(nombre) === "true") {
      div.classList.add('aprobado');
    }

    div.onclick = () => {
      div.classList.toggle('aprobado');
      const aprobado = div.classList.contains('aprobado');
      localStorage.setItem(nombre, aprobado);
    }

    contenedor.appendChild(div);
  });

  malla.appendChild(contenedor);
}
