function multiplyTwoNumbers(firstnumber , secondnumber){
    let result = firstnumber * secondnumber;
    return result;
}

let multiplyResult = multiplyTwoNumbers(8,5);

function calculateNumbers(number1 , number2){
    let number1 = 10;
    let number2 = 3;
    let number3 = number1 + number2;

    if(number3 <= 10){
        alert("Big number!");
    }

    else {
        alert("small number :( ");
    }
}

function loopingThroughArray(nameArray){

    for( let i=0 ; i < nameArray.length ;i++ ){
        console.log("I admire" + nameArray[i]);
    }

    let names = ["Anna", "Isaiah", "Kenneth", "Eliya"];
    loopingThroughArray(names);
}


function loopingThruArray(arrayName){
    let arrayName = ["Levi", "Lydia", "Anna", "Isaiah"];

    for( let x= 0 ; x <= arrayName.length ; i++){

        if( arrayName[i] === "Levi"){
            console.log("Levi is my brother!");
        }

        else if ( arrayName[i] === "Lydia"){
            console.log("Lydia is my sister!");
        }

        else if (arrayName[i] === "Anna"){
            console.log("I am Anna!");
        }

        else if ( arrayName[i] === "Isaiah"){
            console.log("Isaiah is the love of Anna's life.");
        }

        
    }


    return "done looping thru array 2 with arrayName!";
}


let result = loopingThruArray();
alert(result);


function addTwoStrings(string1 , string2){
    return string1 + string2 ;
}

let myString = addTwoStrings("John", "Smith");
console.log(myString);


function addNumbers() {
    alert(2+3);
}

let myAge = 20;

function ageInTwentyYears(){
    return myAge + 1;
}