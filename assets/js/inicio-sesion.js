const formulario = document.querySelector("form");
formulario.addEventListener("submit", async (event) => {
    event.preventDefault();
    // es lo mismo que esta arriba en la constante "formulario"
    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    const email = formData.get("email");
    const contrasena = formData.get("contrasena");

    const nuevoUsuario = {
        email,
        contrasena
    };

    const baseUrl = "http://localhost:3000";
    const url = baseUrl + "/inicio-sesion"
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
        const usuario = objetoJson.usuario;
        localStorage.setItem('usuario', JSON.stringify(usuario));
        window.location = 'dashboard.html'
    } catch (error) {
        console.error(error.code);
        console.error(error.message)
    }
});jnbwikjbencwjk