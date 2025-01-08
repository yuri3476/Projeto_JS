num1 = [1,2,3,4,5,6];
num2 = [7,6,5,9];

function verificarElementos(arr) {
    if(arr.length < 5){
        console.log("Poucos elementos");
    } else {
        console.log("Muitos elementos");
    }
}

verificarElementos(num1);
verificarElementos(num2);
