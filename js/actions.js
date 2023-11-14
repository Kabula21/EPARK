


    const veiculosEstacionados = {}; // Lista que irá conter todos os veículos estacionados.
    let vagasOcupadas = 0;           // Variável que irá contar o n° de vagas ocupadas.
    const totalVagas = 5;            // Variável do total de vagas do estacionamento.
    let vagasLivres = totalVagas;    // Variável do total de vagas livres.
    let saidas = 0;                  // Variável do total de saídas.
    let entradas = 0;                // Variável do total de entradas.
    
    //Função para sempre atualizar a contagem de veículos (alterar valores no painel principal).
    function atualizarContagem() {
      var ocupadas = `${'Vagas Ocupadas: ' + vagasOcupadas}`;
      document.getElementById('vagasOcupadas').innerHTML = ocupadas;
  
      var livres = `${'Vagas Livres: ' + vagasLivres}`;
      document.getElementById('vagasLivres').innerHTML = livres;
  
      var total = `${'Total de Vagas: ' + totalVagas}`;
      document.getElementById('totalVagas').innerHTML = total;
  
      var entrada = `${'Total Entradas: ' + entradas}`;
      document.getElementById('entradas').innerHTML = entrada;
  
      var saida = `${'Total Saídas: ' + saidas}`;
      document.getElementById('saidas').innerHTML = saida;

      var horaEntradaFormatada = `${horaEntradaFormatada}`;
      document.getElementById('horaEntradaFormatada').innerHTML = horaEntradaFormatada;
    }

    // Espera até que o DOM esteja completamente carregado
    document.addEventListener('DOMContentLoaded', function () {
      // Chama a função para exibir as informações
      atualizarContagem();
      atualizarDataHora();

    });

    // Função para Abrir e configurar modal de Impressão de ENTRADA.
    function openModalentrada() {
        // Antes de abrir o modal, atualize a data e hora
        atualizarDataHora();

        // Obtenha os valores do formulário
        const placa = document.getElementById('placaEntrada').value;
        const observacoes = document.getElementById('observacoesEntrada').value;

        // Atualize os elementos no modal
        document.getElementById('modalPlacaEntrada').textContent = `Placa: ${placa}`;
        document.getElementById('modalDataHora').textContent = `Data e Hora: ${document.getElementById('dataHora').textContent}`;
        document.getElementById('modalObservacoesEntrada').textContent = `Observações: ${observacoes}`;

        // Abra o modal
        document.getElementById('myModalentrada').style.display = 'block';
    }

    // Função para fechar e configurar modal de Impressão de ENTRADA.
    function closeModalentrada() {
        // Feche o modal
        document.getElementById('myModalentrada').style.display = 'none';
    }
    
    // Função para atualizar e formatar(dia/mês/ano Horas:Minutos:Segundos) a Data e Hora do sistema.
    function atualizarDataHora() {
        const elementoDataHora = document.getElementById('dataHora');
        const dataHoraAtual = new Date();

        const dia = dataHoraAtual.getDate().toString().padStart(2, '0');
        const mes = (dataHoraAtual.getMonth() + 1).toString().padStart(2, '0');
        const ano = dataHoraAtual.getFullYear();
        const horas = dataHoraAtual.getHours().toString().padStart(2, '0');
        const minutos = dataHoraAtual.getMinutes().toString().padStart(2, '0');
        const segundos = dataHoraAtual.getSeconds().toString().padStart(2, '0');

        const dataHoraFormatada = `${dia}/${mes}/${ano} - ${horas}:${minutos}:${segundos}`;
        elementoDataHora.textContent = dataHoraFormatada;
    }


    //Implementação da regra de negócio do registro de entrada
    document.getElementById('registrarEntrada').addEventListener('click', () => {
        if (vagasOcupadas < totalVagas) {
            const placaEntrada = document.getElementById('placaEntrada').value;
            const horaEntrada = new Date();
            const observacoesEntrada = document.getElementById('observacoesEntrada').value; // Obter as observações
    
            if (veiculosEstacionados[placaEntrada]) {
                alert('Veículo já está estacionado.');
            } else {
                veiculosEstacionados[placaEntrada] = {
                    horaEntrada,
                    informacoesAdicionais: observacoesEntrada,
                };
                vagasOcupadas++;
                vagasLivres--;
                entradas++;
                alert('Veículo registrado com sucesso.');
            }
        } else {
            alert('Estacionamento lotado. Não é possível registrar entrada.');
        }
    });
    

    function openModalsaida() {
      // Antes de abrir o modal, atualize a data e hora
      atualizarDataHora();

 // Obtenha os valores do formulário
      const placa = document.getElementById('placaEntrada').value;
      const observacoes = document.getElementById('observacoesEntrada').value;

      // Atualize os elementos no modal
      document.getElementById('placaEntrada').textContent = `Placa: ${placa}`;
      document.getElementById('placaSaida').textContent = `Placa: ${placaSaida}`;
      document.getElementById('dataHorasaida').textContent = `Data e Hora: ${document.getElementById('horaEntradaFormatada').textContent}`;
      document.getElementById('modalObservacoesEntrada').textContent = `Observações: ${observacoes}`;
      document.getElementById('dataHoraentrada').textContent = `Data e Hora: ${document.getElementById('horaSaidaFormatada').textContent}`;
      document.getElementById('tempoEstacionado').textContent = `Tempo Estacionado: ${tempoEstacionado}`;
      document.getElementById('valorPagar').textContent = `Tempo Estacionado: ${valorPagar}`;


      // Abra o modal
      document.getElementById('myModalsaida').style.display = 'block';

      function closeModalsaida() {
        // Feche o modal
        document.getElementById('myModalentrada').style.display = 'none';
    }
  }


  // Implementação da regra de negócio do registro de saída
