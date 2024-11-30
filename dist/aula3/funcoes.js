"use strict";
function soma(x, y) {
    return x + y;
}
console.log(soma(2, 3));
function printNome(firstNome, lastNome) {
    return firstNome + " " + (lastNome !== null && lastNome !== void 0 ? lastNome : "Sem Nome");
}
console.log(printNome("Rubens"));
console.log(printNome("Rubens", "Marcondes"));
const subtracao = function (x, y) {
    return x - y;
};
const arranjo = ["Rubens", "Eder", "Bernard", "Hulk"];
const resulta = arranjo.find(function (item) {
    return item === "Bernard";
});
console.log(resulta);
console.log(subtracao(5, 1));
const pesquisa = arranjo.filter(item => item.includes('r'));
console.log(pesquisa);
