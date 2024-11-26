function soma(x:number, y:number):number{
    return x+y
  }

console.log(soma(2,3))

function printNome(firstNome:string, lastNome?:string):string{
    return firstNome+" "+(lastNome??"Sem Nome")
  }

console.log(printNome("Rubens"))
console.log(printNome("Rubens", "Marcondes"))

const subtracao = function (x: number, y:number) {
  return x-y
}

const arranjo = ["Rubens", "Eder", "Bernard", "Hulk"]
const resulta  = arranjo.find(function (item){
  return item === "Bernard"
})

console.log(resulta)
console.log(subtracao(5,1))

const pesquisa = arranjo.filter(item => item.includes('r'))
console.log(pesquisa)
