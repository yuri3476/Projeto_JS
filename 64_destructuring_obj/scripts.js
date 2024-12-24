// definir variáveis com propriedades do objeto com uma notação diferente, chamada destructuring

let obj = {
    rodas: 4,
    portas: 4,
    tetosolar: true,
    motor: '2.0',
}

const {rodas: vRodas, portas: vPortas, tetosolar: vTetoSolar, motor: vMotor} = obj;

console.log(vRodas);
console.log(vPortas);
console.log(vTetoSolar);
console.log(vMotor);