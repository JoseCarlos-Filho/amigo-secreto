let amigos = [];

function adicionar() {
    let amigo = document.getElementById("nome-amigo");
    let lista = document.getElementById("lista-amigos");

    amigos.push(amigo.value);

    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent += ', ' + amigo.value;
    }

    amigo.value = '';    
}

function sortear() {
  
}