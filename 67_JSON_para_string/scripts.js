let pessoa = {
    "nome": "Matheus",
    "idade": 28,
    "profissao": "Programador",
    "hobbies": ["Video game", "Leitura", "Correr"],
}

let pessoaTexto = JSON.stringify(pessoa);  // vai converter o objeto Pessoa em texto

console.log(pessoa);
console.log();
console.log(pessoaTexto);

let pessoaJSON = JSON.parse(pessoaTexto);
console.log(pessoaJSON);
console.log(pessoaJSON.hobbies[0]);

