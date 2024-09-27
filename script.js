function openWebsite() {
    document.getElementById("modal").style.display = "block";
}

function closeWebsite() {
    document.getElementById("modal").style.display = "none";
}

// Fecha o modal ao clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

