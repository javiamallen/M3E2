document.querySelector("#contact-form").addEventListener("submit", event => {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#phone").value;

    try {
        if (!email.includes("@")) throw new Error("El correo debe incluir '@'.");
        alert(`Gracias, ${name}. Nos pondremos en contacto contigo pronto.`);
        console.log({ name, email, phone });
    } catch (error) {
        alert(error.message);
    }
});
