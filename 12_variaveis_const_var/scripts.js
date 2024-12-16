// VAR é uma forma mais antiga, deve-se optar por LET ou CONST
// CONST vem de constante, ou seja, o seu valor não pode ser alterado

var nome = "yuri";
const ip = "127.0.0.1";

console.log(nome);
console.log(ip);

ip = 'dasdsa';  // da erro (TypeError)