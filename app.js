function login() {
    const usuario = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const mensaje = document.getElementById("mensaje");

    const usuarioTrue = "admin";
    const passTrue = "1234";

    if (usuario === usuarioTrue && password === passTrue) {
        // Simulamos el backend guardando un token en el caché del navegador
        localStorage.setItem("sesionIniciada", "true");
        window.location.href = "pages/home.html";
    } else {
        mensaje.innerText = "Usuario o contraseña incorrectos";
    }
}

// Función para cerrar sesión
function cerrarSesion() {
    localStorage.removeItem("sesionIniciada");
    window.location.href = "../index.html";
}