let nome : string = "Rubens Marcondes"
let numero : number = 20
let verdade : boolean = true

console.log(nome)
console.log(numero)
console.log(verdade)

enum Color {Red = "red", Blue = "blue", Black= "black"}
console.log(Color.Black)

let list : number[] = [1,2,3]
let tuple : [number, string] = [5, "tuple"]

console.log(list, tuple, Color.Blue)

let qualquer : any = "um string"
console.log(qualquer)
qualquer  = 1
console.log(qualquer)

let desconhecido : unknown = "outro string"
if (typeof desconhecido === "string"){

