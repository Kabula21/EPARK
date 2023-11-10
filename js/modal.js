function openModal(modalId, placaEntrada, dataHoraId, contentId, modalObservacoesEntrada) {
    var modal = document.getElementById(modalId);
    var placa = document.getElementById(placaEntrada).value;
    var dataHora = document.getElementById(dataHoraId).value;
    var content = document.getElementById(contentId);
    var observacoes = document.getElementById(modalObservacoesEntrada);

    content.innerHTML = "Placa: " + placa + "<br>Data/Hora: " + dataHora + "<br>Observações: " + observacoes;

    modal.style.display = "block";
}

// Função Entrada
function openModalentrada() {
    openModal("myModalentrada", "placaEntrada", "dataHora", "modalObservacoesEntrada");
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