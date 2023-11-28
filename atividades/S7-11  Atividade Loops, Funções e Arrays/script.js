/*Escreva uma função que consiga inserir novos elementos em uma lista. A lista pode armazenar no máximo 10 elementos. ⁠Elementos do tipo string com mais de 7 caracteres não são permitidos.

Em caso de sucesso, retorne: "Elemento inserido com sucesso, a lista agora é: x"
sendo x lista atualizada.

Em caso de falha, retorne: "Não foi possível inserir este valor".*/

function inserirElemento(lista, elemento) {
    if (lista.length < 10) {
        lista.push(elemento);
        return "Elemento inserido com sucesso, a lista agora é: " + lista;
    } else {
        return "Não foi possível inserir este valor";
    }
}

console.log(inserirElemento(["a", "b", "c"], "d"));

/*Escreva uma função que recebe uma lista a como parâmetro. A lista a deve ter exatamente 15 elementos inteiros. ⁠Crie também uma lista b de mesmo tipo, observando a seguinte lei de formação:

"Todo elemento da matriz b deve ser o quadrado do elemento da matriz a correspondente".

Retorne a lista b resultante.*/

function matrizQuadrada(lista) {
    let b = [];
    for (let i = 0; i < lista.length; i++) {
        b.push(lista[i] * lista[i]);
    }
    return b;
}

console.log(matrizQuadrada([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));