{/* <h1>Contagem de Veículos</h1>
    <div id="totalVagas"></div>
    <div id="vagasLivres"></div>
    <div id="vagasOcupadas"></div>
    <hr>
    <div id="entradas"></div>
    <div id="saidas"></div>
    <div id="valorTotal"></div>

    <hr />

    <h1>Entrada de Veículo</h1>
    <div id="dataHora"></div>
    <label for="placaEntrada">Placa do Veículo:</label>
    <input type="text" id="placaEntrada" />
    <label for="observacoes">Informações Adicionais:</label>
    <input type="text" id="observacoesEntrada" />
    <button id="btnEntrada">Registrar Entrada</button>

    <hr />

    <h1>Saída de Veículo</h1>
    
    <label for="placaSaida">Placa do Veículo:</label>
    <input type="text" id="placaSaida" />
    <button id="btnSaida">Registrar Saída</button>

    <div id="resultado"></div>
    <div id="informacoesAdicionais"></div> */}


    const veiculosEstacionados = {}; // Lista que irá conter todos os veículos estacionados.
    let vagasOcupadas = 0;
    const totalVagas = 5; // Total de vagas de estacionamento
    let vagasLivres = totalVagas;
    let saidas = 0;
    let entradas = 0;
    
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

    // AJUSTE DATA E HORA DO SISTEMA E MODAL//
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

    function closeModalentrada() {
        // Feche o modal
        document.getElementById('myModalentrada').style.display = 'none';
    }

    function atualizarDataHora() {
        const elementoDataHora = document.getElementById('dataHora');
        const dataHoraAtual = new Date();

        const dia = dataHoraAtual.getDate().toString().padStart(2, '0');
        const mes = (dataHoraAtual.getMonth() + 1).toString().padStart(2, '0');
        const ano = dataHoraAtual.getFullYear();
        const horas = dataHoraAtual.getHours().toString().padStart(2, '0');
        const minutos = dataHoraAtual.getMinutes().toString().padStart(2, '0');
        const segundos = dataHoraAtual.getSeconds().toString().padStart(2, '0');

        const dataHoraFormatada = `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;
        elementoDataHora.textContent = dataHoraFormatada;
    }


//FUNÇÃO DE REGISTRO DE ENTRADA//
    
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
    

//FUNÇÃO DE REGISTRO DE SAIDA//

    // Função para abrir o modal de saída
function openModalsaida() {
    document.getElementById('myModalsaida').style.display = 'block';
  }
  
  // Função para fechar o modal de saída
  function closeModalsaida() {
    document.getElementById('myModalsaida').style.display = 'none';
  }
  
  document.getElementById('registrarSaida').addEventListener('click', () => {
    const placaSaida = document.getElementById('placaSaida').value;
  
    if (veiculosEstacionados[placaSaida]) {
      // ... (código existente)
  
      // Chamar a função para abrir o modal de saída
      openModalsaida();
    } else {
      alert('Veículo não encontrado no estacionamento.');
    }
  });
  
  // Função para formatar data e hora (substitua com a sua implementação)
  function formatarDataHora(timestamp) {
    // Implementação da formatação de data e hora
  }
  
    
     // Chama a função para atualizar a data e hora a cada segundo (1000 milissegundos ou 1 segundo)
     setInterval(atualizarDataHora, 1000);
     setInterval(atualizarContagem, 1000);
    
     // Atualiza a data e hora na primeira vez que a página é carregada
     atualizarDataHora();
     atualizarContagem();
    