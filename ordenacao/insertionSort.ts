import { LivrosProps } from "./selectionSort";

let Livros: LivrosProps[] = require("./livros.json");

function insertionSort(lista: any) {
    for (let atual = 0; atual < lista.length; atual++) {
        let analise = atual;

        while (analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
            let itemAnalise = lista[analise];
            let itemAnterior = lista[analise - 1];

            lista[analise] = itemAnterior;
            lista[analise - 1] = itemAnalise;

            analise--;
        }
    }

    console.log(lista);
}

insertionSort(Livros);
