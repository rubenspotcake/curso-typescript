"use strict";
let nome = "Rubens Marcondes";
let numero = 20;
let verdade = true;
console.log(nome);
console.log(numero);
console.log(verdade);
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Blue"] = "blue";
    Color["Black"] = "black";
})(Color || (Color = {}));
console.log(Color.Black);
let list = [1, 2, 3];
let tuple = [5, "tuple"];
console.log(list, tuple, Color.Blue);
let qualquer = "um string";
console.log(qualquer);
qualquer = 1;
console.log(qualquer);
let desconhecido = "outro string";
//if (typeof desconhecido === "string"){
