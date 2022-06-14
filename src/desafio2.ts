
class Pessoa {

    nome: string;
    idade: number;
    profissao: Profissoes;

    constructor(nome: string, idade: number, profissao: Profissoes) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
}

enum Profissoes {
    Atriz,
    Padeiro
}

let pessoa1 = new Pessoa('maria', 29, Profissoes.Atriz);
let pessoa2 = new Pessoa('roberto', 19, Profissoes.Padeiro);
let pessoa3 = new Pessoa('Laura', 32, Profissoes.Atriz);
let pessoa4 = new Pessoa('carlos', 19, Profissoes.Padeiro);
