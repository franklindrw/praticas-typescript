import { LivrosProps } from "./selectionSort";

export function menorValor(arrProdutos: LivrosProps[], posicaoInicial: number) {
    let menorPreco = posicaoInicial;

    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
        if (arrProdutos[atual].preco < arrProdutos[menorPreco].preco) {
            menorPreco = atual;
        }
    }

    return menorPreco;
}
