function imprimir(arg) {
    return arg;
}
var saida1 = imprimir("Olá, mundo do Typescript");
var saida2 = imprimir(115);
console.log(saida1, saida2);
function padLeft(valor, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + valor;
    }
    if (typeof padding === "string") {
        return padding + valor;
    }
    throw new Error("Esperado um número ou uma string");
}
console.log(padLeft("Olá!!!", 5));
console.log(padLeft("Olá!!!", "#####"));
function imprimeFuncionario(funcionario) {
    console.log(funcionario);
}
function isString(value) {
    return typeof value === "string";
}
var algumValor = "Testes";
var tamanho = algumValor.length;
