    const veiculosEstacionados = {}; // Lista que irá conter todos os veículos estacionados.
    let vagasOcupadas = 0;           // Variável que irá contar o n° de vagas ocupadas.
    const totalVagas = 5;            // Variável do total de vagas do estacionamento.
    let vagasLivres = totalVagas;    // Variável do total de vagas livres.
    let saidas = 0;                  // Variável do total de saídas.
    let entradas = 0;                // Variável do total de entradas.
    let totalValorCaixa = 0.00;         // Variável para armazenar o valor total a pagar.

    //Função para sempre atualizar a contagem de veículos (alterar valores no painel principal).
    function atualizarContagem() {
      var ocupadas = `${'<strong>Vagas Ocupadas: ' + vagasOcupadas}`;
      document.getElementById('vagasOcupadas').innerHTML = ocupadas;
  
      var livres = `${'<strong>Vagas Livres: ' + vagasLivres}`;
      document.getElementById('vagasLivres').innerHTML = livres;
  
      var total = `${'<strong>Total de Vagas: ' + totalVagas}`;
      document.getElementById('totalVagas').innerHTML = total;
  
      var entrada = `${'<strong>Total Entradas: ' + entradas}`;
      document.getElementById('entradas').innerHTML = entrada;
  
      var saida = `${'<strong>Total Saídas: ' + saidas}`;
      document.getElementById('saidas').innerHTML = saida;

      const valorTotalCaixa = `<strong>Valor Total no Caixa: R$ ${totalValorCaixa.toFixed(2)}</strong>`;
      document.getElementById('valorTotalCaixa').innerHTML = valorTotalCaixa;

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
        // Apagar o conteúdo do campo placaEntrada e Observações
        document.getElementById('placaEntrada').value = '';
        document.getElementById('observacoesEntrada').value = '';
    }

    //formatar Data e Hora.
    function formatarDataHora(timestamp) {  //Função para formatar a data e hora.
      const dataHora = new Date(timestamp);
      const dia = dataHora.getDate().toString().padStart(2, '0');
      const mes = (dataHora.getMonth() + 1).toString().padStart(2, '0');
      const ano = dataHora.getFullYear();
      const horas = dataHora.getHours().toString().padStart(2, '0');
      const minutos = dataHora.getMinutes().toString().padStart(2, '0');
      return `${dia}/${mes}/${ano} - ${horas}:${minutos}`;
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

            // Verificar se o campo placaEntrada está vazio
          if (placaEntrada.trim() === '') {
          alert('Por favor, preencha a placa do veículo.');
          return; // Interrompe a execução do código
          }
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
                // Atualiza o valor total no caixa
                totalValorCaixa += 0.00;
                
                setTimeout(function() {
                  // Apagar o conteúdo do campo placaEntrada e Observações após 20 segundos.
                  document.getElementById('placaEntrada').value = '';
                  document.getElementById('observacoesEntrada').value = '';
                }, 20000);
            
            }
            
        } else {
            alert('Estacionamento lotado. Não é possível registrar entrada.');
        }
    });


   //Implementação da regra de negócio do registro de saída
    document.getElementById('registrarSaida').addEventListener('click', () => {
      const placaSaida = document.getElementById('placaSaida').value;

      // Verificar se o campo placa entrada está vazio
    if (placaSaida.trim() === '') {
    alert('Por favor, insira a placa do veículo.');
    return; // Abortar a execução do código se o campo estiver vazio
    }


      if (veiculosEstacionados[placaSaida]) {
        const valorPagar = 0.00;
        const horaSaida = new Date().getTime();
        const tempoEstacionado = (horaSaida - veiculosEstacionados[placaSaida].horaEntrada) / 3600000;
        const valorBase = 10.00;
        const valorAdicional = 3.00 * Math.ceil((tempoEstacionado - 1.00) / 1.0); // 3 reais por hora adicional
    
        const horaEntradaFormatada = formatarDataHora(veiculosEstacionados[placaSaida].horaEntrada);
        const horaSaidaFormatada = formatarDataHora(horaSaida);

        //Exibir informações
        const informacoesAdicionais = veiculosEstacionados[placaSaida].informacoesAdicionais;

        if (tempoEstacionado <= 0.10) {
          const resultado = `<b>Placa:</b> ${placaSaida}<br><b>Hora de Entrada:</b><br>${horaEntradaFormatada}<br><b>Hora de Saída:</b><br>${horaSaidaFormatada}<br><b>Tempo Estacionado (horas):</b><br>${tempoEstacionado.toFixed(2)}<br><b>Valor a pagar:</b><br>R$ 0.00<br><b>Informações Adicionais:</b><br>${informacoesAdicionais}`;
          document.getElementById('resultado').innerHTML = resultado;
        }

        if (tempoEstacionado > 0.10 && tempoEstacionado <= 0.30) {
          const resultado = `<b>Placa:</b> ${placaSaida}<br><b>Hora de Entrada:</b><br>${horaEntradaFormatada}<br><b>Hora de Saída:</b><br>${horaSaidaFormatada}<br><b>Tempo Estacionado (horas):</b><br>${tempoEstacionado.toFixed(2)}<br><b>Valor a pagar:</b><br>R$ 7.00<br><b>Informações Adicionais:</b><br>${informacoesAdicionais}`;
          document.getElementById('resultado').innerHTML = resultado;
          
        } if (tempoEstacionado > 0.30 && tempoEstacionado <= 1.00)  {
          const resultado = `<b>Placa:</b> ${placaSaida}<br><b>Hora de Entrada:</b><br>${horaEntradaFormatada}<br><b>Hora de Saída:</b><br>${horaSaidaFormatada}<br><b>Tempo Estacionado (horas):</b><br>${tempoEstacionado.toFixed(2)}<br><b>Valor a pagar:</b><br>R$ 10.00<br><b>Informações Adicionais:</b><br>${informacoesAdicionais}`;
          document.getElementById('resultado').innerHTML = resultado;
          
        }
        if (tempoEstacionado > 1.00 && tempoEstacionado <= 1.30)  {
          const resultado = `<b>Placa:</b> ${placaSaida}<br><b>Hora de Entrada:</b><br>${horaEntradaFormatada}<br><b>Hora de Saída:</b><br>${horaSaidaFormatada}<br><b>Tempo Estacionado (horas):</b><br>${tempoEstacionado.toFixed(2)}<br><b>Valor a pagar:</b><br>R$ 15.00<br><b>Informações Adicionais:</b><br>${informacoesAdicionais}`;
          document.getElementById('resultado').innerHTML = resultado;
          
        }
        if (tempoEstacionado > 1.30)  {
          const resultado = `<b>Placa:</b> ${placaSaida}<br><b>Hora de Entrada:</b><br>${horaEntradaFormatada}<br><b>Hora de Saída:</b><br>${horaSaidaFormatada}<br><b>Tempo Estacionado (horas):</b><br>${tempoEstacionado.toFixed(2)}<br><b>Valor a pagar:</b><br>R$ ${(valorBase + valorAdicional).toFixed(2)}<br><b>Informações Adicionais:</b><br>${informacoesAdicionais}`;
          document.getElementById('resultado').innerHTML = resultado;
          
        }
        
        delete veiculosEstacionados[placaSaida];
        vagasOcupadas--;
        vagasLivres++;
        saidas++;
        // Atualiza o valor total no caixa
        totalValorCaixa += valorPagar;
        

        // Apagar o conteúdo do campo placa Saida.
        document.getElementById('placaSaida').value = '';
      } 
      else {
        alert('Veículo não encontrado no estacionamento.');

        // Apagar o conteúdo do campo placa Saida.
        document.getElementById('placaSaida').value = '';
      }

    });
  
  
    
     // Chama a função para atualizar a data e hora a cada segundo (1000 milissegundos ou 1 segundo)
     setInterval(atualizarDataHora, 1000);
     setInterval(atualizarContagem, 1000);
    
     // Atualiza a data e hora na primeira vez que a página é carregada
     atualizarDataHora();
     atualizarContagem();
    