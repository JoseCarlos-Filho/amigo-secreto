const {log} = console;
const listaAmigos = [];

function adicionar() {
    
    const nomeAmigo = document.getElementById("nome-amigo").value;
    // const elementoLista = document.querySelector(".friends__container");

    if (!nomeAmigo || nomeAmigo.trim() === "") {
        alert("Por favor, insira um nome de amigo válido.");
        document.getElementById("nome-amigo").focus();
        return;
    }

    
    listaAmigos.forEach(amigo => {
        if (amigo === nomeAmigo) {
            alert("Este amigo já está na lista.");
            document.getElementById("nome-amigo").focus();
            return;
        } else {
            listaAmigos.push(nomeAmigo);
        }
    })
    // elementoLista.textContent = listaAmigos.join(', ');
    atualizarLista();
    document.getElementById("nome-amigo").value = "";
    log(listaAmigos);
}

function sortear() {
    if (listaAmigos.length <= 1) {
        alert("É necessário pelo menos dois amigos para sortear.");
        return;
    }
    
    if (listaAmigos.length === 0) {
        alert("Não há amigos para sortear.");
        return;
    }

    const elementoSorteados = document.getElementById("lista-sorteio");

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
        listaResultado.push(`${amigoAtual} --> ${proximoAmigo}`);
    }
    log(listaResultado);
    elementoSorteados.innerHTML = listaResultado.join('<br>');
    document.getElementById("nome-amigo").focus();
    document.getElementById("nome-amigo").value = "";
}

function atualizarLista() {
    const elementoLista = document.querySelector(".friends__container");
    elementoLista.innerHTML = "";

    listaAmigos.forEach((amigo, index) => {
        const badge = document.createElement("div");
        badge.className = "friend-badge";

        const nome = document.createElement("span");
        nome.textContent = amigo;

        const btnRemover = document.createElement("button");
        btnRemover.innerHTML = "X";
        btnRemover.title = "Remover amigo";
        btnRemover.className = "remove-button";

        btnRemover.addEventListener("click", () => {
            removerAmigo(index);
        });
        

        // span.style.cursor = "pointer";
        // span.style.marginRight = "10px";
        // span.title = "Clique para remover";
        
        // span.addEventListener("click", () => {
        //     removerAmigo(index);
        // });

        badge.appendChild(nome);
        badge.appendChild(btnRemover);
        elementoLista.appendChild(badge);
    });
}

function removerAmigo(index) {
    listaAmigos.splice(index, 1);
    atualizarLista();
}

function reiniciar() {
    listaAmigos.length = 0;
    // document.querySelector(".friends__container").textContent = "";
    atualizarLista();
    document.getElementById("lista-sorteio").innerHTML = "";
    document.getElementById("nome-amigo").value = "";
    document.getElementById("nome-amigo").focus();
}