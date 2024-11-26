var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.saudacao = function () {
        return "Ol\u00E1, sou o ".concat(this.nome, " e tenho ").concat(this.idade);
    };
    return Pessoa;
}());
var pessoa = new Pessoa("Rubens", 45);
console.log(pessoa.saudacao());
var Animal = /** @class */ (function () {
    function Animal(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    Animal.prototype.fazerSom = function () {
        console.log("".concat(this.nome, " faz um som!!!"));
    };
    Animal.prototype.mostraIdade = function () {
        console.log("Sua idade eh ".concat(this.idade));
    };
    Animal.prototype.mostrarTipo = function () {
        console.log("O tipo do animal \u00E9 ".concat(this.tipo));
    };
    return Animal;
}());
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro(nome, idade) {
        return _super.call(this, nome, idade, "Cachorro") || this;
    }
    Cachorro.prototype.fazerSom = function () {
        console.log("O ".concat(this.tipo, " late"));
    };
    Cachorro.prototype.mostrarDetalhes = function () {
        this.mostrarTipo();
    };
    return Cachorro;
}(Animal));
var animal = new Animal("Animal", 5, "Desconhecido");
animal.fazerSom();
var Carro = /** @class */ (function () {
    function Carro(marca) {
        this.marca = marca;
    }
    Carro.prototype.exibirMarca = function () {
        console.log(this.marca);
    };
    return Carro;
}());
var carro = new Carro("Toyota");
carro.exibirMarca();
