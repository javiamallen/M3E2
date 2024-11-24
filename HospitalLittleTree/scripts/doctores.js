// Lista de doctores en formato JSON
const doctores = [
    {
      nombre: "Dr. Juan Pérez",
      especialidad: "Pediatría",
      experiencia: 10,
      contacto: {
        email: "juan.perez@littletreehospital.cl",
        telefono: "+56 9 1111 2222"
      },
      horarios: ["Lunes 9:00-13:00", "Miércoles 14:00-18:00"]
    },
    {
      nombre: "Dra. Ana Torres",
      especialidad: "Odontopediatría",
      experiencia: 8,
      contacto: {
        email: "ana.torres@littletreehospital.cl",
        telefono: "+56 9 3333 4444"
      },
      horarios: ["Martes 10:00-14:00", "Jueves 15:00-19:00"]
    },
    {
      nombre: "Dr. Pedro Sánchez",
      especialidad: "Cardiología Infantil",
      experiencia: 12,
      contacto: {
        email: "pedro.sanchez@littletreehospital.cl",
        telefono: "+56 9 5555 6666"
      },
      horarios: ["Lunes 8:00-12:00", "Viernes 9:00-13:00"]
    }
  ];
  
  // Elemento donde se insertará la lista de doctores
  const doctorList = document.getElementById("doctor-list");
  
  // Función para mostrar la lista de doctores
  function mostrarDoctores() {
    doctores.forEach((doctor) => {
      const doctorCard = document.createElement("div");
      doctorCard.classList.add("doctor-card");
  
      doctorCard.innerHTML = `
        <h3>${doctor.nombre}</h3>
        <p><strong>Especialidad:</strong> ${doctor.especialidad}</p>
        <p><strong>Experiencia:</strong> ${doctor.experiencia} años</p>
        <p><strong>Contacto:</strong> ${doctor.contacto.email}, ${doctor.contacto.telefono}</p>
        <p><strong>Horarios:</strong> ${doctor.horarios.join(", ")}</p>
      `;
  
      doctorList.appendChild(doctorCard);
    });
  }
  
  // Llamar a la función al cargar la página
  mostrarDoctores();
  