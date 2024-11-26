function soma(x, y) {
    return x + y;
}
console.log(soma(2, 3));
function printNome(firstNome, lastNome) {
    return firstNome + " " + (lastNome !== null && lastNome !== void 0 ? lastNome : "Sem Nome");
}
console.log(printNome("Rubens"));
console.log(printNome("Rubens", "Marcondes"));
var subtracao = function (x, y) {
    return x - y;
};
var arranjo = ["Rubens", "Eder", "Bernard", "Hulk"];
var resulta = arranjo.find(function (item) {
    return item === "Bernard";
});
console.log(resulta);
console.log(subtracao(5, 1));
var pesquisa = arranjo.filter(function (item) { return item.includes('r'); });
console.log(pesquisa);
