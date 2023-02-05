export class User {
    #nome: string;
    #email: string;
    #nascimento: Date;
    #role?: string;
    #ativo?: boolean;

    constructor ( nome: string, email: string, nascimento: Date, role?: string, ativo = true) {
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || 'estudante';
        this.#ativo = ativo;
    };

    get nome() {
        return this.#nome;
    }

    set nome(nome) {
        if (nome === ''){
            throw new Error('Formato Inválido!');
        }

        this.#nome = nome;
    }

    get email() {
        return this.#email;
    }

    set email(email){
        if (email === ''){
            throw new Error('Formato Inválido!');
        }
        
        this.#email = email;
    }

    get nascimento() {
        return this.#nascimento;
    }

    set nascimento(nascimento) {
        this.#nascimento = nascimento;
    }

    get role() {
        return this.#role;
    }

    set role(role) {
        this.#role = role;
    }

    get ativo() {
        return this.#ativo;
    }

    set ativo(ativo) {
        this.#ativo = ativo;
    }

    #userData() {
        return ({
            nome: this.#nome,
            email: this.#email,
            nascimento: this.#nascimento,
            role: this.#role,
            ativo: this.#ativo,
        });
    }

    exibirInfos() {
        const User = this.#userData();
        return `${User.nome}, ${User.email}`;
    }
}
