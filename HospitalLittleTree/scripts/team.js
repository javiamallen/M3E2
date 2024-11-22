const team = [
    { name: "Dr. Pérez", specialty: "Pediatría", experience: 6 },
    { name: "Dra. Gómez", specialty: "Cardiología", experience: 4 },
    { name: "Dr. Martínez", specialty: "Neurología", experience: 8 },
];

document.addEventListener("DOMContentLoaded", () => {
    const experiencedDoctors = document.querySelector("#experienced-doctors");

    if (experiencedDoctors) {
        team.forEach(doctor => {
            if (doctor.experience > 5) {
                const listItem = document.createElement("li");
                listItem.textContent = `${doctor.name} - ${doctor.specialty}`;
                experiencedDoctors.appendChild(listItem);
            }
        });
    }
});

