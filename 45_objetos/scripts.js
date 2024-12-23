// [] = array
// {} = Objetos


let cachorro = {
    patas: 4,
    nome: 'Shark',
    latir: function() {     //Método
        console.log("Au Au");   
    }
}

console.log(cachorro.patas);  //propriedade
console.log(cachorro.nome);   //propriedade
cachorro.latir();   

let cadastro = {
    nome: "Paulo",
    idade: 23,
    cpf: 12345
}

console.log(cadastro);
console.log(cadastro.nome);
console.log(cadastro.idade);
console.log(cadastro.cpf);