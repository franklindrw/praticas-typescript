interface UserProps {
    nome: string;
    idade: number;
    cpf: string;
    email: string;
}

const cliente: UserProps = {
    nome: "Franklin",
    idade: 25,
    cpf: "445348733545",
    email: "franklindrw@gmail.com",
};

console.log(
    `O nome do cliente é ${cliente.nome}, e essa pessoa tem ${cliente.idade}`
);
