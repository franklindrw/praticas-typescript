import { User } from "./User";

export class Admin extends User {
    constructor(nome: string, email: string, nascimento: Date, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }

    criarCurso(CurseName: string, vagas: number) {
        return `Curso de ${CurseName} criado com ${vagas}`;
    }
}