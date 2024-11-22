document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector("#contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.querySelector("#name").value.trim();
            const email = document.querySelector("#email").value.trim();
            const phone = document.querySelector("#phone").value.trim();

            // Validaciones básicas
            if (!name || !email || !phone) {
                alert("Por favor, complete todos los campos.");
                console.error("Error: Uno o más campos están vacíos.");
                return;
            }

            if (!email.includes("@")) {
                alert("Por favor, ingrese un email válido.");
                console.error("Error: Formato de email incorrecto.");
                return;
            }

            if (isNaN(phone)) {
                alert("El número de teléfono debe contener solo dígitos.");
                console.error("Error: Teléfono no es numérico.");
                return;
            }

            console.log("Formulario enviado correctamente:");
            console.log(`Nombre: ${name}, Email: ${email}, Teléfono: ${phone}`);

            alert("Gracias por contactarnos. ¡Pronto nos comunicaremos contigo!");
        });
    } else {
        console.error("No se encontró el formulario con id 'contact-form'.");
    }
});
