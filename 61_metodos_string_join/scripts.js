// Junta elementos em um array em uma frase, por meio de um separador

let frase = "Testando o método Join";

let palavras = frase.split(" ");


let novaFrase = palavras.join("@");

console.log(novaFrase);
console.log(palavras.join(" "));
