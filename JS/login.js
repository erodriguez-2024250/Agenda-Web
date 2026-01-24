document.getElementById("loginForm").addEventListener("submit", e => {
    e.preventDefault();

    const correo = document.getElementById("correo").value;

    localStorage.setItem("correoUsuario", correo);

    window.location.href = "Contactos.html";
});
