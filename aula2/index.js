var nome = "Rubens Marcondes";
var numero = 20;
var verdade = true;
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
var list = [1, 2, 3];
var tuple = [5, "tuple"];
console.log(list, tuple, Color.Blue);
var qualquer = "um string";
console.log(qualquer);
qualquer = 1;
console.log(qualquer);
var desconhecido = "outro string";
if (typeof desconhecido === "string") {
    console.log(desconhecido);
}
