function idCard(){

    // declaring string variables by getting them from input forms in index.html
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value ;
    let address = document.getElementById("address").value ;

    // declaring integer variables by getting them from input forms in index.html and passiong them as integers
    let age = parseInt(document.getElementById("age").value) ;
    let phoneNumber = parseInt(document.getElementById("phoneNumber").value) ;

    // creates array for integers that are grabbed from index.html input tags
    let numberArray = [] ;
    numberArray.push(age,phoneNumber);
    
    // takes values in array and decides wether it is a phone number or age
    for (let i = 0 ; i < numberArray.length ; i++ ){
        if(numberArray[i] <= 100){
            //puts age onto ID card by changing html element with id "postAge"
            document.getElementById("postAge").innerHTML = "Age: " + age ;
        }
        else if (numberArray[i]> 100){
            // puts inputted phone number onto ID card by changed html element with id "postPhoneNumber"
            document.getElementById("postPhoneNumber").innerHTML = "Phone Number:  " + phoneNumber ;
        }
    }

    // putting firstname and lastname variable onto ID Card by changing html element with id "postFullName"
    document.getElementById("postFullName").innerHTML = firstname +" "+ lastname  ;

    // putting address onto ID card by changing html element with id "postAddress"
    document.getElementById("postAddress").innerHTML = address ;

}   