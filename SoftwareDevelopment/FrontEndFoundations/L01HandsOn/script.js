function numberChecking(number1 , number2){
    if(number1 > 100){
        console.log("Number 1 has too many digits");
    }
    if (number1 < 0){
        console.log("Number 1 is negative");
    }
    
    if(number2 < 20){
        console.log("Number 2 is not a very high number");
    }
    if(number2 > 50){
        console.log("Number 2 is a high number");
    }
}

numberChecking(-1,2)
