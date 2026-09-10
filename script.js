const carta = document.getElementById("carta");
const capa = document.getElementById("capa");
const texto = document.getElementById("texto");
const voltar = document.getElementById("voltar");
const musica = document.getElementById("musica");

function abrirCarta() {
  capa.classList.add("saindo");

  setTimeout(() => {
    capa.style.display = "none";
    texto.classList.add("aberto");
    texto.setAttribute("aria-hidden", "false");
    window.scrollTo({ top: 0, behavior: "instant" });

    // O navegador pode bloquear autoplay; o clique na carta permite a tentativa.
    musica.play().catch(() => {});
  }, 650);
}

carta.addEventListener("click", abrirCarta);
carta.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    abrirCarta();
  }
});

voltar.addEventListener("click", () => {
  texto.classList.remove("aberto");
  texto.setAttribute("aria-hidden", "true");
  capa.style.display = "grid";
  requestAnimationFrame(() => capa.classList.remove("saindo"));
  window.scrollTo({ top: 0, behavior: "smooth" });
});
