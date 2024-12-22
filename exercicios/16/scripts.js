function tipoDado(x) {
    if(typeof(x) === 'number') {
        console.log("É um Number");
    } else if(typeof(x) === 'boolean'){
        console.log("É um Boolean");
    } else if(typeof(x) === 'string'){
        console.log("É uma String");
    }
}

tipoDado(5);
tipoDado("Ana");
tipoDado(true);

