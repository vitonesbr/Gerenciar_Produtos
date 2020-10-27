fetch("http://10.26.45.43:4500/listar")
  .then((res) => res.json())
  .then((dados) => {
    document.getElementById("cabecalho").innerHTML = dados[0].header;
  })
  .catch((erro) => console.error(`error ao tentar ler a api${erro}`));
