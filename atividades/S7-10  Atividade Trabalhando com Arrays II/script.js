/*Escreva uma função que receba uma lista a de dimensão 30 composta apenas por números inteiros. A função deve retornar a quantidade de valores pares e ímpares existentes na lista recebida.

Exemplos de saída: ⁠A lista recebida possui x elementos pares e y elementos ímpares.*/

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
let pares = 0;
let impares = 0;

function buscarParesImpares (array) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            pares++;
        } else {
            impares++;
        }
    }

    return `⁠A lista recebida possui ${pares} elementos pares e ${impares} elementos ímpares.`
}

// const resultado = buscarParesImpares(lista);
// console.log(buscarParesImpares(lista));

/*Escreva uma função que recebe uma lista b de tamanho 10, composta por números inteiros.⁠

Retorne o total de elementos ímpares existentes na matriz e também o percentual do valor total de números ímpares em relação à quantidade total de elementos armazenados na matriz.

Retorne o seguinte texto: "O total de valores ímpares é x e corresponde a y% da lista" */

const lista2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let totalImpares = 0;
let total = 0;

function buscarTotalImpares (array) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2!= 0) {
            totalImpares++;
        }
    }

    total = array.length * 2;

    return `O total de valores ímpares é ${totalImpares} e corresponde a ${totalImpares / total * 100}% da lista.`
}

// const resultado = buscarTotalImpares(lista2);

// console.log(resultado);

/*Escreva uma função que receba como parâmetro duas listas a e b, cada uma com dez elementos. ⁠A função deve realizar a validação do tamanho da lista. Caso sejam maiores ou menores que 10, retorne: "Lista fora dos padrões necessários".

A lista a deve ser composta por valores divisíveis por 2 e 3, enquanto a lista b deve ser composta apenar por valores múltiplos de 5. ⁠A composição das listas deve ser validada pela função. Caso a composição não esteja correta, retorne: "Valores não permitidos encontrados". */

const listaA = [6, 12, 18, 24, 30, 36, 42, 48, 54, 60];
const listaB = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

function validarMatriz (listaA, listaB) {
    if (listaA.length!= 10 || listaB.length!= 10) {
        return "Lista fora dos padrões necessários";
    }

    for (let i = 0; i < listaA.length; i++) {
        if (listaA[i] % 2!= 0 && listaA[i] % 3!= 0) {
            return "Valores não permitidos encontrados";
        }
    }

    for (let i = 0; i < listaB.length; i++) {
        if (listaB[i] % 5!= 0) {
            return "Valores não permitidos encontrados";
        }
    }
    return "Lista valida";
}

const resultado = validarMatriz(listaA, listaB);

console.log(resultado);





