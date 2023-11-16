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
// BOTÃO DE IMPRIMIR ENTRADA
document.getElementById("printButtonentrada").addEventListener("click", function() {
    window.print(); // Chame a função de impressão quando o botão for clicado
});

// // BOTÃO DE IMPRIMIR SAÍDA
// document.getElementById("printButtonsaida").addEventListener("click", function() {
//     window.print(); // Chame a função de impressão quando o botão for clicado
// });

//IMPRIMI O RELATÓRIO GERAL
document.getElementById("printButton").addEventListener("click", function() {

    // Selecione a área que você deseja imprimir
    var areaParaImprimir = document.getElementById("relatorio");
  
    // Use html2canvas para converter a área em uma imagem
    html2canvas(areaParaImprimir).then(function(canvas) {
      // Crie um elemento de imagem com a imagem convertida
      var imagemParaImprimir = new Image();
      imagemParaImprimir.src = canvas.toDataURL("image/png");
  
      // Abra uma nova janela e coloque a imagem nela
      var janelaImprimir = window.open();
      janelaImprimir.document.write('<html><head><title>Imprimir</title></head><body><h1 style="margin-left:0px ; margin-bottom: 20px; color: #272262">Relatório Geral</h1></body>');
      janelaImprimir.document.write('<img src="' + imagemParaImprimir.src + '" style="width:100%;">');
      janelaImprimir.document.write('</body></html>');
      janelaImprimir.document.close();
  
      // Aguarde até que a imagem seja carregada antes de imprimir
      imagemParaImprimir.onload = function() {
        janelaImprimir.print();
        janelaImprimir.onafterprint = function() {
        janelaImprimir.close();
        };
      };
    });
  });

  //IMPRIMI O RELATÓRIO SAÍDA
document.getElementById("printButtonsaida").addEventListener("click", function() {
    // Selecione a área que você deseja imprimir
    var areaParaImprimir = document.getElementById("relatorioSaida");
  
    // Use html2canvas para converter a área em uma imagem
    html2canvas(areaParaImprimir).then(function(canvas) {
      // Crie um elemento de imagem com a imagem convertida
      var imagemParaImprimir = new Image();
      imagemParaImprimir.src = canvas.toDataURL("image/png");
  
      // Abra uma nova janela e coloque a imagem nela
      var janelaImprimir = window.open();
      janelaImprimir.document.write('<html><head><title>Saída</title></head><body><h1 style="margin-left:50px ; margin-bottom: 20px; color: #272262">SAÍDA</h1></body>');
      janelaImprimir.document.write('<img src="' + imagemParaImprimir.src + '"style="width:30%;">');
      janelaImprimir.document.write('</body></html>');
      janelaImprimir.document.close();
  
      // Aguarde até que a imagem seja carregada antes de imprimir
      imagemParaImprimir.onload = function() {
        janelaImprimir.print();
        janelaImprimir.onafterprint = function() {
          janelaImprimir.close();
        };
      };
    });
  });