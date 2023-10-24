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

// Adicione um ouvinte de evento ao botão
document.getElementById("printButton").addEventListener("click", function() {
  window.print(); // Chame a função de impressão quando o botão for clicado
});
