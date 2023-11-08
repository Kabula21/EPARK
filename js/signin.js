function logar(){

  var login = document.getElementById('login').value;
  var senha = document.getElementById('senha').value;

  if(login == "admin" && senha == "admin"){
    alert('sucesso');
    location.href ="./page2.html";
  }
  else{
    alert('Usuário ou Senha Incorretos');
  }

}


function startProgress() {
  let progressBar = document.getElementById("progress-bar");
  let width = 0;
  const interval = 10; // Intervalo de atualização em milissegundos
  
  const updateProgress = () => {
      if (width >= 100) {
          clearInterval(progressInterval);
      } else {
          width++;
          progressBar.style.width = width + "%";
          progressBar.innerHTML = width + "%";
      }
  };
  
  const progressInterval = setInterval(updateProgress, interval);
}


function openModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "block";
}

function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}

// FUNÇÃO DE IMPRIMIR
document.getElementById("printButton").addEventListener("click", function() {
  window.print(); // Chame a função de impressão quando o botão for clicado
});


window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader--hidden");
  loader.addEventListener("transitioned", () => {
    document.body.removeChild(loader);
  });
});

//FUNÇÃO DATA E HORA //

function preencherDataHoraAtual() {
  const dataHoraCampo = document.getElementById("dataHora");
  const dataAtual = new Date();
  const dataFormatada = dataAtual.toISOString().slice(0, 16); // Formato "AAAA-MM-DDTHH:MM"
  dataHoraCampo.value = dataFormatada;
}

// Chame a função para preencher o campo automaticamente quando a página carregar
preencherDataHoraAtual();


