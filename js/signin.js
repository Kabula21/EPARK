function logar(){

  var login = document.getElementById('login').value;
  var senha = document.getElementById('senha').value;

  if(login == "admin" && senha == "admin"){
    location.href ="./page2.html";
  }
  else{
    alert('Usuário ou Senha Incorretos');
  }

}

// // MODAL DE RELATORIO //
// function openModalrelatorio() {
//   var modal = document.getElementById("modal");
//   modal.style.display = "block";

//   window.addEventListener('click', function (event) {
//     if (event.target === modal) {
//         modal.style.display = 'none';
//     }
//   });
// }

// function closeModal() {
//   var modal = document.getElementById("modal");
//   modal.style.display = "none";
// }

// // FUNÇÃO DE IMPRIMIR
// document.getElementById("printButton").addEventListener("click", function() {
//   window.print(); // Chame a função de impressão quando o botão for clicado

// });

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader--hidden");
  loader.addEventListener("transitioned", () => {
    document.body.removeChild(loader);
  });
});






