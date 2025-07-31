let amigos = [];

// adicionamos o nome do amigo na array e validamos atráves das estruturas condicionais
function adicionarAmigo() {
  let nomeInput = document.querySelector('input');
  let nomeAmigo = nomeInput.value.trim();
  if (nomeAmigo == "" || amigos.includes(nomeAmigo)) {
    alert("Por favor, insira um nome válido ou não repetido!")
    limparCampo();
  } else {
    amigos.push(nomeAmigo);
    console.log(amigos);
    limparCampo();
    atualizarLista();
  }
}


// validamos o comrpimento da lista por nomes repetidos, se esta vazia ou não
//sorteamos o numero pelo math.floor e math.random
//esvaziamos a listaAmigos da tela e mostramos o resultado sorteado 
function sortearAmigo() {
  if (amigos.length == 0) {
    alert("A lista se encontra vázia! Adicione amigos primeiro!");
  } else {
    const numeroSorteado = Math.floor(Math.random() * amigos.length);
    const lista = document.getElementById("listaAmigos");

    lista.innerHTML="";

    const resultado = document.createElement("li");
    resultado.textContent = `Amigo sorteado: ${amigos[numeroSorteado]}`;

    lista.appendChild(resultado);
  }
}

//Limpa o campo da caixa de texto (input)
function limparCampo() {
  const nomeAmigo = document.querySelector("input");
  nomeAmigo.value = "";
}

// Atualiza nossa lista na tela criando o elemento li no html
function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    const item = document.createElement("li");
    item.textContent = amigos[i];
    lista.appendChild(item);
  }
  limparCampo()
}