function imprimir<T>(arg:T):T{
  return arg
}

let saida1 = imprimir("Olá, mundo do Typescript")
let saida2 = imprimir(115)

console.log(saida1, saida2)

function padLeft(valor:string, padding:number|string){
  if(typeof padding === "number"){
    return Array(padding + 1).join(" ") + valor
  }

  if(typeof padding === "string"){
    return padding + valor
  }

  throw new Error("Esperado um número ou uma string")
}

console.log(padLeft("Olá!!!", 5))
console.log(padLeft("Olá!!!", "#####"))


interface Pessoa{
  nome:string
  idade:number
}

interface Funcionario{
  matricula:string
  salario:number
}

type PessoaFuncionario = Pessoa & Funcionario

function imprimeFuncionario(funcionario:PessoaFuncionario){
  console.log(funcionario)
}

function isString(value: any):value is string{
  return typeof value === "string"
}

let algumValor:any = "Testes"

let tamanho:number = (algumValor as string).length
