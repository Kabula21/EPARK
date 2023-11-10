function openModal(modalId, placaId, dataHoraId, contentId) {
    var modal = document.getElementById(modalId);
    var placa = document.getElementById(placaId).value;
    var dataHora = document.getElementById(dataHoraId).value;
    var content = document.getElementById(contentId);

    content.innerHTML = "Placa: " + placa + "<br>Data/Hora: " + dataHora;

    modal.style.display = "block";
}

// Função Entrada
function openModalentrada() {
    openModal("myModalentrada", "placaEntrada", "dataHoraentrada", "modalObservacoesEntrada");
}

function closeModalentrada() {
    var modal = document.getElementById("myModalentrada");
    modal.style.display = "none";
}

// Função Saída
function openModalsaida() {
    openModal("myModalsaida", "placaSaida", "dataHorasaida", "modalValorSaida");
}

function closeModalsaida() {
    var modal = document.getElementById("myModalsaida");
    modal.style.display = "none";
}

// BOTÃO DE IMPRIMIR
document.getElementById("printButtonentrada").addEventListener("click", function() {
    window.print(); // Chame a função de impressão quando o botão for clicado
});

document.getElementById("printButtonsaida2").addEventListener("click", function() {
    window.print(); // Chame a função de impressão quando o botão for clicado
});