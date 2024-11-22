// Manejo de servicios médicos dinámicamente
const services = [
    { name: "Pediatría General", available: true },
    { name: "Cardiología Infantil", available: true },
    { name: "Neurología", available: false },
    { name: "Urgencias 24/7", available: true },
];

document.addEventListener("DOMContentLoaded", () => {
    const servicesList = document.querySelector("#services-list");

    if (servicesList) {
        services.forEach(service => {
            if (service.available) {
                const listItem = document.createElement("li");
                listItem.textContent = service.name;
                servicesList.appendChild(listItem);
            }
        });
    }
});
