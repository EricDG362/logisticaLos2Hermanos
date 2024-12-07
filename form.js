// Inicializa EmailJS
emailjs.init("RxVceygdnNKaFmhmS "); // Reemplaza con tu Public Key de EmailJS

// Captura el formulario y añade el evento de envío
document.querySelector(".contacto").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario

    // Captura los datos del formulario
    const formData = {
        nombre: document.getElementById("nombre").value,
        email: document.getElementById("email").value,
        telefono: document.getElementById("telefono").value,
        mensaje: document.getElementById("mensaje").value,
    };

    // Envía los datos con EmailJS
    emailjs
        .send("service_adhpk87", "template_66doihf", formData)
        .then(
            function (response) {
                alert("¡Correo enviado con éxito!");
                console.log("SUCCESS!", response.status, response.text);
            },
            function (error) {
                alert("Hubo un error al enviar el correo. Intenta nuevamente.");
                console.error("FAILED...", error);
            }
        );
});
