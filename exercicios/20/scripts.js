function decrementar (num) {
    for(let x = num; x >= 0; x--){
        if(x % 2 == 0){
            console.log(x);
        }
    }
}

console.log(decrementar(5));