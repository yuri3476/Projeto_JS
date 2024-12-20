let x = 10;

if(x > 5) {
    let x = 20;
    x++;
    console.log(x);  // escopo do if
}

console.log(x);  // escopo global