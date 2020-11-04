var cb = document.getElementById("cabecalho");
var bar = document.getElementById("menu");
var pr = document.getElementById("principal");
var rd = document.getElementById("rodape");
// codigo do card dos produtos

fetch("http://localhost:3600/listar")
  .then((res) => res.json())
  .then((dados) => {
    cb.innerHTML = dados[0].header;
    var acesso = dados[0].navegacao.split(",");
    for (var i = 0; i <= 3; i++) {
      bar.innerHTML += '<li class="nav-item">';
      bar.innerHTML +=
        '<a href="' +
        acesso[i] +
        '.html" class="nav-link">' +
        acesso[i] +
        "</a>";
      bar.innerHTML += "</li>";
    }
    for (var i = 0; i < dados[0].main.length; i++) {
      var cartao = '<div class="card mb-3 col-md-6 col-lg-6">';
      cartao += '<div class="row no-gutters">';
      cartao += '<div class="col-md-4" id="img">';
      cartao +=
        '<img src="' +
        dados[0].main[i].imagem +
        '" class="card-img" alt="..." />';
      cartao += "</div>";
      cartao += '<div class="col-md-8">';
      cartao += '<div class="card-body">';
      cartao += '<h5 class="card-title">' + dados[0].main[i].nome + "</h5>";
      cartao += '<p class="card-text">' + dados[0].main[i].descricao;
      cartao += "</p>";
      cartao += '<p class="card-text">';
      cartao +=
        '<small class="text-muted">' + dados[0].main[i].preco + "</small>";
      cartao += "</p>";
      cartao += "</div>";
      cartao += "</div>";
      cartao += "</div>";
      cartao += "</div>";
      pr.innerHTML += cartao;
    }
    rd.innerHTML = dados[0].footer;
  })
  .catch((erro) => console.error(`error ao tentar ler a api${erro}`));

// codigo para cadastrar os dados do formulario
function cadastrar() {
  var nome = document.getElementById("txtnome");
  var descricao = document.getElementById("txtdescricao");
  var preco = document.getElementById("txtpreco");
  var imagem = document.getElementById("txtimagem");

  fetch("http://localhost:3600/cadastrar", {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome: nome.value,
      descricao: descricao.value,
      preco: preco.value,
      imagem: imagem.value,
    }),
  })
    .then((response) => response.json())
    .then((rs) => console.log(rs))
    .catch((erro) => console.error(`erro ao tentar cadastrar ${erro}`));
}

function atualizar() {
  var idproduto = document.getElementById("idproduto");
  var nome = document.getElementById("txtnome");
  var descricao = document.getElementById("txtdescricao");
  var preco = document.getElementById("txtpreco");
  var imagem = document.getElementById("txtimagem");

  fetch("http://localhost:3600/atualizar", {
    method: "PUT",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      idproduto: idproduto.value,
      nome: nome.value,
      descricao: descricao.value,
      preco: preco.value,
      imagem: imagem.value,
    }),
  })
    .then((response) => response.json())
    .then((rs) => console.log(rs))
    .catch((erro) => console.error(`erro ao tentar Atualizar ${erro}`));
}
function apagar() {
  var idproduto = document.getElementById("idproduto");

  fetch("http://localhost:3600/deletar", {
    method: "DELETE",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      idproduto: idproduto.value,
    }),
  })
    .then((response) => response.json())
    .then((rs) => console.log(rs))
    .catch((erro) => {
      alert("produto apagado");
      console.error(`erro ao tentar Apagar ${erro}`);
    });
}
