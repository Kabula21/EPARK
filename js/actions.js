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
    <button id="registrarEntrada">Registrar Entrada</button>

    <hr />

    <h1>Saída de Veículo</h1>
    
    <label for="placaSaida">Placa do Veículo:</label>
    <input type="text" id="placaSaida" />
    <button id="registrarSaida">Registrar Saída</button>

    <div id="resultado"></div>
    <div id="informacoesAdicionais"></div> */}


    const veiculosEstacionados = {}; //Lista que irá conter todos os veículos estacionados.
    let vagasOcupadas = 0;
    const totalVagas = 5; // Total de vagas de estacionamento
    let vagasLivres = totalVagas;
    let saidas = 0;
    let entradas = 0;
    
    function atualizarContagem() {
        var ocupadas = `${vagasOcupadas}`;
        document.getElementById('vagasOcupadas').innerHTML = ocupadas;
    
        var livres = `${vagasLivres}`;
        document.getElementById('vagasLivres').innerHTML = livres;
    
        var total = `${totalVagas}`;
        document.getElementById('totalVagas').innerHTML = total;
    
        var entrada = `${entradas}`;
        document.getElementById('entradas').innerHTML = entrada;
    
        var saida = `${saidas}`;
        document.getElementById('saidas').innerHTML = saida;
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
    
    function formatarDataHora(timestamp) {  //Função para formatar a data e hora.
        const dataHora = new Date(timestamp);
        const dia = dataHora.getDate().toString().padStart(2, '0');
        const mes = (dataHora.getMonth() + 1).toString().padStart(2, '0');
        const ano = dataHora.getFullYear();
        const horas = dataHora.getHours().toString().padStart(2, '0');
        const minutos = dataHora.getMinutes().toString().padStart(2, '0');
        return `${dia}/${mes}/${ano} - ${horas}:${minutos}`;
    }
    
    document.getElementById('registrarEntrada').addEventListener('click', () => {
        if (vagasOcupadas < totalVagas) {
            const placaEntrada = document.getElementById('placaEntrada').value;
            const horaEntrada = new Date().getTime();
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
    
    document.getElementById('registrarSaida').addEventListener('click', () => {
        const placaSaida = document.getElementById('placaSaida').value;
    
        if (veiculosEstacionados[placaSaida]) {
            const horaSaida = new Date().getTime();
            const tempoEstacionado = (horaSaida - veiculosEstacionados[placaSaida].horaEntrada) / 3600000;
            const valorEstacionamento = tempoEstacionado * 10;
    
            const horaEntradaFormatada = formatarDataHora(veiculosEstacionados[placaSaida].horaEntrada);
            const horaSaidaFormatada = formatarDataHora(horaSaida);

            //Exibir informações adicionais
            const informacoesAdicionais = veiculosEstacionados[placaSaida].informacoesAdicionais;
            

    
            if (valorEstacionamento > 1) {
                const resultado = `Placa: ${placaSaida}<br>Hora de Entrada: ${horaEntradaFormatada}<br>Hora de Saída: ${horaSaidaFormatada}<br>Tempo Estacionado (horas): ${tempoEstacionado.toFixed(2)}<br>Valor a pagar: R$ ${valorEstacionamento.toFixed(2)}`;
                document.getElementById('resultado').innerHTML = resultado;
                document.getElementById('informacoesAdicionais').textContent = `Informações Adicionais: ${informacoesAdicionais}`;
            } else {
                const resultado = `Placa: ${placaSaida}<br>Hora de Entrada: ${horaEntradaFormatada}<br>Hora de Saída: ${horaSaidaFormatada}<br>Tempo Estacionado (horas): ${tempoEstacionado.toFixed(2)}<br>Valor a pagar: R$ 0.00`;
                document.getElementById('resultado').innerHTML = resultado;
                document.getElementById('informacoesAdicionais').textContent = `Informações Adicionais: ${informacoesAdicionais}`;
            }
            
    
            
    
            delete veiculosEstacionados[placaSaida];
            vagasOcupadas--;
            vagasLivres++;
            saidas++;
        } else {
            alert('Veículo não encontrado no estacionamento.');
        }
    });
    
     // Chama a função para atualizar a data e hora a cada segundo (1000 milissegundos)
     setInterval(atualizarDataHora, 1000);
     setInterval(atualizarContagem, 1000);
    
     // Atualiza a data e hora na primeira vez que a página é carregada
     atualizarDataHora();
     atualizarContagem();
    