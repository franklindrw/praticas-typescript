import { menorValor } from "./menorValor";

export interface LivrosProps {
    titulo: string;
    preco: number;
}

let Livros: LivrosProps[] = require("./livros.json");

for (let atual = 0; atual < Livros.length - 1; atual++) {
    let menor = menorValor(Livros, atual);

    let LivroAtual = Livros[atual];
    let livroMenorPreco = Livros[menor];

    Livros[atual] = livroMenorPreco;
    Livros[menor] = LivroAtual;
}

console.log(Livros);
