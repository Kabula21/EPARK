// Função Entrada //

function openModalentrada() {
    var modal = document.getElementById("myModalentrada");
    var placa = document.getElementById("placa").value;
    var dataHora = document.getElementById("dataHora").value;
    var observacoes = document.getElementById("observacoes").value;

    document.getElementById("modalPlaca").textContent = placa;
    document.getElementById("modalDataHora").textContent = dataHora;
    document.getElementById("modalObservacoes").textContent = observacoes;

    modal.style.display = "block";
}

function closeModalentrada() {
    var modal = document.getElementById("myModalentrada");
    modal.style.display = "none";
}

// Função Saída //

function openModalsaida() {
    var modal = document.getElementById("myModalsaida");
    var placa = document.getElementById("placa").value;
    var dataHora = document.getElementById("dataHora").value;
    var valor = document.getElementById("valor").value;

    document.getElementById("modalPlaca").textContent = placa;
    document.getElementById("modalDataHora").textContent = dataHora;
    document.getElementById("modalValor").textContent = valor;

    modal.style.display = "block";
}

function closeModalsaida() {
    var modal = document.getElementById("myModalsaida");
    modal.style.display = "none";
}

// BOTAO DE IMPRIMIR //
document.getElementById("printButtonentrada").addEventListener("click", function() {
    window.print(); // Chame a função de impressão quando o botão for clicado
  });
  document.getElementById("printButtonsaida2").addEventListener("click", function() {
    window.print(); // Chame a função de impressão quando o botão for clicado
  });