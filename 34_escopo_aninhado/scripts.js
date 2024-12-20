let a = 10;

function multiplicar(x,y) {
    let a = x * y;

    if(a > 10) {

         let a = 0;

         a++;

         console.log(a);  // escolo if dentro da função
    }


    console.log(a);   // escopo da função
}


console.log(a);  // escopo global

multiplicar(2,7);
