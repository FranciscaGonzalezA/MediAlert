const formulario = document.querySelector("form");
formulario.addEventListener("submit", async (event) => {
    event.preventDefault();
    // es lo mismo que esta arriba en la constante "formulario"
    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    const rut = formData.get("rut");
    const nombre = formData.get("nombre");
    const apellido = formData.get("apellido");
    const email = formData.get("email");
    const contrasena = formData.get("contrasena");

    const nuevoUsuario = {
        rut,
        nombre,
        apellido,
        email,
        contrasena
    };

    const baseUrl = "http://localhost:3000";
    const url = baseUrl + "/registro"
    const fetchConfig = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoUsuario)
    };
    try {
        const respuesta = await fetch(url, fetchConfig);
        if (!respuesta.ok) {
            console.error("La respuesta no está OK")
            return;
        }
        const objetoJson = await respuesta.json();
        console.dir(objetoJson);
    } catch (error) {
        console.error(error.code);
        console.error(error.message)
    }
    // console.dir({rut, nombre, apellido, email, contrasena});
});