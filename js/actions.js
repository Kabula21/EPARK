{/* <h1>Entrada de Veículo</h1>
<label for="placaEntrada">Placa do Veículo:</label>
<input type="text" id="placaEntrada">
<button id="registrarEntrada">Registrar Entrada</button>

<hr>

<h1>Saída de Veículo</h1>
<label for="placaSaida">Placa do Veículo:</label>
<input type="text" id="placaSaida">
<button id="registrarSaida">Registrar Saída</button>

<div id="resultado"></div> */}





// Simples "banco de dados" para armazenar as informações dos veículos estacionados
const veiculosEstacionados = {};

document.getElementById('registrarEntrada').addEventListener('click', () => {
    const placaEntrada = document.getElementById('placaEntrada').value;
    const horaEntrada = new Date().getTime(); // Hora atual em milissegundos

    // Verifica se a placa já existe no sistema
    if (veiculosEstacionados[placaEntrada]) {
        alert('Veículo já está estacionado.');
    } else {
        // Registra o veículo com a hora de entrada
        veiculosEstacionados[placaEntrada] = {
            horaEntrada,
            informacoesAdicionais: "Informe as informações adicionais aqui."
        };
        alert('Veículo registrado com sucesso.');
    }
});

document.getElementById('registrarSaida').addEventListener('click', () => {
    const placaSaida = document.getElementById('placaSaida').value;

    // Verifica se a placa está no sistema
    if (veiculosEstacionados[placaSaida]) {
        const horaSaida = new Date().getTime(); // Hora atual em milissegundos
        const tempoEstacionado = (horaSaida - veiculosEstacionados[placaSaida].horaEntrada) / 3600000; // Calcula o tempo em horas
        const valorEstacionamento = tempoEstacionado * 10; // Calcula o valor do estacionamento

        // Exibe as informações
        const resultado = `Placa: ${placaSaida}<br>Hora de Entrada: ${veiculosEstacionados[placaSaida].horaEntrada}<br>Tempo Estacionado (horas): ${tempoEstacionado.toFixed(2)}<br>Valor a pagar: R$ ${valorEstacionamento.toFixed(2)}`;
        document.getElementById('resultado').innerHTML = resultado;

        // Remove o veículo da lista de veículos estacionados
        delete veiculosEstacionados[placaSaida];
    } else {
        alert('Veículo não encontrado no estacionamento.');
    }
});