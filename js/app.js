const {log} = console;
const listaAmigos = [];

function adicionar() {
    
    const nomeAmigo = document.getElementById("nome-amigo").value;
    const elementoLista = document.querySelector(".friends__container");

    if (!nomeAmigo || nomeAmigo.trim() === "") {
        alert("Por favor, insira um nome de amigo válido.");
        document.getElementById("nome-amigo").focus();
        return;
    }

    listaAmigos.push(nomeAmigo);
    elementoLista.textContent = listaAmigos.join(', ');
    document.getElementById("nome-amigo").value = "";
    log(listaAmigos);
}

function sortear() {
    const elementoSorteados = document.getElementById("lista-sorteio");
    
    if (listaAmigos.length === 0) {
        alert("Não há amigos para sortear.");
        return;
    }

    // algoritmo de Fisher-Yates (Knuth shuffle)
    for (let i = listaAmigos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [listaAmigos[i], listaAmigos[j]] = [listaAmigos[j], listaAmigos[i]];
    }

    // exibindo o resultado do sorteio.
    const listaResultado = [];
    for (let i = 0; i < listaAmigos.length; i++) {
        const amigoAtual = listaAmigos[i];
        const proximoAmigo = listaAmigos[(i + 1) % listaAmigos.length];
        listaResultado.push(`${amigoAtual} -> ${proximoAmigo}`);
    }
    log(listaResultado);
    elementoSorteados.innerHTML = listaResultado.join('<br>');
    document.getElementById("nome-amigo").focus();
    document.getElementById("nome-amigo").value = "";
}

function reiniciar() {
    listaAmigos.length = 0;
    document.querySelector(".friends__container").textContent = "";
    document.getElementById("lista-sorteio").innerHTML = "";
    document.getElementById("nome-amigo").value = "";
    document.getElementById("nome-amigo").focus();
}