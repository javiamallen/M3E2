Hospital Little Tree - Proyecto Web
Descripción General
Este proyecto es una página web diseñada para el Hospital Little Tree, enfocada en ofrecer información sobre sus servicios médicos, equipo profesional y contacto, mientras garantiza una experiencia responsiva, accesible y estilizada. Incluye integraciones de JavaScript y Bootstrap, y la modularización de estilos utilizando SASS.

Características
Organización de Estilos con SASS y Metodología BEM:

Los estilos están modularizados siguiendo la estructura 7-1 de SASS.
Uso de la metodología BEM para mantener consistencia en la nomenclatura de clases.
Archivos parciales para cada sección del sitio: header.scss, footer.scss, home.scss, etc.
Responsividad con Media Queries:

Adaptación del diseño a dispositivos móviles, tablets y pantallas de escritorio.
Puntos de ruptura definidos:
Menores a 768px (móviles).
Entre 768px y 1024px (tablets).
Mayores a 1024px (escritorio).
Interactividad con JavaScript:

Validación de datos ingresados por el usuario a través de prompts.
Manejo de errores con try/catch.
Ciclos dinámicos para mostrar contenido (como lista de servicios y doctores) desde datos estáticos.
Requisitos Técnicos Implementados
1. Organización de Estilos y Estructura del Proyecto
Los estilos están organizados de la siguiente manera:

plaintext
Copiar código
styles/
│
├── abstracts/      # Variables, mixins, funciones
├── base/           # Reset y estilos generales
├── components/     # Estilos de componentes pequeños (botones, tarjetas, etc.)
├── layout/         # Estilos de secciones grandes (header, footer, grid)
├── pages/          # Estilos específicos para cada página
├── themes/         # Temas opcionales o paletas de colores
└── main.scss       # Archivo principal que importa todos los parciales
Esto asegura que cada componente o sección tenga su propio archivo, facilitando la escalabilidad y el mantenimiento del proyecto.

2. Uso de Media Queries
Las media queries permiten adaptar el diseño a diferentes dispositivos:

css
Copiar código
@media (max-width: 768px) {
  /* Estilos para móviles */
}

@media (min-width: 768px) and (max-width: 1024px) {
  /* Estilos para tablets */
}

@media (min-width: 1024px) {
  /* Estilos para pantallas grandes */
}
3. Interactividad con JavaScript
Funciones JavaScript implementadas:
Solicitar y validar información del usuario: Se utiliza un prompt para solicitar el nombre, email y teléfono del usuario. Los datos son validados y mostrados tanto en consola como en alertas.
Manipulación del DOM: Se generan dinámicamente listas de servicios y equipo médico.
Manejo de errores con try/catch: Implementado para capturar errores en la validación de datos y mostrar mensajes descriptivos.
4. Explicación del Event Loop
El Event Loop en JavaScript maneja la ejecución de tareas en el Call Stack (funciones principales), el Heap (almacenamiento de datos) y la Queue (tareas pendientes como eventos asíncronos). Esto asegura que las operaciones no bloqueen la ejecución principal.

Cómo Ejecutar el Proyecto
Instalación
Clona el repositorio:
bash
Copiar código
git clone https://github.com/usuario/hospital-little-tree.git
Accede al proyecto:
bash
Copiar código
cd hospital-little-tree
Instala dependencias (si usa Node.js para compilación de SASS):
bash
Copiar código
npm install
Visualización
Abre index.html en tu navegador para visualizar el proyecto.
Si estás utilizando un servidor local como Live Server, inicia con:
bash
Copiar código
live-server
Instrucciones Especiales
Compilación de SASS: Asegúrate de compilar los archivos SASS con:

bash
Copiar código
sass styles/main.scss styles/main.css
Validación del JavaScript: Asegúrate de que los scripts estén enlazados correctamente:

html
Copiar código
<script src="scripts/main.js"></script>
Archivos de Imagen: Coloca las imágenes necesarias en la carpeta images/:

Especialidades: dentista.jpg, terapia.jpg, pediatra.jpg.
Testimonios: paciente1.jpg, paciente2.jpg, paciente3.jpg.
Conclusión
Proyecto desarrollado como parte de la Especialización en Front-End Adalid CORFO Capital Humano 2024.

Autor: Javiera Allende
M3E2
Curso: Especialización Front-End
