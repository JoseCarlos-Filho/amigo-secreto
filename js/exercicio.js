const {log} = console;
/*
Adicione os números 1,2,3 em uma variável chamada minhaLista e armazene os 
números 4, 5 e 6 separadamente em outra variável. 
Use o método concat() para combinar as sequências de valores em uma nova lista chamadanovaLista.
 Imprima novaLista no console.
*/

let minhaLista = [1, 2, 3];
let lista = [4, 5, 6];
let novaLista = minhaLista.concat(lista);
log(novaLista);

// Remova o último elemento de novaLista. Imprima novaLista após a remoção.
novaLista.pop();
log(novaLista);

// Utilize o algoritmo de Fisher-Yates (também conhecido como Knuth Shuffle) 
// para embaralhar os elementos em novaLista. 
// Pesquise e adapte o código para realizar o embaralhamento.

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        
        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
        [lista[indiceAleatorio], lista[indice - 1]];
    }
    return lista;
}

log(embaralha(novaLista));

// Crie uma função chamada removerDuplicatas que aceita um array
//  como parâmetro e retorna um novo array sem elementos duplicados.
//  Teste a função com novaLista e imprima o array resultante.
function removeDuplicatas(lista) {
    // let listaSemDuplicatas = [];
    // for (let indice = 0; indice < lista.length; indice++) {
    //     if (!listaSemDuplicatas.includes(lista[indice])) {
    //         listaSemDuplicatas.push(lista[indice]);
    //     }
    // }
    // return listaSemDuplicatas;
    return [...new Set(lista)];
}

let listaDuplicatas = [1, 2, 1, 3, 4, 5, 4, 6, 7, 8, 7, 9];
log(removeDuplicatas(listaDuplicatas));