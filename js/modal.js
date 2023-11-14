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



// Function Entrada
function openModal2(modalId, placaEntrada, placaSaida, dataHoraEntrada, dataHoraSaida, modalObservacoesEntrada, tempoEstacionado, valorPagar, content) {
    var modal = document.getElementById(modalId);
    var placaEntradaValue = document.getElementById(placaEntrada).value;
    var placaSaidaValue = document.getElementById(placaSaida).value;
    var dataHoraEntradaValue = document.getElementById(dataHoraEntrada).value;
    var dataHoraSaidaValue = document.getElementById(dataHoraSaida).value;
    var modalObservacoesEntradaElement = document.getElementById(modalObservacoesEntrada).value; 
    var tempoEstacionadoElement = document.getElementById(tempoEstacionado).value; 
    var valorPagarElement = document.getElementById(valorPagar).value; 
    var contentElement = document.getElementById(content);

    contentElement.innerHTML = "modalObservacoesEntrada:" + modalObservacoesEntradaElement + "<br>Placa Entrada: " + placaEntradaValue + "<br>Placa Saída: " + placaSaidaValue + "<br>Data e Hora Entrada: " + dataHoraEntradaValue + "<br>Data e Hora Saída: " + dataHoraSaidaValue + "<br>Tempo Estacionado: " + tempoEstacionadoElement + "<br>Valor a Pagar: " + valorPagarElement;

    modal.style.display = "block";
}

// Function Saída
function openModalsaida() {
    openModal2("myModalsaida", "placaEntrada", "placaSaida", "dataHoraentrada", "dataHorasaida", "modalObservacoesEntrada", "tempoEstacionado", "valorPagar", "content");
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