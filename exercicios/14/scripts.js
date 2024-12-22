function numeroAleatorio (num) {
    return Math.floor(Math.random() * num) + 1;
}

console.log(numeroAleatorio(10));
console.log(numeroAleatorio(3));
console.log(numeroAleatorio(1000));