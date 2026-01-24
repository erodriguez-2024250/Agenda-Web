const buttons = document.querySelectorAll(".btn-details");
const modal = document.getElementById("contactDetails");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        document.getElementById("detailName").textContent = btn.dataset.name;
        document.getElementById("detailGroup").textContent = btn.dataset.group;
        document.getElementById("detailPhone").textContent = btn.dataset.phone;
        document.getElementById("detailEmail").textContent = btn.dataset.email;

        modal.style.display = "flex";
    });
});

document.getElementById("closeDetails").onclick = () => {
    modal.style.display = "none";
};

modal.onclick = e => {
    if (e.target === modal) modal.style.display = "none";
};

// Perfil
const btnPerfil = document.getElementById("btnPerfil");
const perfilModal = document.getElementById("perfilModal");
const closePerfil = document.getElementById("closePerfil");
const perfilCorreo = document.getElementById("perfilCorreo");

btnPerfil.addEventListener("click", e => {
    e.preventDefault();

    const correoGuardado = localStorage.getItem("correoUsuario");

    perfilCorreo.textContent = correoGuardado || "No disponible";
    perfilModal.style.display = "flex";
});

closePerfil.addEventListener("click", () => {
    perfilModal.style.display = "none";
});

perfilModal.addEventListener("click", e => {
    if (e.target === perfilModal) {
        perfilModal.style.display = "none";
    }
});

