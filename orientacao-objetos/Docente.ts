import { User } from "./User";

export class Docente extends User {
    constructor(nome: string, email: string, nascimento: Date, role = 'docente', ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }

    aprovaEstudante(estudante: string, curso: string) {
        return `estudante ${ estudante } aprovado(a) no curso ${ curso }`;
    }
}