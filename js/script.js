var cb = document.getElementById("cabecalho");
var bar = document.getElementById("menu");
var pr = document.getElementById("principal");
var rd = document.getElementById("rodape");
fetch("http://10.26.45.43:4500/listar")
  .then((res) => res.json())
  .then((dados) => {
    cb.innerHTML = dados[0].header;
    var acesso = dados[0].navegacao.split(",");
    for (var i = 0; i <= 3; i++) {
      bar.innerHTML += '<li class="nav-item">';
      bar.innerHTML += '<a hrrf="#" class="nav-link">' + acesso[i] + "</a>";
      bar.innerHTML += "</li>";
    }
    for (var i = 0; i <= 1; i++) {
      pr.innerHTML += dados[0].main[i].nome;
    }
    rd.innerHTML = dados[0].footer;
  })
  .catch((erro) => console.error(`error ao tentar ler a api${erro}`));
