"use strict";
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    saudacao() {
        return `Olá, sou o ${this.nome} e tenho ${this.idade}`;
    }
}
const pessoa = new Pessoa("Rubens", 45);
console.log(pessoa.saudacao());
class Animal {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    fazerSom() {
        console.log(`${this.nome} faz um som!!!`);
    }
    mostraIdade() {
        console.log(`Sua idade eh ${this.idade}`);
    }
    mostrarTipo() {
        console.log(`O tipo do animal é ${this.tipo}`);
    }
}
class Cachorro extends Animal {
    constructor(nome, idade) {
        super(nome, idade, "Cachorro");
    }
    fazerSom() {
        console.log(`O ${this.tipo} late`);
    }
    mostrarDetalhes() {
        this.mostrarTipo();
    }
}
const animal = new Animal("Animal", 5, "Desconhecido");
animal.fazerSom();
class Carro {
    constructor(marca) {
        this.marca = marca;
    }
    exibirMarca() {
        console.log(this.marca);
    }
}
const carro = new Carro("Toyota");
carro.exibirMarca();
