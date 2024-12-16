// &&(and) -> para ser true, os dois 'lados' da comparação precisam ser true
// ||(or) -> para ser true, basta um dos 'lados' da comparação ser true
// !(not) -> inverter os valores(true vira false)

console.log(5 > 3 && 3 == 2);
console.log(5 > 3 || 3 == 1);

console.log(3 == 3 && "Matheus" == "Matheus");
console.log("Felipe" == "João" || false);

console.log(!(true && true));

console.log(true && true);
console.log(false || false);