document.getElementById('registrarSaida').addEventListener('click', () => {
  const placaSaida = document.getElementById('placaSaida').value;

  if (veiculosEstacionados[placaSaida]) {
      const horaSaida = new Date().getTime();
      const tempoEstacionado = (horaSaida - veiculosEstacionados[placaSaida].horaEntrada) / 3600000;
      const valorEstacionamento = tempoEstacionado * 10;

      const horaEntradaFormatada = formatarDataHora(veiculosEstacionados[placaSaida].horaEntrada);
      const horaSaidaFormatada = formatarDataHora(horaSaida);

      // Exibir informações adicionais
      const informacoesAdicionais = veiculosEstacionados[placaSaida].informacoesAdicionais;

      const placaSaidaTexto = `Placa: ${placaSaida}`;
      const horaEntradaTexto = `Hora de Entrada: ${horaEntradaFormatada}`;
      const horaSaidaTexto = `Hora de Saída: ${horaSaidaFormatada}`;
      const tempoEstacionadoTexto = `Tempo Estacionado (horas): ${tempoEstacionado.toFixed(2)}`;
      const valorPagarTexto = `Valor a pagar: R$ ${valorEstacionamento.toFixed(2)}`;

      document.getElementById('placaSaida').textContent = placaSaidaTexto;
      document.getElementById('horaEntradaFormatada').textContent = horaEntradaTexto;
      document.getElementById('horaSaida').textContent = horaSaidaTexto;
      document.getElementById('tempoEstacionado').textContent = tempoEstacionadoTexto;
      document.getElementById('valorPagar').textContent = valorPagarTexto;
      document.getElementById('informacoesAdicionais').textContent = `Informações Adicionais: ${informacoesAdicionais}`;

      if (valorEstacionamento > 0) {
          delete veiculosEstacionados[placaSaida]; 
          vagasOcupadas--;
          vagasLivres++;
          saidas++;
      }
  } else {
      alert('Veículo não encontrado no estacionamento.');
  }
});


    

  
  
    
     // Chama a função para atualizar a data e hora a cada segundo (1000 milissegundos ou 1 segundo)
     setInterval(atualizarDataHora, 1000);
     setInterval(atualizarContagem, 1000);
    
     // Atualiza a data e hora na primeira vez que a página é carregada
     atualizarDataHora();
     atualizarContagem();
    