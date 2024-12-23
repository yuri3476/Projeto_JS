// shift(remove o elemento do inicio do Array) e unshift(adiciona o elemento no inicio do Array)

let carros = ["BMW", "Audi", "VW", "Fiat"];

let removerPrimeiroCarro = carros.shift();

console.log(removerPrimeiroCarro);
console.log(carros);

carros.unshift('Gurgel');

console.log(carros);
console.log(carros[0]);

