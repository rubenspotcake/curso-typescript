class Pessoa{
  nome: string
  idade: number

  constructor(nome:string, idade:number){
    this.nome = nome
    this.idade = idade
  }
  
  saudacao() {
    return `Olá, sou o ${this.nome} e tenho ${this.idade}`
  
  }
}

const pessoa = new Pessoa("Rubens", 45)
console.log(pessoa.saudacao())

class Animal{
    public nome: string
    private idade: number
    protected tipo: string

    constructor(nome:string, idade:number, tipo:string){
      this.nome = nome
      this.idade = idade
      this.tipo = tipo
    }

    public fazerSom():void{
      console.log(`${this.nome} faz um som!!!`)
    }

    private mostraIdade():void{
      console.log(`Sua idade eh ${this.idade}`)
    }

    protected mostrarTipo():void{
      console.log(`O tipo do animal é ${this.tipo}`)
    }
}

class Cachorro extends Animal{
  constructor(nome:string, idade:number){
    super(nome, idade, "Cachorro")
  }

  public fazerSom():void{
    console.log(`O ${this.tipo} late`)
  }

  public mostrarDetalhes():void{
    this.mostrarTipo()
  }
}

const animal = new Animal("Animal", 5, "Desconhecido")
animal.fazerSom()


class Carro{
  readonly marca:string
  constructor(marca:string){
    this.marca = marca
  }

  public exibirMarca():void{
    console.log(this.marca)
  }
}

const carro = new Carro("Toyota")
carro.exibirMarca()
