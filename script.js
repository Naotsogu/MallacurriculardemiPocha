const cursos = [
  { nombre: "Matemática I" },
  { nombre: "Comunicación" },
  { nombre: "Física I" },
  { nombre: "Química I" },
  { nombre: "Programación I" },
  { nombre: "Matemática II" },
  { nombre: "Física II" },
  { nombre: "Estadística" }
];

const malla = document.getElementById('malla');

cursos.forEach(curso => {
  const div = document.createElement('div');
  div.className = 'curso';
  div.textContent = curso.nombre;

  if (localStorage.getItem(curso.nombre) === "true") {
    div.classList.add('aprobado');
  }

  div.onclick = () => {
    div.classList.toggle('aprobado');
    const aprobado = div.classList.contains('aprobado');
    localStorage.setItem(curso.nombre, aprobado);
  }

  malla.appendChild(div);
});
