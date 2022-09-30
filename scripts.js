function adicionarFilme(){
  var campoFilmeFavorito = document.getElementById("filme").value;
  var elementoFilmeFavorito = "<img src=" + campoFilmeFavorito + ">"
  var elemntoListaFilmes = document.getElementById("listaFilmes")
  elementoListaFilmes.innerHTML = elementoFilmeFavorito
}